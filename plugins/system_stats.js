

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'public') {

    Trex.addrex({on: 'text', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {
        let getword1bad = new RegExp('alive')
        let getword2bad = new RegExp(`hi


😍`)
        
        if (getword1bad.test(message.message)) {
            
            if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY T-REX BOT ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/51129002f73a547da773b.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🍁```\n\n🍁 My name : ❰🍁🔱 PEARL BOT 🔱🍁❱\n\n🍁 Developer: HIRUWA\n\n🍁Thank You For Using ❰🍁🔱  T Rex BOT  🔱🍁❱"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY T-REX BOT ▷',
    buttons: buttons,
    headerType: 1
}




            
            var image = await axios.get ('https://telegra.ph/file/51129002f73a547da773b.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰🍁🔱  PEARL BOT  🔱🍁❱*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
      }
        
    if (getword2bad.test(message.message)) {
        
        await message.client.sendMessage (message.jid,'.guide',MessageType.text);
    }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'versnanammaion', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*❰🍁🔱  T Rex BOT  🔱🍁❱*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 Public'+
                `\n\n🍁 Check github for bot: https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY T-REX BOT ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/51129002f73a547da773b.jpg', {responseType: 'arraybuffer'})
       
       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 2000));
 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🍁```\n\n🍁 My name : ❰🍁🔱 PEARL BOT 🔱🍁❱\n\n🍁 Developer: HIRUWA\n\n🍁Thank You For Using ❰🍁🔱  T Rex BOT  🔱🍁❱"})
            
       // await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'MENU'}, type: 1},//jakakkak
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "▷ CLICK MENU BUTTON TO GET MENU ▷",
    footerText: 'BY T-REX BOT ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ('https://telegra.ph/file/51129002f73a547da773b.jpg', {responseType: 'arraybuffer'})
       
       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 2000));
 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰🍁🔱  PEARL BOT  🔱🍁❱*' })
       // await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'versinanamamamaon', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*❰🍁🔱  T Rex BOT  🔱🍁❱*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 - Public'+
                `\n\n🍁 Check github for bot:  https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
