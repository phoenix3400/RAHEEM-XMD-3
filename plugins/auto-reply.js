const axios = require('axios');
const config = require('../config');
const { cmd } = require('../command');

// Auto-reply JSON hosted on GitHub
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/RAHEEM-XMD-3/RAHEEM-DATA/main/autoreply.json';

cmd({
  name: 'autoreply',
  type: 'all' // Inasikiliza kila ujumbe
}, async (conn, msg, m, { body }) => {
  try {
    // Hakikisha message iko
    if (!body || msg.key?.fromMe || body.startsWith('.')) return;

    // Chukua JSON kutoka GitHub
    const res = await axios.get(GITHUB_RAW_URL);
    const data = res.data;

    // Normalize input
    const incomingText = body.trim().toLowerCase();

    // Tafuta kama text ipo kwenye JSON
    for (const key in data) {
      if (incomingText === key.toLowerCase()) {
        if (config.AUTO_REPLY?.toLowerCase() === 'true') {
          await m.reply(data[key]);
        }
        break;
      }
    }
  } catch (err) {
    console.error('❌ Auto-reply error:', err.message);
  }
});
