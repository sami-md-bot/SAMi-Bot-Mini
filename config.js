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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmKGNERi4iKd1FQ3NiHEgooxQKK4uaE/76BPT09D7uzvW91izx5TmbWd0ASnKMFasDwO0gpLiFD7ZI1KQJDMCqCAFHQBT5kEAxBZTqxcuE9K1R4J85XUV888mFpbh07KBPt6mpXU8OwnJ20N/DsgrS4xNj7DaDKqwuRm68vzslyDcFOPRSY5HQW2MXcWlN+fLHqTFXmeNICtogQU0xCI43QHVEYL1CzhZh+jX6xhPFjvNyS26jpVD1qqHROD/KDbWixGR9X0F5Xlm+lNqm+Rv+se4QMztZkv1ncOkwR1bPF6oA4bL8P7/X8LCq8aivkUXnv9HMcEuSbPiIMs+bLc1+Np9zcvlvJaWHIt418MfeLeDQ4OVbmVNCVhPl1x3M2H5Hka8QzOytOl2XPO1ROD+/YQ3Yf5g4/slvtuI0fT2hgr89oh3TuV+Jb+uGV2/+Z+2Z7Hfs8Sk7Myte8uMFZCe83f9ezLlqY6tP1bJYbkVOuOPdr9Fd6MUhoY9imOO1Hk5rmWVCrZObdzgqLJpKwDJSpw6KGGJ/0ISvo71jW1WC7KuLG1S5mb2EZPldrjzJKpxre6nfPXKpOLZn6tqh6hdcJOCXdqoo0aI4ze0Hx/nFzLKV324lyf1qoppP1tXMa7d5eHd1QY/pgyD+7gKIQ54xChhPyOlPkLoB+uUceRew1XiAIG36dOeadNPuFMDsifzedcDdbov3BphNWVX48UBQQf2S/gS5IaeKhPEf+DOcsoc0K5TkMUQ6Gf/7VBQTV7F24tpzId0GAac5sUqRxAv0PVT8uoeclBWH7hnh6u0AUDLnPY8QYJmHezrEgkHoRLpEeQZaDYQDjHP3sEFHkgyGjBfqZWj3x0cvN46k1mQ1AF9xfgmC//QoEUejzvCypkjCUB3/k36oWFqbpN4IY6IL49YyXeJVXRUmQ+6IkqO3L9uL5k2EL6CMGcZyDIdBXG6vvSxNjQx9k7U2nmhlqeqiBz44+rPE+erc3T69XL1Qwbcx9mi1nh1GgKDskIHT2s4M9mh6g/Fgalfb2DyBgCBaDFdLidHndl54J5TgyN9aDOcuBhg3anyxyl1vNDX8iT7acP7vXRh5H5YhecS9XR0eJWKcgJHvFWWdBSK+Xei7uba16a6v5qMQe+rWYElSuAUO95g15ul4iI4yW5wYtLqpqkh2nBFHD8a667kgjSSIsFUdLpO/4TuwVoSvYllceL/OyIn6QuPHYly7xfH2t3k37Ck3847PCLzu1WrXbAKNX9glsFfxv7d6Jtxbjnt1fMH78Jv+SyNFx20BXEs2NlA2wkUFcc9Wp0+FmjJD7Cd54zboJhdfUKw08n391QRpDFiT0DoYAEp8m2AddQJOi9axJguQ3xXSNM80qnLSdxzBn2mcODviOcgbvaZtWVZTFgSyJz78BWODEWT0HAAA=', //Paste your session here 
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
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
  
