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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2bKiSBT8l3rFaNlEIeJGjAsKbiCLihPzUEKBpWxWFSh2+O8TePv27YeZnjtvtUWePJl56jvIC0zRAjVA+w5KgmvIULtkTYmABkZVHCMCOiCCDAINWBNx/5DMi172Ap6zPOkq96vysHZJfW0E0bCZvLAzw+JE+gaeHVBWxxSHvwH0KDu4km7dOFxaD+oo9kBd55416ee8qWKxLpzr1jfrbBq8gWeLCDHBeaKXJ5QhAtMFamyIydfoZ3Njxy5in9+Ywto2QiUuD6buRpLl7Kb8VNggMb4R5XA3gq/RFyMh24/5+eigFMs75QvBrsL6dENsPcX70qjtGiHkGcIweadPcZKjyIxQzjBrvqx7snQZ15uGC3vrivuVDJupA6uDD0lXaLK7a6U5r46merPnv0b8olvQiQulPzJTSAZz2T5skGt1M0ffJhGVl1zjmllxpXrxK3GbfGTl8n903xjhHs5U+V7Q+mFA4yZ0p6vNOFvq1m440L0idZXR5pRT3f8afUtRJ7HenVzIjmvc7ZVbjPtRXT/wLZCjsbVfKNLouNo1QX75pA9ZRX7HcnUc9vj5LFT1bO449nnJVZzTr3UrdYZ+tHoUM+OIw/NRCUxfP2256ixaXpMPLuuSj0M7La5qtJQTep/wjnA7ivcoGYxvb6+OLqgxI6AJzw4gKMGUEchwkbdnvQ6AUe2ikCD2EheQlRIS6XiwlFReso1ZP3azYD4reenQdarerjQXo8Ft73Nj/g10QEmKEFGKIgNTVpBmhSiFCaJA+/OvDsjRnb3b1haThA6IMaHMz6syLWD04enHJQzDosqZ2+ThuF0gAjT+8xgxhvOEtipWOSThCddofIKMAi2GKUU/+0MERUBjpEI/Z3ZcRK3shrMbTLzdFHRA9rIDR0ADqiiJiiD0ZFUWNUX8g367tbCwLL/liIEOSF/PBFlQBVWSxZ4iyaLavmwvnj8ZtoARYhCnFGhgvNo5SiRPdYs7F1E4mw31ZDhOhuCzo49gvEsfdOfl+RwmfUwa0y2vS8Mbxf3+BokIHaKr549mHuw9lvpt+PYPIEADa2Q3iWLik5zXZFZ0Jer7snfmpnvpZo4zZXniH6Khe5Yb2s3GP2FBXh82G1zvnCVk1foabFXfr/U4OcWnUuSDTA8nw7e2WoRqHKJfi5HdRg9mRTTeMt29upvJduBtlSIZqYG/G5C1u2T2RkgLKYCIuNj3BRuunbOHQ8UUGSpnBQ5jSq1Avs4s2Y6MfbIa/Yjsa2TSH18VfsWp9ardxhi9Jj+HrYP/7d078TZi/LPzC8aPv+Rf5nG0sxsYyJJpydcB1q8Q3/nbnuN4g+V5tocXYehcxCps7qsheD7/6oAyhSwuSAY0APOIFDgCHUCKqs2smcfFb4qNh7xp3pJp23kKKRt+zoGHM0QZzEqgCX1VUgReFAfPvwGkF1tSOwcAAA==', //Paste your session here 
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
  
