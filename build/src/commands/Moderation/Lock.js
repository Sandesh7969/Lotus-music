import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
import { PermissionsBitField } from "discord.js";

export default class Lock extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "lock",
  this.cat = "moderation",
  this.desc = "Locks the current channel.",
  this.usage = "",
  this.userPerms = ["ManageChannels"],
  this.botPerms = ["ManageChannels"],
      this.premium = {
      guild: false,
      user: false,
    };
  this.exec = async (message, args, prefix) => {
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)){

      return message.channel.send({content : "You don't have permission to lock this channel."})
    } else {           
    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: false,
        AddReactions: false,
      });
        
      return message.channel.send(`🔒 ${message.channel} has been locked.`);
    } 
     catch (err) {

      console.error(err);

      return message.channel.send("An error occurred while trying to lock the channel.");
  }
}
}
 }
}