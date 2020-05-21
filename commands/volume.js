const { MessageEmbed } = require("discord.js");

let embed = new MessageEmbed().setColor("RANDOM");

module.exports = {
  name: "volume",
  description: "Manage the volume of the song",
  execute(client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
      return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Bot is not playing anything")
      return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`The Current Volume is ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("Please Use Numerical Values Only")
      return message.channel.send(embed)
    }
    
    if(args[0] 
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`Seted Volume to ${args[0]}`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
  }
};