const config = require('../config');
const { cmd, commands } = require('../command');

const MUSIC_URL = "https://files.catbox.moe/o919rq.mp3"; // Badilisha mp3 url kama unataka

cmd({
    pattern: "ping",
    alias: ["speed","pong"],use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🍁",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '⏰', '💨', '🎯', '🎉', '👿', '💥', '🕐', '🤖'];
        const textEmojis = ['⏰', '🏆', '🛸', '🚀', '🎶', '🪀', '💞', '🔱', '🛡️', '❣️'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        const text = `╭━━━━─❖𝐏𝐈𝐍𝐆 𝐓𝐄𝐒𝐓❖─━━━━╮
┃📡𝐁𝐎𝐓: *RAHEEM-XMD-3*
┃🌟𝐏𝐈𝐍𝐆: *${responseTime.toFixed(2)}MS ${reactionEmoji}*
╰━━━━━━⦉𝒜𝐵𝒟𝒰𝐿𝑅𝒜𝐻𝐼𝑀⦊━━━━━━╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM-CM* 💙`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399470975987@newsletter',
                    newsletterName: "RAHEEM-XMD-3",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send music (audio) after ping message
        await conn.sendMessage(from, {
            audio: { url: MUSIC_URL },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "📡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...⏳*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `╭━━〔 *🛸 SPEED2 TEST* 〕━━╮
┃ 🤖 *BOT* : *RAHEEM-XMD-3*
┃ ⏳ *PING* : *${ping}MS*
╰━━━━━━━━━━━━━━━━━━━━╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM CM* 💙` }, { quoted: message })

        // Send music (audio) after ping2 message
        await conn.sendMessage(from, {
            audio: { url: MUSIC_URL },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });

    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});
