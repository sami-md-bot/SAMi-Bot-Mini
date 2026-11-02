/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['923261154942'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['SAMI MD'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SAMI',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaNkRIipiEBERlZLFbaIfUkgglc0EBOzw3zuwuqr6Yaan5i23OPfcc87NHyDLcYlM1AH5BygIvsEK9cuqKxCQwaQOQ0TAEASwgkAG6WJmwjy09daJ97vjSXKCCY1cmyl2vqEeLyM79fh17q4S5QU8hqCoTwn2/wCYzI/Frd2JoS10U2UXq3tTHESmrTjZgqaYux5v9iNfHGgq9wIePSLEBGeRVsQoRQQmJupeISZfo++biIISOeoa10XWepZK3opil+XeOF7C1W7e2nd0P5jwQOdfox/F21nSsrtlm2wma+qE1JNW4MxQuUs8zSZimdGDfJ9T24h6o1/iKEOBEaCswlX3Zd0HxnXuWVur1OBeX0QcH81q/hQKWm6LB4+vT5Kz59h8Tjzqa8SDdi9uT0HH6OL6vPCs6c1o49WtHpvBRWTKlZjs9Gk5Obht/jvxV/Kelcv/0V1Xtu52ojNb5nooDqJjV6w1lnKezbcOURMWF6all1ElZOXX6GN/E92NfeYrs7syEuNLRE6MeFwL3pkVfTo+8WLSBKviiLlP+rCqyR9FnsAoNdPYQ/l+k+mhWV+nxVQ3ktK2C3vNM0F6JcnSCrvBqeMKm5lLjNsid9IU4tp6HfGLeeocIreZndpBVBypa+RFysuzowvqjADI9GMICIpwWRFY4Tzrz1h6CGBwc5BPUPVUFxTicXS2yIAeCzkjjlit4TfiNFLGC01gnaZYW4255VeG7jcvYAgKkvuoLFEwx2WVk26FyhJGqATy39+HIENt9ebbe7UQk7LysrpIchi8m/pBxffzOqucLvPVfoEIkKnPY1RVOIvKXsY6g8SP8Q2pMaxKIIcwKdFHg4igAMgVqdHH0Kp50OsuLtUZ5/A0GIL06QcOgAwkhmUEmuY5iWNkgf+r/Nb0sLAovmWoAkOQPJ/RHC3REssxvMByjNS/7C8eHwx7wABVECclkIG6grYQcDPNcM088HVd0SJFjRTw2dF7Mt6kP4wWxfnsRyImneEU1+XcnYSiuEEMQsfg6noT3YX8fak1yss/gAAZ2NDFU3IznQUPk3s5CKyppoz2nTsJG+60PlAcQ/NTuybRZHMU6oWBOGFkqmybaaPtPYs5V1pf2WoT0KSbznxFx3dbaV76agG6YR/9XkzlYyngG+FsduF2u8TdmT6PNHoxXu58vjl5WHCOa0eoXRN7ZJrOxtLgKISD9fW12RS36to2In0gzmzA0oLiWOGrp2TvmX3OTPLrr8LPOPVe9dsQo+foZ7B38L+9eyPeR4x6DH/D+PWZ/MtATnavHTxwrGFx1zHWrhC3VLMfDKh5lWXpHl5oxb4wtd+1KwU8Ht+HoEhgFeYkBTKAWUByHIAhIHndZ9bIwvwPxVSFMowmmvWdJ7CslM85cHGKygqmBZBpUWIFmqdp9vETtVQ8aDwHAAA=', //Paste your session here 
    newsletterJid: '0029Vb9nlak5Ui2flkOa4k2f@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
        // Sticker Configuration
        packname: 'SAMI MD',
    
        // Bot Behavior
        selfMode: false, // Private mode - only owner can use commands
        autoRead: false,
        autoTyping: false,
        autoBio: false,
        autoSticker: false,
        autoReact: false,
        autoReactMode: 'bot',
        autoDownload: false,
        
        // Group Settings Defaults
        defaultGroupSettings: {
          antilink: false,
          antilinkAction: 'delete', // 'delete', 'kick', 'warn'
          antitag: false,
          antitagAction: 'delete',
          antiall: false, // Owner only - blocks all messages from non-admins
          antiviewonce: false,
          antibot: false,
          antibotAction: 'warn', // 'warn' | 'kick'
          anticall: false, // Anti-call feature
          antigroupmention: false, // Anti-group mention feature
          antigroupmentionAction: 'delete', // 'delete', 'kick'
          antigroupstatus: false, // Block group status posts
          antigroupstatusAction: 'delete', // 'delete', 'kick'
          antisticker: false, // Stickers not allowed in group
          antistickerAction: 'delete', // 'delete', 'kick'
          antibadword: false, // Block bad words in group
          antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
          welcome: false,
          welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
          goodbye: false,
          goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
          antiSpam: false,
          antiSpamAction: 'warn', // 'warn' | 'kick'
          antidelete: false,
          detect: false,
          chatbot: false,
          suppress: false, // Members get no command reply; owner and admins still can
          autosticker: false // Auto-convert images/videos to stickers
        },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: '',
      telegram: '8834454929:AAFObZTD28Aa4w7fh3FbpPcZyPlPIkyi5ew' // @BotFather token — required for .tg / .tgsticker
    },
    
      // KnightBot Mini media API (song/video/tiktok/facebook/instagram downloaders)
    // Change once here — all media commands read from this.
    mediaApiUrl: (process.env.YT_API_URL || 'https://api-xgp2.onrender.com').replace(/\/$/, ''),
    mediaApiKey: process.env.YT_API_KEY || 'knight',
    // KnightBot public API (reactions GIFs, etc.)
    knightApiUrl: (process.env.KNIGHT_API_URL || 'https://knightbotapi.stream').replace(/\/$/, ''),
    knightApiKey: process.env.KNIGHT_API_KEY || 'knight',
    princeApiUrl: (process.env.PRINCE_API_URL || 'https://api.princetechn.com').replace(/\/$/, ''),
    princeApiKey: process.env.PRINCE_API_KEY || 'prince',

    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://whatsapp.com/channel/0029Vb9nIak5Ui2flkOa4k2f',
      youtube: 'https://whatsapp.com/channel/0029Vb9nIak5Ui2flkOa4k2f'
    }
};
  
