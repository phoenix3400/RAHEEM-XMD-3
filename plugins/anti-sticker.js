const { cmd } = require('../command');
const config = require("../config");

cmd({
  pattern: "antisticker",
  fromMe: true,
  desc: "Enable or disable anti-sticker",
  usage: "antisticker on/off"
}, async (conn, m, store, { args, reply }) => {
  const mode = args[0]?.toLowerCase();

  if (!mode || (mode !== "on" && mode !== "off")) {
    return reply("❌ Usage: `.antisticker on` or `.antisticker off`");
  }

  // Set value in config or temporary memory
  config.ANTI_STICKER_KICK = mode;

  reply(`✅ *ANTI_STICKER* has been turned *${mode.toUpperCase()}*.`);
});
