
const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🍁"

if (Config.WORKTYPE == 'public') {


Trex.addrex({ pattern: 'ass ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

       // if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/blow?apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.video, { mimetype: Mimetype.gif, caption:  '\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
  
  }
