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

        if (!sock.authState.creds.registered) {
            const code = await sock.requestPairingCode(number);
            res.send(`
                <h2>Aapka Pairing Code: <strong>${code}</strong></h2>
                <p>WhatsApp > Linked Devices > Link with phone number > code daalein.</p>
                <a href="/session">Session ID Dekhein (Code daalne ke baad)</a>
            `);
        } else {
            res.send('Yeh number pehle se registered hai.');
        }
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
