const { cmd } = require('../command');
const config = require("../config");

cmd({
  'on': "body"
}, async (conn, m, store, {
  from,
  sender,
  isGroup,
  isAdmins,
  isBotAdmins,
  reply
}) => {
  try {
    // Initialize warnings object
    if (!global.warnings) {
      global.warnings = {};
    }

    // Only proceed in group chats where bot is admin and sender is not admin
    if (!isGroup || isAdmins || !isBotAdmins) return;

    // Check if message is a sticker
    const isSticker = m.mtype === 'stickerMessage';

    // Only proceed if anti-sticker is enabled and message is a sticker
    if (isSticker && config.ANTI_STICKER_KICK === 'on') {
      console.log(`Sticker detected from ${sender}`);

      // Try to delete the sticker
      try {
        await conn.sendMessage(from, {
          delete: m.key
        });
        console.log(`Sticker deleted: ${m.key.id}`);
      } catch (error) {
        console.error("Failed to delete sticker:", error);
      }

      // Count warnings for this user
      global.warnings[sender] = (global.warnings[sender] || 0) + 1;
      const warningCount = global.warnings[sender];

      if (warningCount < 4) {
        // Send warning message
        await conn.sendMessage(from, {
          text: `🚫 *DO NOT SEND STICKERS HERE*
‎╭━⪧ *WARNING SYSTEM* ⪦━╮
┃ 👤 USER: @${sender.split('@')[0]}
┃ ⚠️ WARNING: *${warningCount}*
┃ ❌ REASON: *Sticker sent*
┃ 🚷 LIMIT: *3*
╰━━━━━━━━━━━━━━━━━━━━╯
> Powered by RAHEEM-CM`,
          mentions: [sender]
        });
      } else {
        // Kick the user and reset warning count
        await conn.sendMessage(from, {
          text: `@${sender.split('@')[0]} *has been removed - sticker warning limit exceeded!*`,
          mentions: [sender]
        });
        await conn.groupParticipantsUpdate(from, [sender], "remove");
        delete global.warnings[sender];
      }
    }
  } catch (error) {
    console.error("Anti-sticker error:", error);
    reply("❌ An error occurred while processing the sticker message.");
  }
});
