const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('');


bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    //console.log(newUserChannel.name);

    if( newUserChannel !== undefined && newUserChannel === undefined ){
        //play music
    }
    //combine the 2 ifs with a big or
    else if( newUserChannel !== undefined && oldUserChannel !== undefined && newUserChannel.name == 'Gulag' && oldUserChannel.name != newUserChannel.name ) {
        //play music
        console.log('gulag');
        console.log(newMember.voiceChannel.id);
    }
    else {
        console.log('no gulag');
        console.log(newMember.voiceChannel.id);
    }
})