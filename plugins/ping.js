// PING COMMAND
cmd({
    pattern: "ping",
    alias: ["speed", "pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🍁",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = Date.now();
        const message = await conn.sendMessage(from, { text: '*Pinging...* 🏓' });
        const end = Date.now();
        const ping = end - start;

        const text = `
─❖ *🏓 PING* ❖─
┃ *Ping:* ${ping}ms
┃ *Bot:* RAHEEM-XMD-3
╰────────────╯ powered by *sir Raheem-cm*`;

        await conn.sendMessage(from, { text }, { quoted: message });
    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// PING2 COMMAND
cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "📡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const start = Date.now();
        const message = await conn.sendMessage(from, { text: '*Pinging...* ⚡' });
        const end = Date.now();
        const ping = end - start;

        const text = `
─❖ *⚡ PING2* ❖─
┃ *Ping:* ${ping}ms
┃ *Bot:* RAHEEM-XMD-3
╰────────────╯ powered by *sir Raheem-cm*`;

        await conn.sendMessage(from, { text }, { quoted: message });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
