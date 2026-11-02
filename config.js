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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGOUmaERHLCAKeBcRdWMfSiiwBAqsKlSc8N83sKen52F3tvetbpEnT2ae+g5IgRmaoBoMvoOS4ivkqFnyukRgAIwqjhEFbRBBDsEArMbFJcAtWZrv5eDmYIjM1s3mF6Gyq3F98Fb6/Cinu/vCtt7Asw3K6pjh8DeAZbo5C8fL7tgX6tWwVSwe85s+rIsecb36IaZVzBNPwPRey2/g2SBCTDFJrPKEckRhNkH1EmL6Nfq5Nb/cZcPZYerUGtQ3mpzaxMxJsB+egnFvoh9ilOnGWAq/Rn/NFbnvSCYfLRaGv7pdxd7lchSurBYT+qgumT+sGCwT17Pe6TOcEBQ5ESIc8/rLusuTqxa79FZZYyKoHSeYtIy1G7c2ZMzPh3Pim0NPZrJPbOdrxJ3NtFj3ovC83Ol6eleF3axy1W1ZX0iFfdXNO5apbpl/0+VfiS/pR1bS/6N7azGy8VDVLGe7nvWt1MwUizz4sditUiwxIzGxcZgctUPAvkYfmS67h0pyhN3tcXxSdENVZZT4rkTh1JQ8OWbuKUiN06n7SR/yiv6O5aRaDrsC0tZ4AZOlKM686ba6ZHPdd1dJdwlt2kqj0XI+YYqybt3tMG/1Olmod+XgPqHbIvCzZNWKrGpvOYvFXNquhK6ZvL06SlHtRGAgPNuAogQzTiHHBXmdiXIbwOjqoZAi/pIXuKQu/LGmDEWpf82VUJ3Siq5dJVlaRV30tM7eYkfNU8dx+AbaoKRFiBhDkY0ZL2g9Q4zBBDEw+POvNiDozt+Na8pJQhvEmDLuk6rMChh9uPpxCcOwqAj3ahKazQJRMOh+HiPOMUlYo2NFIA1P+IrME+QMDGKYMfSzQ0RRBAacVujn1JpF1AgvL8WJvBI90Ab5yxAcgQHoi5LYEwRF7sviQOn/wb7dGlhYlt8I4qANstczQRb6Ql+SRaUnyWK/edlcPH8ybAAjxCHOGBgAc7ZY9yJ5ZLnEJf1wPNZniW4mOvjs6CMa79LvO255PoeJimnteOVlam+MWFVXSEToEF02vjHeQOUxtW762z+AgAE4BKPwNOwoStzv+nZgecdTclbkx0Ke6vO0lSubJDcC47qcM1sLEqvY8eOk8gxf68yCiEpTo14vT71THomMK4qSh6OxcXtrqkXoikP0a7G7Kt9W+GEvoTHi3dl9aHl7cVxeff+wv0edTjbra91Uz1ZXi17VutSUfenON34nXDJ7st8PO+Q0NJR54ukLQeoonWLDDf09tK+hyX58VvgVp8arZhtj9Jp9AhsH/9u7d+JNxLrP9i8YP36Tf5lII1jWcC9LzkK+aNi6QHzv3natVtfmhOQ7mAr6OhWrsL7PdPB8/tUGZQZ5XNAcDAAkES1wBNqAFlWTWYfExW+KmXrXcW7JqOk8g4zrn3OwwTliHOYlGAhqX1I0UZTU59+42164PQcAAA==', //Paste your session here 
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
  
