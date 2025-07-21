const { cmd } = require('../command');
const config = require('../config');

const THANKS_IMG = 'https://files.catbox.moe/a97zm1.jpg';
const MUSIC_URL = 'https://files.catbox.moe/t7ul1u.mp3'; // Optional audio

cmd({
    pattern: "abdulrahim",
    alias: ["thanksto"],
    desc: "Thanks to the dev for helping",
    category: "main",
    react: "🇹🇿",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const mention = `@${m.sender.split("@")[0]}`;

        const captions = [
`╭─〔 *RAHEEM-XMD-3 CREDITS* 〕─╮
┃ 👨‍💻 Dev: RAHEEM-CM
┃ 📱 Number: +255763111390
┃ 🤖 Bot: RAHEEM-XMD-3
┃ 🙋‍♂️ Salamu kwako: ${mention}
╰────────────────────────╯
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM CM`,

`🪀 *Special Thanks To Dev*
👨‍💻 Dev: RAHEEM-CM
📞 +255763111390
🔧 Bot Name: RAHEEM-XMD-3
🙋‍♂️ Mentioned: ${mention}
━━━━━━━━━━━━━━
> ʙʏ ʀᴀʜᴇᴇᴍ ᴄᴍ`,

`╔═══✪ Dev Acknowledgement ✪═══╗
║ 👨‍💻 RAHEEM-CM
║ ☎️ +255763111390
║ 🤖 Bot: RAHEEM-XMD-3
║ 🙋 Mention: ${mention}
╚═════════════════════════╝
Powered by RAHEEM-CM 🛠️`
        ];

        const emojis = ['🪀', '💎', '🧑‍💻', '🔥', '📌', '🤖', '🧠'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const caption = captions[Math.floor(Math.random() * captions.length)];

        // React first
        await conn.sendMessage(from, {
            react: { text: emoji, key: mek.key }
        });

        // Send the message
        await conn.sendMessage(from, {
            image: { url: THANKS_IMG },
            caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399470975987@newsletter',
                    newsletterName: 'RAHEEM-XMD-3🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Optional background audio
        await conn.sendMessage(from, {
            audio: { url: MUSIC_URL },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `❌ Error: ${err.message}` }, { quoted: mek });
    }
});
