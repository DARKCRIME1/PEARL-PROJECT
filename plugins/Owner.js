const Trex = require('../events');
const {MessageType,MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {
Trex.addrex({pattern: 'owner', fromMe: false, deleteCommand: true, desc: 'verify 👿',}, (async (message, match) => {


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:W.HIRUSHA RUKSHAN\n' // full name
            + 'ORG:T-REX TEAM;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=94788306130:+94788306130\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "T-REX DEVELOPER", vcard: vcard}, MessageType.contact)
// send a list message!
}));
  
  Trex.addrex({pattern: 'owner', fromMe: true, deleteCommand: true, desc: 'verify 👿',}, (async (message, match) => {


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:W.HIRUSHA RUKSHAN\n' // full name
            + 'ORG:T-REX TEAM;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=94788306130:+94788306130\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "T-REX DEVELOPER", vcard: vcard}, MessageType.contact)
// send a list message!
}));
}
