const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('');

const desiredChannel = "Gulag";

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    if(newUserChannel && oldUserChannel && oldUserChannel.name != desiredChannel && newUserChannel.name == desiredChannel){
        //music
        console.log('gulag');
        console.log(newUserChannel.name);
        newUserChannel.join()
            .then( connect => {
                const dispach = connect.playFile('./ear_rape.mp3');
            });
    }

    else if(!oldUserChannel && newUserChannel && newUserChannel.name == desiredChannel){
        //music
        console.log('gulag2');
        newUserChannel.join()
            .then( connect => {
                const dispach = connect.playFile('./ear_rape.mp3');
            });
        //playingMusic = ture;
    }

    else {
        console.log('no gulag');
        //console.log(newMember.voiceChannel.id);
    }
})
