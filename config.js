const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349042451495";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349042451495";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_29_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICA3MSxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICA2NCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2c2o0NHk2VkFpTFV1aFAyYlpvOUU1YWtsK1d5WWIzRnVKTjhZd0NUS2Q0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJISExydzJCOFM5R0xZTXdydlZjdWt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY3NDEzNTY4LWYzODYtNGExZi1iMGFhLWFjN2RmOWIwYmZhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE1LFxuICAgICAgMTUyLFxuICAgICAgMjE5LFxuICAgICAgMTAzLFxuICAgICAgODAsXG4gICAgICA2NyxcbiAgICAgIDEyMCxcbiAgICAgIDQ5LFxuICAgICAgMTIyLFxuICAgICAgMjI3LFxuICAgICAgNDgsXG4gICAgICAyMzAsXG4gICAgICAyMTgsXG4gICAgICA2OCxcbiAgICAgIDI1LFxuICAgICAgNjksXG4gICAgICAxOTgsXG4gICAgICAzNixcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDAsXG4gICAgICAxMzIsXG4gICAgICAxNTksXG4gICAgICAyMTcsXG4gICAgICA3OSxcbiAgICAgIDEwMCxcbiAgICAgIDExNyxcbiAgICAgIDIxMixcbiAgICAgIDIwOSxcbiAgICAgIDI1LFxuICAgICAgMjksXG4gICAgICA4NixcbiAgICAgIDExMyxcbiAgICAgIDE1MSxcbiAgICAgIDEwOCxcbiAgICAgIDE0LFxuICAgICAgMjAxLFxuICAgICAgMTc2LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpEQkZGMk5XXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQyNDUxNDk1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1ODQxODg4MDAyMTIxOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxJOXNnSEVQRFUvTUFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjcFR0TXl1YWNxZE5wM09vTWlFdmVNbnRENlFvWlRoNThhb3JCaW5pSTBzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInd1MzFKUThoWVR3UU5zYmtlZGVnUVRJZEtmemE3R0dGRkdCOTZDbFhZOUc3RDVpOUI2ZDAzNHJvcUVLYm9pdXBvd2xtLzRaL3FOUVN5L2taQzNaV0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjA0KzBKWFMrakNxM3FnRWdxTS9LMjhyL1hWOFNITy90ak5oT20zSmdqYXl3bXJENnlIUGRGS1lhVGQ2bTQvVHc2TmJCT1RqeDcwb3ZzeGVXSm0xQmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDI0NTE0OTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0Njg3Mjk0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd6elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3p6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQVRKaHZBRG5BYkxMUk5rMlp2eU9DOHF3RytSWEtFMHdJUit5UG1WU0JTOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDMxOTg1NjgyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY4NzI4NzAyMzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
