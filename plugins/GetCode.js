const Trex = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Config = require('../config');

const fs = require('fs');

const Language = require('../language');

const Lang = Language.getString('profile');

//-=(
Trex.addrex({pattern: 'get ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.JID_DESC, dontAddCommandList: true}, (async (message, match) => {    
       if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '```Code of : ``` @{} ```\nNumber : wa.me/{}```'.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.split('@')[0]), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '```Code of : ``` @{} ```\nNumber : wa.me/{}```'.format(user.split('@')[0], user.split('@')[0]), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
