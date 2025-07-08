cmd({
  pattern: 'rw2',
  alias: ['randomwall', 'wallpaper'],
  react: '🌌',
  desc: 'Send the "mzee" image as wallpaper.',
  category: 'wallpapers',
  use: '.rw',
  filename: __filename
}, async (bot, msg, msgInfo, { from, reply }) => {
  try {
    const caption = '🌌 Random Wallpaper:\n\nmzee';
    await bot.sendMessage(from, {
      image: { url: 'https://files.catbox.moe/5q4v44.jpg' },
      caption: caption
    }, { quoted: msg });
  } catch (error) {
    console.log(error);
    reply('❌ An error occurred while sending the image.');
  }
});
