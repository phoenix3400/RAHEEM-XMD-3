cmd({
  pattern: 'rw2',
  alias: ['randomwall', 'wallpaper'],
  react: '🌌',
  desc: 'Download random wallpapers based on keywords.',
  category: 'wallpapers',
  use: '.rw <keyword>',
  filename: __filename
}, async (bot, msg, msgInfo, { from, args, reply }) => {
  try {
    const query = args.join(' ') || 'random';
    const apiUrl = 'https://pikabotzapi.vercel.app/random/randomwall/?apikey=anya-md&query=' + query;
    const response = await axios.get(apiUrl);

    if (response.data.imgUrl) {
      const imageUrl = response.data.imgUrl;
      const caption = `🌌 Random Wallpaper: *${query}*\n\nmzee`;

      await bot.sendMessage(from, {
        image: { url: imageUrl },
        caption: caption
      }, { quoted: msg });

    } else {
      reply(`❌ Failed to fetch wallpaper for "${query}".`);
    }

  } catch (error) {
    console.log(error);
    reply('❌ An error occurred while fetching the wallpaper.');
  }
});
