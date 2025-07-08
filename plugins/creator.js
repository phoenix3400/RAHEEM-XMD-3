module.exports = {
  name: 'cr',
  alias: ['creator', 'owner'],
  category: 'info',
  desc: 'Show the bot creator contact info.',
  react: '👤',
  usage: '.cr',
  async exec(msg, sock, args, from, command, quoted, m) {
    const creatorName = 'Raheem-cm';
    const creatorNumber = '255763111390';

    const text = `👤 *Bot Creator Info*\n\n👑 *Name:* ${creatorName}\n📞 *Contact:* wa.me/${creatorNumber}\n\n_© ${creatorName}_`;

    await sock.sendMessage(from, { text }, { quoted: msg });
  }
};
