//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FEODJIQWlCeWh2QUVBM1RCS0xES3hhOXVSUVE2Y2EwZDkzVW0xTVlHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXA5WUR6ZlNsS0xZTTJidCsrVEhiaEN3bFdyc2xvcnFxTmNWdWhySHdsOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTWcrNFJJcU5GWG83WHdWL1dvZDFUcmRlREg0UVI5VWVpTzhpWG9YdDM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycldKQlNRVnRMUjVJMkZsdXpUcHBYeTdPS2hxdjNJVjZjZ0dqdkIwYVZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLZktSRXpHOFRhRldvTmIxVlVnY2pEUDVhVW1TQWxIbzRqZWYwWHo2RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUNlBkcUR1Nk8yRFNXMlpQUWZ1OEs3S0pGb1ZsWHJaR2IrcTBjNTBNUlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU16Y3h5TW1wcmdmSWRqbFlsTkh5QjJrZEhYMXlvODFNWDY2NlhwTk9GST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjhaRkxpMHM3cUllQkZ0c05TVGx1VUxjZTlPSDdGbzM2d1BSSjA5a3cydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREWnNiY1B0NENvTmVWcU5VVzRITmRVeWhOYWNDekEvMiszTXlOUDNJZmJpNThVN05QQW9mZ0YxeWY5UzJXRmxOV01uS2ZiZzB0d1VYTklSaTJ1ZUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJnQlFGdU43QWdYaWxzL0QzcjZUeFUvbHZrR2hMMUszdVI1dmR2d21VUCtVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1Y0llZHEzcFFTV1RFaHd6dE5ucXRRIiwicGhvbmVJZCI6IjhiNjE4NGJjLTk1MzMtNDg4Yy1hZTFlLTY4ZTllNmUwYTNjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwNUZtQVhSRXppTWxDZ2ZWSWhBV1hWMlRFVkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pkTVBZTHlVeGc4M0NkRFJKQUY0OTMrR2ZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhOSjNRU1pRIiwibWUiOnsiaWQiOiI5NDcxNjg0NjYxNjoxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvKPvvLnvvKLvvKXvvLIg77y4IO+8tO+8qO+8oe+8su+8te+8t++8oSDvvKnvvKQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tYnhNVUhFSisydXJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNXbXg4TEN5azhoR1VvSXM2bCsxME9vM0s1NjNzaXd0ZVk0KzY5ckFJVTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFiQ3gyb0c2bUE0emorUFVwMzc5eWxmeGVtd2JPQ0g3ZHZON0F0RWVrZGhuV3JUaHg5R2IyNkFFWFFuaUVYV0dLdkhNejRtYnVZWldYdnRQb2IxK0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvdEMxeWdqR0RPUmdCN1hlMlFXajR5UmpGSloxcyt4L081Yng4WDVtazRvUXl2dHdnQWU1TWhsN3N5ZDA2eC9vbHFPYXlVanFKN0xzTm5pdml1SWRDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE2ODQ2NjE2OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJGcHNmQ3dzcFBJUmxLQ0xPcGZ0ZERxTnl1ZXQ3SXNMWG1PUHV2YXdDRk4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzExMDc2MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlo2In0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94716846616";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "ＣＹＢＥＲ ｘ ＴＨＡＲＵＷＡ ＩＤ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
