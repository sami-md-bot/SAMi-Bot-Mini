const express = require('express');
const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <h2>SAMI MD Pairing Site</h2>
        <form action="/pair" method="GET">
            <input type="text" name="number" placeholder="923001234567" required>
            <button type="submit">Get Pairing Code</button>
        </form>
    `);
});

app.get('/pair', async (req, res) => {
    const number = req.query.number;
    if (!number) return res.send('Number daalein!');

    try {
        const { state, saveCreds } = await useMultiFileAuthState('auth_info');
        const sock = makeWASocket({
            auth: state,
            logger: pino({ level: 'silent' }),
            printQRInTerminal: false,
        });

        sock.ev.on('creds.update', saveCreds);

        // ✅ Asal Fix: Pehle connection ka intezar karein, phir code maangein
        let pairingCodeRequested = false;
        
        sock.ev.on('connection.update', async (update) => {
            const { qr } = update;
            
            // Jab QR event aaye (yani connection ready ho), tab code maangein
            if (qr && !pairingCodeRequested && !sock.authState.creds.registered) {
                pairingCodeRequested = true;
                try {
                    const code = await sock.requestPairingCode(number);
                    console.log('Pairing Code:', code);
                } catch (err) {
                    console.error('Code request error:', err.message);
                }
            }
        });

        // Thoda wait karein code generate hone ka
        await new Promise(resolve => setTimeout(resolve, 8000));
        
        // Code ko global variable mein save karein (simple tareeqa)
        const code = global.lastPairingCode || 'Code generate nahi hua, dobara try karein';
        
        res.send(`
            <h2>Aapka Pairing Code: <strong>${code}</strong></h2>
            <p>WhatsApp > Linked Devices > Link with phone number > yeh code daalein.</p>
            <p>Code daalne ke baad, <a href="/session">yahan click karein</a> Session ID ke liye.</p>
        `);
        
    } catch (error) {
        res.send('Error: ' + error.message);
    }
});

app.get('/session', (req, res) => {
    const sessionFile = path.join(__dirname, 'auth_info', 'creds.json');
    
    if (fs.existsSync(sessionFile)) {
        const data = fs.readFileSync(sessionFile, 'utf8');
        const b64 = Buffer.from(data).toString('base64');
        const sessionId = 'KnightBot!' + b64;
        res.send(`
            <h2>Aapki Session ID:</h2>
            <textarea rows="10" cols="50" readonly>${sessionId}</textarea>
        `);
    } else {
        res.send('Session file nahi mili. Pehle pairing code se connect karein.');
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Pairing site running on port ${PORT}`);
});
