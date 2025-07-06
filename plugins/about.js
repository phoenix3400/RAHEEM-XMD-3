const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "king",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭══⪨ 𝙱𝙸𝙾𝙶𝚁𝙰𝙿𝙷𝙸𝙴 ⪩══╮*
*┃╭━━━━━━━━━━━━┈⊷*
*┃┃  ◦* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ: RAHEEM-CM*
*┃┃  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➩ ABDULRAHIM's*
*┃┃  ◦* *ɴɪᴄᴋɴᴀᴍᴇ➩ CM18*
*┃┃  ◦* *ᴀɢᴇ➩ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
*┃┃  ◦* *ᴄɪᴛʏ➩ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ* 
*┃╿ ◦* *ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅᴇᴠ*
*┃╰━━━━━━━━━━━━━┈⊷*
*╰════════════════╯*

*╭═⪨ 𝙾𝙽𝙻𝚈 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 ⪩═╮*
*┃  ◦* *✰RAHEEM-XMD x RAHEEM-CM*
*┃  ◦* *✰➩ᴏɴʟʏ 2 ᴅᴇᴠᴇʟᴏᴘᴇʀ*
*╰═════════════════╯*

*╭╼════════════════╾╮*
> *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 RAHEEM-CM*
*╰╼════════════════╾╯*`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/1u2sr5.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363399470975987@newsletter', // ou ton JID actuel
            newsletterName: 'RAHEEM-XMD-3',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
