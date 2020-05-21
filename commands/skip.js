const { MessageEmbed } = require("discord.js")




module.exports = {
  name: "skip",
  description: "Skip the song or shift yourself to next song",
  async execute(client, message, args) {
   
    
    
    
let embed = new MessageEmbed()
.setColor("RANDOM");


    const { channel } = message.member.voice;

       
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could skip")
      return message.channel.send(embed);
    }
    
     if(message.member.hasPermission("ADMINISTRATOR")) {
      let msg = await message.channel.send("Please Vote Here to Skip the Song")
      return msg.react("👍")
       
    }

    serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Skipping The Song")
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed);
  }
};
