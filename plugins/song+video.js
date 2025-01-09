const {cmd , commands} = require('../command')
const fg = require(`api-dylux´)
const yts = require(`yt-search´)


cmd({
    pattern: "songs",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or text ⚙️*")
const search = await yts(q)
const data = search.video[0];
const url = data.url

let desc = `
*⚙️   QEEN SITHU 🧚 Song Downloader  ⚙️*

Title: ${data.title}sc
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY SITHUM SATHSARA 👤*
´ 
await conn.sendmessage(from'{image:{url:data.thumbnail},caption:desc,{quoeted:mek});

//download audio

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio message

await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}´)
}
})

//==============video-dl================

pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please give me a url or text ⚙️*")
const search = await yts(q)
const data = search.video[0];
const url = data.url

let desc = `
*⚙️   QEEN SITHU 🧚 Video Downloader  ⚙️*

Title: ${data.title}sc
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY SITHUM SATHSARA 👤*
´ 
await conn.sendmessage(from'{image:{url:data.thumbnail},caption:desc,{quoeted:mek});

//download video

let down = await fg.ytv(url)
let downloadurl = down.dl_url

//send video message

await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from'{document: {url:downloadurl,mimetype:"video/mp4",fileName:data.title +".mp4"}},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}´)
}
})
