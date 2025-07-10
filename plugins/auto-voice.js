const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd } = require('../command');

cmd({
  on: "body"
},
async (conn, mek, m, { from, body }) => {
    const filePath = path.join(__dirname, '../assets/autovoice.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_VOICE === 'true') {
                const audioPath = path.join(__dirname, '../assets/autovoice', data[text]);

                if (fs.existsSync(audioPath)) {
                    const audioBuffer = fs.readFileSync(audioPath);

                    await conn.sendMessage(from, {
                        audio: audioBuffer,
                        mimetype: 'audio/mp4', // Change if you're using ogg, wav, etc.
                        ptt: true // true for voice note, false for normal audio
                    }, { quoted: mek });
                } else {
                    console.warn(`Audio not found: ${audioPath}`);
                }
            }
        }
    }
});
