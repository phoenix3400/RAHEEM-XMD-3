const config = require('../config');
const { cmd } = require('../command');

const CHANNEL_NAME = "RAHEEM CM WHATSAPP CHANNEL";
const CHANNEL_ID = "120363398101781980@newsletter";
const CHANNEL_LINK = `https://whatsapp.com/channel/${CHANNEL_ID}`;
const MUSIC_URL = "https://files.catbox.moe/n281ow.mp3"; // Badilisha mp3 url kama unataka

cmd({
    pattern: "ping",
    alias: ["speed", "pong"],
    desc: "Check bot's response time in super style.",
    category: "main",
    react: "🚀",
    filename: __filename
}, async (conn, mek, m, { from, sender }) => {
    try {
        const start = Date.now();

        // Emojis
        const pingEmojis = ['🦾', '🦿', '⚡', '🚀', '🛸', '🤖', '🟢', '🔵', '💻', '⏳'];
        const pickEmoji = () => pingEmojis[Math.floor(Math.random() * pingEmojis.length)];
        let emoji1 = pickEmoji(), emoji2 = pickEmoji();
        while (emoji2 === emoji1) emoji2 = pickEmoji();

        // Send quick reaction
        await conn.sendMessage(from, {
            react: { text: emoji1, key: mek.key }
        });

        // Small delay for more realistic latency
        await new Promise(res => setTimeout(res, 100 + Math.random() * 200));

        const latency = Date.now() - start;

        // Stylish responses
        const styles = [
`┏━━━━━━━❖ PING ❖━━━━━━━┓
┃ 🤖 Bot: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
┃ ${emoji2} Latency: *${latency}ms*
┃ 🛡️ Owner: *${config.OWNER_NAME}*
┗━━━━━━━━━━━━━━━━━━━━━━┛
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM-CM

📢 *Join our WhatsApp Channel:*
${CHANNEL_NAME}
${CHANNEL_LINK}`,

`╭───⪨ *SPEED CHECK* ⪩───╮
┃ ${emoji1} BOT: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
┃ ${emoji2} SPEED: *${latency} ms*
╰─────────────⪨⚡⪩───────╯
> ʙʏ *RAHEEM-CM*

🔔 _Usikose updates, join WHATSAPP Channel:_
${CHANNEL_LINK}`,

`━━━[ *PING3* ]━━━
${emoji2} Bot: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
⏰ Ping: *${latency}ms*
👑 Owner: *${config.OWNER_NAME}*
━━━━━━━━━━━━━━
> RAHEEM-CM

🎬 *Join/Subscribe:*
${CHANNEL_NAME}
${CHANNEL_LINK}`,

`『 *RAHEEM-XMD-3* 』
Status: *ONLINE* ${emoji1}
Ping: *${latency}ms*
${emoji2} Powered by RAHEEM-CM

📣 WhatsApp Channel:
${CHANNEL_LINK}`,

`⧉ *ULTRA SPEED TEST* ⧉
${emoji1} Bot: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
${emoji2} Latency: *${latency} ms* 
🛡️ By: *${config.OWNER_NAME}*
➤ *All Systems Nominal*

🔗 *WhatsApp Channel:*
${CHANNEL_NAME}
${CHANNEL_LINK}`
        ];

        const text = styles[Math.floor(Math.random() * styles.length)];

        // Send ping message
        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

        // Send music (audio)
        await conn.sendMessage(from, {
            audio: { url: MUSIC_URL },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping3 command:", e);
        await conn.sendMessage(from, { text: `Ping3 error: ${e.message}` }, { quoted: mek });
    }
});
