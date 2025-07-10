const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "✨",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Raheem-cm/RAHEEM-XMD-3';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Erreur : L'URL du repo est invalide.");

        const [, username, repoName] = match;

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            headers: {
                'User-Agent': 'RAHEEM-XMD'
            }
        });

        if (response.status === 503) {
            return reply("❌ GitHub est temporairement indisponible (503). Réessaie plus tard.");
        }

        if (!response.ok) {
            return reply(`❌ Échec de récupération des infos du repo. Code: ${response.status}`);
        }

        const repoData = await response.json();

        // --- Muundo mpya wa menu ---
        const message = `
╭━━━〔 *RAHEEM-XMD REPO* 〕━━━╮🇹🇿
┃ 🏷️  B.name      : *${repoData.name}*
┃ 👤  owner    : *${repoData.owner.login}*
┃ ⭐  stars      : *${repoData.stargazers_count}*
┃ 🍴  Forks     : *${repoData.forks_count}*
┃ 🔗  repo     : *${repoData.html_url}*
┃ 📝  Discription:
┃      ${repoData.description || 'No Discription'}
╰━━━━━━━━━━━━━━━━━━━━━━━╯🇹🇿

${config.DESCRIPTION}
`.trim();

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/h3bao2.jpg` },
            caption: message,
            contextInfo: { 
                     // Send background song after menu
     await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/12hldr.mp3' },
            mimetype: 'audio/mp4',
            ptt: false, // true = voice note style
            contextInfo
        });
             mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363399470975987@newsletter',
                    newsletterName: config.OWNER_NAME || 'RAHEEM-XMD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Repo command error:", error);
        reply("❌ Une erreur est survenue lors de la récupération du dépôt.");
    }
});
