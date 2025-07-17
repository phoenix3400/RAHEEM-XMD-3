const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "ping3",
    alias: ["speed3", "pong3"],
    desc: "Check bot's response time in super style.",
    category: "main",
    react: "🚀",
    filename: __filename
}, async (conn, mek, m, { from, sender }) => {
    try {
        const start = Date.now();

        const pingEmojis = ['🦾', '🦿', '⚡', '🚀', '🛸', '🤖', '🟢', '🔵', '💻', '⏳'];
        const pickEmoji = () => pingEmojis[Math.floor(Math.random() * pingEmojis.length)];
        const emoji1 = pickEmoji(), emoji2 = pickEmoji();

        // Send quick reaction
        await conn.sendMessage(from, {
            react: { text: emoji1, key: mek.key }
        });

        // Artificial small delay for realistic ping (optional)
        await new Promise(res => setTimeout(res, 100 + Math.random() * 200));

        const latency = Date.now() - start;

        // Random stylish formats
        const styles = [
`┏━━━━━━━❖ PING ❖━━━━━━━┓
┃ 🤖 Bot: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
┃ ${emoji2} Latency: *${latency}ms*
┃ 🛡️ Owner: *${config.OWNER_NAME}*
┗━━━━━━━━━━━━━━━━━━━━━━┛
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM-CM`,

`╭───⪨ *SPEED CHECK* ⪩───╮
┃ ${emoji1} BOT: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
┃ ${emoji2} SPEED: *${latency} ms*
╰─────────────⪨⚡⪩───────╯
> ʙʏ *RAHEEM-CM*`,

`━━━[ *PING3* ]━━━
${emoji2} Bot: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
⏰ Ping: *${latency}ms*
👑 Owner: *${config.OWNER_NAME}*
━━━━━━━━━━━━━━
> RAHEEM-CM`,

`『 *RAHEEM-XMD-3* 』
Status: *ONLINE* ${emoji1}
Ping: *${latency}ms*
${emoji2} Powered by RAHEEM-CM`,

`⧉ *ULTRA SPEED TEST* ⧉
${emoji1} Bot: *${config.BOT_NAME || "RAHEEM-XMD-3"}*
${emoji2} Latency: *${latency} ms* 
🛡️ By: *${config.OWNER_NAME}*
➤ *All Systems Nominal*`
        ];

        // Chagua style random
        const text = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping3 command:", e);
        await conn.sendMessage(from, { text: `Ping3 error: ${e.message}` }, { quoted: mek });
    }
});
