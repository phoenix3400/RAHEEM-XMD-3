const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "antispam",
    desc: "Show bot anti-spam policy",
    category: "main",
    filename: __filename,
    react: "🤧"
},
async (conn, m, msg, { from, sender }) => {
    try {
        const senderName = m.pushName || 'User';

        const caption = `
🚫 *ANTI-SPAM POLICY — RAHEEM-XMD-3*

Hello *${senderName}*, here are the rules enforced by our bot:

🔴 Spamming commands, flooding text, or repeated abuse is *prohibited*.

✅ 1st Violation: *Warning* ⚠️  
⚠️ 2nd Violation: *Muted or Restricted* ⛔  
❌ 3rd Violation: *Permanent Ban or Block* 🔒

Our system detects:
• Mass tagging
• Repeating commands
• Long flood texts

Let’s keep *RAHEEM-XMD-3* safe and clean for all 📵✨

— *RAHEEM MODERATION TEAM* 😿
`.trim();

        const fakeContact = {
            key: {
                fromMe: false,
                participant: '0@s.whatsapp.net',
                remoteJid: 'status@broadcast',
            },
            message: {
                contactMessage: {
                    displayName: "RAHEEM SYSTEM",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:RAHEEM SYSTEM\nORG:RAHEEM-XMD-3;\nTEL;type=CELL;type=VOICE;waid=255763111390:+255 763 111390\nEND:VCARD`
                }
            }
        };

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/ux1t4l.jpg' },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'RAHEEM-BOTS 🤟✌',
                    newsletterJid: '120363399470975987@newsletter',
                    serverMessageId: 121
                }
            }
        }, { quoted: fakeContact });

    } catch (e) {
        console.error("Error in antispam command:", e);
        await conn.sendMessage(from, { text: `⚠️ Error: ${e.message}` });
    }
});
