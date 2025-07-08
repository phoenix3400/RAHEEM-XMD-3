const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: 'rw2',
    alias: ['wall', 'wallpaper'],
    desc: 'Download high-quality wallpapers from Wallhaven.cc',
    category: 'media',
    use: '.rw2 <keyword>'
}, async (m, sock, args) => {
    try {
        const keyword = args[0] || 'anime';  // Default: anime
        const apiUrl = `https://wallhaven.cc/api/v1/search?q=${keyword}&apikey=YOUR_API_KEY`;
        
        const response = await axios.get(apiUrl);
        const wallpapers = response.data.data;

        if (wallpapers.length > 0) {
            const randomWall = wallpapers[Math.floor(Math.random() * wallpapers.length)];
            await sock.sendMessage(m.chat, {
                image: { url: randomWall.path },
                caption: `🖼️ *${keyword} Wallpaper*`
            }, { quoted: m });
        } else {
            m.reply(`❌ No wallpapers found for *${keyword}*`);
        }
    } catch (error) {
        console.error(error);
        m.reply('❌ Error fetching wallpapers. Try again later.');
    }
});
