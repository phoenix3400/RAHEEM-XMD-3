const { cmd } = require('../command');
const fs = require('fs').promises; // Import fs.promises for async file operations
const path = require('path');     // Import path to resolve file paths

// Assuming config.js exports an object, or config.json is directly read
// For this example, let's assume config.json is the source
const configPath = path.join(__dirname, '../config.json'); // Adjust path as needed

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

  try {
    // Read the current config
    const currentConfig = JSON.parse(await fs.readFile(configPath, 'utf8'));

    // Update the ANTI_STICKER_KICK value
    currentConfig.ANTI_STICKER_KICK = mode;

    // Write the updated config back to the file
    await fs.writeFile(configPath, JSON.stringify(currentConfig, null, 2), 'utf8');

    reply(`✅ *ANTI_STICKER* has been turned *${mode.toUpperCase()}*.`);

  } catch (error) {
    console.error("Failed to update ANTI_STICKER setting:", error);
    return reply("❌ An error occurred while updating the setting.");
  }
});
