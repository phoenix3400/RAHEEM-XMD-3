cmd({
  pattern: 'cr',
  alias: ['creator', 'owner'],
  react: '👤',
  desc: 'Show the creator contact info.',
  category: 'info',
  use: '.cr',
  filename: __filename
}, async (bot, msg, msgInfo, { from, reply }) => {
  try {
    const creatorNumber = '255763111390';
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Creator
TEL;type=CELL;type=VOICE;waid=${creatorNumber}:${creatorNumber}
END:VCARD`;

    await bot.sendMessage(from, {
      contacts: {
        displayName: 'Bot Creator',
        contacts: [{ vcard }]
      }
    }, { quoted: msg });

    await reply('👤 *Bot Creator Contact Shared Successfully!*');

  } catch (err) {
    console.log(err);
    await reply('❌ Error sending creator contact.');
  }
});
