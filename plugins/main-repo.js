const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "🅲🅼",
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

        // --- Multiple beautiful formats/styles! ---
        const style1 = `
╭━━━〔 *RAHEEM-XMD REPO* 〕━━━╮🇹🇿
┃ 🏷️  Name     : *${repoData.name}*
┃ 👤  Owner    : *${repoData.owner.login}*
┃ ⭐  Stars    : *${repoData.stargazers_count}*
┃ 🍴  Forks    : *${repoData.forks_count}*
┃ 🔗  URL      : *${repoData.html_url}*
┃ 📝  Desc     :
┃      ${repoData.description || 'No Description'}
╰━━━━━━━━━━━━━━━━━━━━━━━╯🇹🇿

${config.DESCRIPTION}
        `.trim();

        const style2 = `
┏━━━━━[ GITHUB REPO INFO ]━━━━━┓
┃ 🏷️  *${repoData.name}*
┃ 👤 By: *${repoData.owner.login}*
┃ ✨ Stars: *${repoData.stargazers_count}*   🍴 Forks: *${repoData.forks_count}*
┃ 🔗 ${repoData.html_url}
┃ 📝 ${repoData.description || 'No Description'}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

${config.DESCRIPTION}
        `.trim();

        const style3 = `
▄▀▄▀▄ REPO INFO ▄▀▄▀▄

♢ *Project*: ${repoData.name}
♢ *Author*: ${repoData.owner.login}
♢ *Stars*: ${repoData.stargazers_count} ✨
♢ *Forks*: ${repoData.forks_count} 🍴
♢ *Updated*: ${new Date(repoData.updated_at).toLocaleDateString()}

🔗 ${repoData.html_url}

${repoData.description || 'No Description'}

${config.DESCRIPTION}
        `.trim();

        const style4 = `
╔═════『 *RAHEEM-XMD* 』═════╗
║ • Name: ${repoData.name}
║ • Owner: ${repoData.owner.login}
║ • Stars: ${repoData.stargazers_count}
║ • Forks: ${repoData.forks_count}
║ • URL: ${repoData.html_url}
║ • Desc: ${repoData.description || 'None'}
╚═══════════════════════════╝

${config.DESCRIPTION}
        `.trim();

        const style5 = `
✦ *RAHEEM-XMD Repository* ✦

📌 *${repoData.name}*
👤 @${repoData.owner.login}
⭐ ${repoData.stargazers_count} Stars | 🍴 ${repoData.forks_count} Forks
🔗 GitHub: ${repoData.html_url}

${repoData.description || 'No Description available'}

${config.DESCRIPTION}
        `.trim();

        // Add more styles if you wish!

        const styles = [style1, style2, style3, style4, style5];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/h3bao2.jpg' },
            caption: selectedStyle,
            contextInfo: { 
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
