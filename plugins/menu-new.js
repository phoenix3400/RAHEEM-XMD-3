const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

const mainMenu = {
    title: "🌟 RAHEEM-XMD ULTIMATE MAIN MENU 🌟",
    content: `
╭━━━❖━━━[ *BOT INFO* ]━━━❖━━━╮
┃ 👤 Owner: *${config.OWNER_NAME}*
┃ 💻 Type: NodeJs (MD)
┃ 🌐 Platform: GitHub
┃ ⚡ Mode: [${config.MODE}]
┃ 🆔 Prefix: ${config.PREFIX}
┃ 🏷️ Version: 2.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭─❖ *📥 DOWNLOAD COMMANDS* ❖─╮
┃ facebook
┃ mediafire
┃ tiktok
┃ twitter
┃ insta
┃ apk
┃ img
┃ tt2
┃ pins
┃ apk2
┃ fb2
┃ pinterest
┃ spotify
┃ play
┃ play2
┃ audio
┃ video
┃ video2
┃ ytmp3
┃ ytmp4
┃ song
┃ darama
┃ gdrive
┃ ssweb
┃ tiks
╰────────────────────────────╯

╭─❖ *👥 GROUP COMMANDS* ❖─╮
┃ grouplink
┃ kickall
┃ kickall2
┃ kickall3
┃ add
┃ remove
┃ kick
┃ promote
┃ demote
┃ dismiss
┃ revoke
┃ setgoodbye
┃ setwelcome
┃ delete
┃ getpic
┃ ginfo
┃ disappear on
┃ disappear off
┃ disappear 7D,24H
┃ allreq
┃ updategname
┃ updategdesc
┃ joinrequests
┃ senddm
┃ nikal
┃ mute
┃ unmute
┃ lockgc
┃ unlockgc
┃ invite
┃ tag
┃ hidetag
┃ tagall
┃ tagadmins
╰────────────────────────────╯

╭─❖ *🎉 FUN COMMANDS* ❖─╮
┃ shapar
┃ rate
┃ insult
┃ hack
┃ ship
┃ character
┃ pickup
┃ joke
┃ hrt
┃ hpy
┃ syd
┃ anger
┃ shy
┃ kiss
┃ mon
┃ cunfuzed
┃ setpp
┃ hand
┃ nikal
┃ hold
┃ hug
┃ hifi
┃ poke
╰────────────────────────────╯

╭─❖ *👑 OWNER COMMANDS* ❖─╮
┃ owner
┃ menu
┃ menu2
┃ vv
┃ listcmd
┃ allmenu
┃ repo
┃ block
┃ unblock
┃ fullpp
┃ setpp
┃ restart
┃ shutdown
┃ updatecmd
┃ alive
┃ ping
┃ gjid
┃ jid
╰────────────────────────────╯

╭─❖ *🤖 AI COMMANDS* ❖─╮
┃ ai
┃ gpt3
┃ gpt2
┃ gptmini
┃ gpt
┃ meta
┃ blackbox
┃ luma
┃ dj
┃ khan
┃ jawad
┃ gpt4
┃ bing
┃ imagine
┃ imagine2
┃ copilot
╰────────────────────────────╯

╭─❖ *🎎 ANIME COMMANDS* ❖─╮
┃ fack
┃ truth
┃ dare
┃ dog
┃ awoo
┃ garl
┃ waifu
┃ neko
┃ megnumin
┃ neko
┃ maid
┃ loli
┃ animegirl
┃ animegirl1
┃ animegirl2
┃ animegirl3
┃ animegirl4
┃ animegirl5
┃ anime1
┃ anime2
┃ anime3
┃ anime4
┃ anime5
┃ animenews
┃ foxgirl
┃ naruto
╰────────────────────────────╯

╭─❖ *🔄 CONVERT COMMANDS* ❖─╮
┃ sticker
┃ sticker2
┃ emojimix
┃ fancy
┃ take
┃ tomp3
┃ tts
┃ trt
┃ base64
┃ unbase64
┃ binary
┃ dbinary
┃ tinyurl
┃ urldecode
┃ urlencode
┃ url
┃ repeat
┃ ask
┃ readmore
╰────────────────────────────╯

╭─❖ *📌 OTHER COMMANDS* ❖─╮
┃ timenow
┃ date
┃ count
┃ calculate
┃ countx
┃ flip
┃ coinflip
┃ rcolor
┃ roll
┃ fact
┃ cpp
┃ rw
┃ pair
┃ pair2
┃ pair3
┃ fancy
┃ logo <text>
┃ define
┃ news
┃ movie
┃ weather
┃ srepo
┃ insult
┃ save
┃ wikipedia
┃ gpass
┃ githubstalk
┃ yts
┃ ytv
╰────────────────────────────╯

╭─❖ *💞 REACTIONS COMMANDS* ❖─╮
┃ bully
┃ cuddle
┃ cry
┃ hug
┃ awoo
┃ kiss
┃ lick
┃ pat
┃ smug
┃ bonk
┃ yeet
┃ blush
┃ smile
┃ wave
┃ highfive
┃ handhold
┃ nom
┃ bite
┃ glomp
┃ slap
┃ kill
┃ happy
┃ wink
┃ poke
┃ dance
┃ cringe
╰────────────────────────────╯

╭─❖ *🏠 MAIN COMMANDS* ❖─╮
┃ ping
┃ ping2
┃ speed
┃ live
┃ alive
┃ runtime
┃ uptime
┃ repo
┃ owner
┃ menu
┃ menu2
┃ restart
╰────────────────────────────╯

*Powered by RAHEEM CM*
`,
    image: true
};

cmd({
    pattern: "menu2",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🛸",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Send the mainMenu with video and caption
        const menuVideoURL = config.MENU_VIDEO_URL || 'https://files.catbox.moe/3s8vfg.mp4';
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: ' 120363399470975987@newsletter',
                newsletterName: "RAHEEM CM",
                serverMessageId: 143
            }
        };

        // Try sending as image. If fail, fallback to text.
        let sentMsg;
        try {
            sentMsg = await conn.sendMessage(
                from,
                {
                    image: { url: menuImageURL },
                    caption: mainMenu.content,
                    contextInfo: contextInfo
                },
                { quoted: mek }
            );
        } catch (e) {
            sentMsg = await conn.sendMessage(
                from,
                {
                    text: mainMenu.content,
                    contextInfo: contextInfo
                },
                { quoted: mek }
            );
        }

        // Optionally, send audio after small delay
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await conn.sendMessage(from, {
                audio: { url: 'https://files.catbox.moe/11f9pe.mp3' },
                mimetype: 'audio/mp4',
                ptt: true,
            }, { quoted: mek });
        } catch (e) {
            // Ignore audio error
        }

    } catch (e) {
        await conn.sendMessage(
            from,
            { text: `❌ Menu system is currently busy. Please try again later.\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHEEM CM*` },
            { quoted: mek }
        );
    }
});
