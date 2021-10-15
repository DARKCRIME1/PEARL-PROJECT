/* Copyright (C) 2021 T REX
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
HIRUWA - TREX
උස්සන්නද ආවෙ අම්මට හුකෝගන්නෙ නැතුව පල පොන්නයා 😂👿
*/

const Trex = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const hrs = new Date().getHours({ timeZone: Config.TIME })
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('_trex');


if (Config.WORKTYPE == 'public') {

Trex.addrex({pattern: 'guide', fromMe: false}, (async (message, match) => {
// T-REX LIST👿
 
    
    const rows = [
        {title: 'මොකක්ද subscribe දන්සැළෙන් වෙන්නෙ?', description:
 `\n\n
-Subscribe දන්සැළෙන් අපි, පොඩි youtubers ලාට subscribe අරගන්න ක්‍රම, channel එක පවත්වාගෙන යන්න ඕනේ ක්‍රම, කොහොමද video එකක් ranking කරගන්නේ ආදිය ඇතුලු සේවා රැසක් ඔබට තිලිණ කරනවා.
` , rowId:"rowid1"},
        {title: 'කොහොමද අපි sub ගන්නේ?', description:
`\n\n
-ඔයා subscribe දන්සැළට join උනාට පස්සේ අපි ඔයාගේ channel එක view කරලා grade කරනවා. ඊටපස්සේ අපි ඔයාට code එකක් නිකුත් කරනවා හදුනාගැනීමේ code එක විදිහට.
-මේ code එකත් මතක තියාගන්න ඕනේ. 
-ඊටපස්සේ අපි ඔයාව අපේ main group එකටයි, Team එකකටයි add කරනවා. 
-Team group එකේ ඔයා වගේම members ලා 5 ක් ඉන්නවා. මේ members ලත් එක්ක අපි දවස ගානේ දෙන channel 5/7 subscribe කරලා screen shot තමන්ගේ team group එකට දාන්න තියෙන්නෙ.
-මේ වගේම team තියෙනවා 30 කට ආසන්න ප්‍රමාණයක්. මේ group වලටත් ඔයාලගේ group එකේ link දානවා... ඒ වගේම එයාලගේ link ටිකත් යාලට දානවා... මේ විදිහට තමයි sub ලැබෙන්නෙ.
`, rowId:"rowid3"},
        {title: 'අපිට sub කීයක් එනවද?', description:
 `\n\n
-අපේ Team ටික් මෙහෙයවන්න Team leaders ලා 5 ක් යොදවලා තියෙනවා. මේ එක Team Leader කෙනෙක්ට Team 5 ක් බලාගන්න තියෙනවා. මේ එක Team එකක members ලා 5 ගානේ ඉන්නවා. එතකොට එක Team Leader කේක්ගේ Team එකෙන් subscribe 100 ක් එනවා. ඒ වගේ sub 100 ඒවා 5 ක් ලැබෙනවා දැනට.
`, rowId:"rowid4"},
        {title: 'කොච්චර කාලයක් අපි මේකට වැය කරන්න ඕනෙද?', description:
`\n\n
-ඔයාලට දවසකට එක video එකක් බලන්න විනාඩි තුනයි ඒ වගේ video 5 ක් බලන්න විනාඩි 15 යි. ඒ ත් එක්කම channel එකක් subscribe කරලා විනාඩි 5 ක කාලයක් මුකුත් නොකර විවේකයක් දී තිබීමෙන් පසුව අනෙක් channel එක වෙත ගොස් subscribe කිරීමට උපදෙස් දී ඇති නිසා. ව්නාඩි 5 ඒවා 5 ක්, විනාඩි 25 යි. මුලු වේලාව විනාඩි 40 යි දවසට.
`, rowId:"rowid5"},
        {title: 'අපිට watchtime ගන්න බැරිද?', description:
`\n\n
- පැයක වීඩියෝ playlist එකක් තියෙන ඕනම කෙනෙක්ට අපේ watch hour group එකත් එක්ක සම්බන්ද වෙලා watch time පැය 4000 හදාගන්න පුලුවන්.
`, rowId:"rowid6"},
        {title: 'කවද්ද වැඩේ පටන්ගන්නේ?', description:
`\n\n
- අපි 2021 අප්‍රේල් 30 ඉදලා මේ වෙනකන් subscribe, watch time වැඩේ කරගෙන එන්නෙ.  අලුත් update වලට හරියන්න අපි අපේ task එක හදලා ඔයාලට subscribe අරගන්න පහසු කරලා දෙනවා.
`, rowId:"rowid20"}
       ]
       
       const sections = [{title: "🍁 GUIDE LIST 🍁", rows: rows}]
       
       const button = {
        buttonText: 'Click Me▷',
        description: "🍁 GUIDE LIST 🍁",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
        
}