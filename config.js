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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348168768580";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168768580";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcxLFxuICAgICAgICA2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwSTFJa2l5WjZOWDNsandXMWpUZ1dsUDA5QXNuZkt2Z3JNNXVCOE9GUWNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjTF9kVmNXUlFZZXFLNTFYSmpLbmF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1YWRlYWM2LWMxMzgtNGQxNC1hNTZhLWYxYzJkMTJjYjg0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxNTYsXG4gICAgICA0OSxcbiAgICAgIDE1MixcbiAgICAgIDIzOCxcbiAgICAgIDEzLFxuICAgICAgMTM0LFxuICAgICAgMzUsXG4gICAgICAxNCxcbiAgICAgIDExMixcbiAgICAgIDIzNSxcbiAgICAgIDIwMCxcbiAgICAgIDczLFxuICAgICAgMjAsXG4gICAgICA3MixcbiAgICAgIDEyMCxcbiAgICAgIDIyMCxcbiAgICAgIDY4LFxuICAgICAgMzcsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAyMjAsXG4gICAgICAyNTMsXG4gICAgICAxODcsXG4gICAgICAxODQsXG4gICAgICA1NCxcbiAgICAgIDExOCxcbiAgICAgIDIzMixcbiAgICAgIDI1NCxcbiAgICAgIDc1LFxuICAgICAgNjQsXG4gICAgICAxNjUsXG4gICAgICAxNzIsXG4gICAgICAyNTQsXG4gICAgICAxNTksXG4gICAgICAxMzEsXG4gICAgICAyNDIsXG4gICAgICAxMixcbiAgICAgIDE0NSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWDdaRVRFOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2ODc2ODU4MDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ5MDg2NjYxOTEwNzY5OjI2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUHN6SlFGRU1HRjk4QUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNzTFVXNVRHOTd4UUlkUWNqNndGeTR6Q1VRWUM4c0FOaml0dHhwOGtvQlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFQwdTlUSVV6d3dpV3orVTRvMGFHTmpXVkVJbWRqRE9YNkxzQ0F0NFlpbk15Z2Q5cGU1cmQrSU1iMUNrdlE1U0FpTXJkbmszbzhkVVRFYS9ucWduQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2hTRjV1THpMV29SbUZKU1Z4TFdkL1JvWkY0WTN5N2p2Uzg1U1F5QUlCNkxZbVUreGZBUm9xSlZjTGZNR0xKQ0VGVmdleDNjWjBoRUVRb0RzRU9kZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODc2ODU4MDoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY3ODA4NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKT2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpPai5qc29uIjogIntcImtleURhdGFcIjpcIitBbjRneTZTbUxCelM2YnprZ3o5dkdTenhJQzlCbjVMU2Z5T3hCczhSVTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NTM3OTQyNyxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzYsMSw3LDBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDkxMzA5NTY0N1wifSIKfQ=="  // PUT your SESSION_ID 


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
