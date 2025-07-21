const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

const ALIVE_IMAGE = "https://files.catbox.moe/2iyu0h.jpeg";
const MUSIC_URL = "https://files.catbox.moe/o919rq.mp3"; // Optional

cmd({
    pattern: "alive",
    alias: ["bot", "online"],
    desc: "Check if bot is alive",
    category: "main",
    react: "✌️",
    filename: __filename
},
async (conn, mek, m, { from, sender }) => {
    try {
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
        const uptime = runtime(process.uptime());
        const host = os.hostname();

        const fancyStyles = [
`╭─〔 *RAHEEM BOT STATUS* 〕─╮
┃ 🟢 Online and Working!
┃ 👑 Owner: ${config.OWNER_NAME}
┃ ⏱ Uptime: ${uptime}
┃ 🧠 RAM: ${usedMem}MB / ${totalMem}MB
┃ ⚙️ Mode: ${config.MODE}
┃ 🧾 Prefix: ${config.PREFIX}
┃ 💻 Host: ${host}
┃ 🔢 Version: 2.0.0
╰────────────────────────╯
> Powered by RAHEEM-XMD-3`,

`🟢 *RAHEEM-XMD-3 is Alive!*
👑 Owner: ${config.OWNER_NAME}
📶 Uptime: ${uptime}
💾 Memory: ${usedMem}/${totalMem}MB
🧩 Mode: ${config.MODE}
📍 Prefix: ${config.PREFIX}
🔢 Version: 2.0.0
💻 Host: ${host}
━━━━━━━━━━━━
ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM-CM`,

`╔══ ✦ BOT IS ONLINE ✦ ══╗
║ 🧠 RAM: ${usedMem}/${totalMem}MB
║ ⏳ Uptime: ${uptime}
║ 👑 Owner: ${config.OWNER_NAME}
║ ⚙️ Mode: ${config.MODE}
║ 🔢 Version: 2.0.0
╚═════════════════════╝
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM-XMD-3*`
        ];

        const emojiChoices = ['💠', '🔋', '🟢', '📡', '📶', '💻', '🚀', '🧪'];
        const caption = fancyStyles[Math.floor(Math.random() * fancyStyles.length)];
        const emoji = emojiChoices[Math.floor(Math.random() * emojiChoices.length)];

        // Send reaction
        await conn.sendMessage(from, {
            react: { text: emoji, key: mek.key }
        });

        // Send alive status with image
        await conn.sendMessage(from, {
            image: { url: ALIVE_IMAGE },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399470975987@newsletter',
                    newsletterName: config.BOT_NAME || 'RAHEEM-XMD-3🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Optional background audio
        await conn.sendMessage(from, {
            audio: { url: MUSIC_URL },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        await conn.sendMessage(from, { text: `❌ Error: ${e.message}` }, { quoted: mek });
    }
});
