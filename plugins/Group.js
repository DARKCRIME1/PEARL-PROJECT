const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      šā GROUP LIST āš\n\nš GROUP 01 š\n\n š± ' + Config.GROUPN1 + ' š±\nā¢ ' + Config.GROUPL1 + '\n\nš GROUP 02 š\n\nš± ' + Config.GROUPN2 + 'š±\nā¢ ' + Config.GROUPL2 + '\n\nš GROUP 03 š\n\nš± ' + Config.GROUPN3 + ' š±\nā¢ ' + Config.GROUPL3 + '\n\nš GROUP 04 š\n\nš± ' + Config.GROUPN4 + ' š±\nā¢ ' + Config.GROUPL4 + '\n\n\n       ā°šš±  T Rex BOT  š±šā±   '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      šā GROUP LIST āš\n\nš GROUP 01 š\n\n š± ' + Config.GROUPN1 + ' š±\nā¢ ' + Config.GROUPL1 + '\n\nš GROUP 02 š\n\nš± ' + Config.GROUPN2 + 'š±\nā¢ ' + Config.GROUPL2 + '\n\nš GROUP 03 š\n\nš± ' + Config.GROUPN3 + ' š±\nā¢ ' + Config.GROUPL3 + '\n\nš GROUP 04 š\n\nš± ' + Config.GROUPN4 + ' š±\nā¢ ' + Config.GROUPL4 + '\n\n\n       ā°šš±  T Rex BOT  š±šā±   '})

    }));
  
  Trex.addrex({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      šā GROUP LIST āš\n\nš GROUP 01 š\n\n š± ' + Config.GROUPN1 + ' š±\nā¢ ' + Config.GROUPL1 + '\n\nš GROUP 02 š\n\nš± ' + Config.GROUPN2 + 'š±\nā¢ ' + Config.GROUPL2 + '\n\nš GROUP 03 š\n\nš± ' + Config.GROUPN3 + ' š±\nā¢ ' + Config.GROUPL3 + '\n\nš GROUP 04 š\n\nš± ' + Config.GROUPN4 + ' š±\nā¢ ' + Config.GROUPL4 + '\n\n\n       ā°šš±  T Rex BOT  š±šā±   ' ,quoted: message.data})

    }));
 
}
