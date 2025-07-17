const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "menu",
    desc: "Show full main menu (vertical stylish cycle)",
    category: "menu",
    react: "📜",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {
        // 4 UNIQUE RANDOM STYLES (vertical commands)
        const styles = [

`╭─────❖  ${config.BOT_NAME || 'RAHEEM-XMD-3'}  ❖─────╮
┃ 👑 Owner: ${config.OWNER_NAME}
┃ 🛠️ Mode: ${config.MODE}
┃ 🕒 Version: 2.0.0
┃ 🧭 Time: ${config.Timenow}
┃ 🔖 Prefix: ${config.PREFIX}
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

╭─❖ *📥 DOWNLOAD MENU* ❖─╮
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

╭─❖ *👥 GROUP MENU* ❖─╮
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

╭─❖ *🎉 FUN MENU* ❖─╮
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

╭─❖ *👑 OWNER MENU* ❖─╮
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

╭─❖ *🤖 AI MENU* ❖─╮
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

╭─❖ *🖌️ ANIME MENU* ❖─╮
┃ fack
┃ truth
┃ dare
┃ dog
┃ awoo
┃ garl
┃ waifu
┃ neko
┃ megnumin
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

╭─❖ *🔄 CONVERT MENU* ❖─╮
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

╭─❖ *📌 OTHER MENU* ❖─╮
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

╭─❖ *💞 REACTIONS MENU* ❖─╮
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

_✨ Powered by RAHEEM-CM🎗${config.OWNER_NAME} ✨_`,

`▄▀▄▀▄ ${config.BOT_NAME || 'RAHEEM-XMD-3'} ▄▀▄▀▄

👑 Owner: ${config.OWNER_NAME}
🛠️ Mode: ${config.MODE}
🕒 Version: 2.0.0
🧭 Time: ${config.Timenow}
🔖 Prefix: ${config.PREFIX}

🎯 MAIN COMMANDS:
- ping
- ping2
- speed
- live
- alive
- runtime
- uptime
- repo
- owner
- menu
- menu2
- restart

⬇️ DOWNLOAD MENU:
- facebook
- mediafire
- tiktok
- twitter
- insta
- apk
- img
- tt2
- pins
- apk2
- fb2
- pinterest
- spotify
- play
- play2
- audio
- video
- video2
- ytmp3
- ytmp4
- song
- darama
- gdrive
- ssweb
- tiks

👥 GROUP MENU:
- grouplink
- kickall
- kickall2
- kickall3
- add
- remove
- kick
- promote
- demote
- dismiss
- revoke
- setgoodbye
- setwelcome
- delete
- getpic
- ginfo
- disappear on
- disappear off
- disappear 7D,24H
- allreq
- updategname
- updategdesc
- joinrequests
- senddm
- nikal
- mute
- unmute
- lockgc
- unlockgc
- invite
- tag
- hidetag
- tagall
- tagadmins

🎉 FUN MENU:
- shapar
- rate
- insult
- hack
- ship
- character
- pickup
- joke
- hrt
- hpy
- syd
- anger
- shy
- kiss
- mon
- cunfuzed
- setpp
- hand
- nikal
- hold
- hug
- hifi
- poke

👑 OWNER MENU:
- owner
- menu
- menu2
- vv
- listcmd
- allmenu
- repo
- block
- unblock
- fullpp
- setpp
- restart
- shutdown
- updatecmd
- alive
- ping
- gjid
- jid

🤖 AI MENU:
- ai
- gpt3
- gpt2
- gptmini
- gpt
- meta
- blackbox
- luma
- dj
- khan
- jawad
- gpt4
- bing
- imagine
- imagine2
- copilot

🖌️ ANIME MENU:
- fack
- truth
- dare
- dog
- awoo
- garl
- waifu
- neko
- megnumin
- maid
- loli
- animegirl
- animegirl1
- animegirl2
- animegirl3
- animegirl4
- animegirl5
- anime1
- anime2
- anime3
- anime4
- anime5
- animenews
- foxgirl
- naruto

🔄 CONVERT MENU:
- sticker
- sticker2
- emojimix
- fancy
- take
- tomp3
- tts
- trt
- base64
- unbase64
- binary
- dbinary
- tinyurl
- urldecode
- urlencode
- url
- repeat
- ask
- readmore

📌 OTHER MENU:
- timenow
- date
- count
- calculate
- countx
- flip
- coinflip
- rcolor
- roll
- fact
- cpp
- rw
- pair
- pair2
- pair3
- fancy
- logo <text>
- define
- news
- movie
- weather
- srepo
- insult
- save
- wikipedia
- gpass
- githubstalk
- yts
- ytv

💞 REACTIONS MENU:
- bully
- cuddle
- cry
- hug
- awoo
- kiss
- lick
- pat
- smug
- bonk
- yeet
- blush
- smile
- wave
- highfive
- handhold
- nom
- bite
- glomp
- slap
- kill
- happy
- wink
- poke
- dance
- cringe

━━━ Powered by RAHEEM-CM🎗${config.OWNER_NAME} ━━━`,

`┏━━━━━ 『 ${config.BOT_NAME || 'RAHEEM-XMD-3'} 』━━━━━┓
┃ 👑  Owner: ${config.OWNER_NAME}
┃ 🛠️  Mode : ${config.MODE}
┃ 🕒  Version: 2.0.0
┃ 🧭  Time: ${config.Timenow}
┃ 🔖  Prefix: ${config.PREFIX}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

🏠 MAIN COMMANDS
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

📥 DOWNLOAD MENU
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

👥 GROUP MENU
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

🎉 FUN MENU
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

👑 OWNER MENU
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

🤖 AI MENU
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

🖌️ ANIME MENU
┃ fack
┃ truth
┃ dare
┃ dog
┃ awoo
┃ garl
┃ waifu
┃ neko
┃ megnumin
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

🔄 CONVERT MENU
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

📌 OTHER MENU
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

💞 REACTIONS MENU
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

━━━ Powered by RAHEEM-CM🎗${config.OWNER_NAME} ━━━`,

`╔═════ ${config.BOT_NAME || 'RAHEEM-XMD-3'} ═════╗
║ 👑 Owner: ${config.OWNER_NAME}
║ 🛠️ Mode: ${config.MODE}
║ 🕒 Version: 2.0.0
║ 🧭 Time: ${config.Timenow}
║ 🔖 Prefix: ${config.PREFIX}
╠═══════════════════════════╣

🏠 MAIN COMMANDS
║ ping
║ ping2
║ speed
║ live
║ alive
║ runtime
║ uptime
║ repo
║ owner
║ menu
║ menu2
║ restart

📥 DOWNLOAD MENU
║ facebook
║ mediafire
║ tiktok
║ twitter
║ insta
║ apk
║ img
║ tt2
║ pins
║ apk2
║ fb2
║ pinterest
║ spotify
║ play
║ play2
║ audio
║ video
║ video2
║ ytmp3
║ ytmp4
║ song
║ darama
║ gdrive
║ ssweb
║ tiks

👥 GROUP MENU
║ grouplink
║ kickall
║ kickall2
║ kickall3
║ add
║ remove
║ kick
║ promote
║ demote
║ dismiss
║ revoke
║ setgoodbye
║ setwelcome
║ delete
║ getpic
║ ginfo
║ disappear on
║ disappear off
║ disappear 7D,24H
║ allreq
║ updategname
║ updategdesc
║ joinrequests
║ senddm
║ nikal
║ mute
║ unmute
║ lockgc
║ unlockgc
║ invite
║ tag
║ hidetag
║ tagall
║ tagadmins

🎉 FUN MENU
║ shapar
║ rate
║ insult
║ hack
║ ship
║ character
║ pickup
║ joke
║ hrt
║ hpy
║ syd
║ anger
║ shy
║ kiss
║ mon
║ cunfuzed
║ setpp
║ hand
║ nikal
║ hold
║ hug
║ hifi
║ poke

👑 OWNER MENU
║ owner
║ menu
║ menu2
║ vv
║ listcmd
║ allmenu
║ repo
║ block
║ unblock
║ fullpp
║ setpp
║ restart
║ shutdown
║ updatecmd
║ alive
║ ping
║ gjid
║ jid

🤖 AI MENU
║ ai
║ gpt3
║ gpt2
║ gptmini
║ gpt
║ meta
║ blackbox
║ luma
║ dj
║ khan
║ jawad
║ gpt4
║ bing
║ imagine
║ imagine2
║ copilot

🖌️ ANIME MENU
║ fack
║ truth
║ dare
║ dog
║ awoo
║ garl
║ waifu
║ neko
║ megnumin
║ maid
║ loli
║ animegirl
║ animegirl1
║ animegirl2
║ animegirl3
║ animegirl4
║ animegirl5
║ anime1
║ anime2
║ anime3
║ anime4
║ anime5
║ animenews
║ foxgirl
║ naruto

🔄 CONVERT MENU
║ sticker
║ sticker2
║ emojimix
║ fancy
║ take
║ tomp3
║ tts
║ trt
║ base64
║ unbase64
║ binary
║ dbinary
║ tinyurl
║ urldecode
║ urlencode
║ url
║ repeat
║ ask
║ readmore

📌 OTHER MENU
║ timenow
║ date
║ count
║ calculate
║ countx
║ flip
║ coinflip
║ rcolor
║ roll
║ fact
║ cpp
║ rw
║ pair
║ pair2
║ pair3
║ fancy
║ logo <text>
║ define
║ news
║ movie
║ weather
║ srepo
║ insult
║ save
║ wikipedia
║ gpass
║ githubstalk
║ yts
║ ytv

💞 REACTIONS MENU
║ bully
║ cuddle
║ cry
║ hug
║ awoo
║ kiss
║ lick
║ pat
║ smug
║ bonk
║ yeet
║ blush
║ smile
║ wave
║ highfive
║ handhold
║ nom
║ bite
║ glomp
║ slap
║ kill
║ happy
║ wink
║ poke
║ dance
║ cringe

╚════════ Powered by RAHEEM-CM🎗${config.OWNER_NAME} ═══════╝`
        ];

        // Random style
        const menuCaption = styles[Math.floor(Math.random() * styles.length)];

        const contextInfo = {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender]
        };

        // Send menu image with caption
        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/9gl0l8.jpg' },
            caption: menuCaption,
            contextInfo
        });

        // Send background song after menu
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/n281ow.mp3' },
            mimetype: 'audio/mp4',
            ptt: false,
            contextInfo
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { text: "❌ Error sending menu or audio." });
    }
});
