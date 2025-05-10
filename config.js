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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348103283453";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103283453";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_38_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDg2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVjl3M2MxNDA5S21PelJVMDlWSEZhczhycS9vR1dYMW45ZUZmRzI3THhSUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOWx6M3ZhYUlTbGEzMTZWa2NVX3JxUVwiLFxuICBcInBob25lSWRcIjogXCI3NjgzMDMxOC05Mzc0LTRlZGMtOWFlZC04MzlmMjE3MWExOTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgNjUsXG4gICAgICAzNyxcbiAgICAgIDIyNCxcbiAgICAgIDE1OSxcbiAgICAgIDIzLFxuICAgICAgMjI1LFxuICAgICAgMTE2LFxuICAgICAgMjIzLFxuICAgICAgMjMyLFxuICAgICAgMTg3LFxuICAgICAgMTU1LFxuICAgICAgMjI2LFxuICAgICAgMzEsXG4gICAgICAxNDAsXG4gICAgICA2OSxcbiAgICAgIDE3NixcbiAgICAgIDE3MSxcbiAgICAgIDIwMSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgNzQsXG4gICAgICA4MSxcbiAgICAgIDgxLFxuICAgICAgNDIsXG4gICAgICAyNTMsXG4gICAgICA4OCxcbiAgICAgIDUzLFxuICAgICAgMjI1LFxuICAgICAgMTgsXG4gICAgICA5MyxcbiAgICAgIDE2OCxcbiAgICAgIDkxLFxuICAgICAgMTc4LFxuICAgICAgNSxcbiAgICAgIDIyNCxcbiAgICAgIDE0NyxcbiAgICAgIDEyNCxcbiAgICAgIDc5LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3lCaWZRREVKcWE5OEFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQQ2FKSVFEbVNSNlBJaW5pTEVwcjZPTG5JUytHNWMwclBicDByQit5VVhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImp5SzQrR3RHRkdFQmRKMmc0QjhwUGVTWXZZL096VzFMdFROU2JGK1ZoSk1yQXgycFlsUlJ1bW4rYWJwZUNIZkptam9BNjhkdExUTnNtSWl3MFpTaUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVkM3lxelB4N3lkZ2hWeWNpeFRTNEVWbVd6UVpxUzl5ZWcvcUlGUno4d1RuWXdyY2ZDYW5BY3Y2YmZyVDIzNWhQdjNQdEtlcVRvWEd1VlNNWHYxQmdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMzI4MzQ1Mzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGlrYWNoaVwiLFxuICAgIFwibGlkXCI6IFwiMTkyMTE4MTgyMTE3NTYwOjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzMjgzNDUzOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2NzgzNTE5XG59Igp9"  // PUT your SESSION_ID 


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
