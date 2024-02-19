import { EmbedBuilder } from "discord.js";
import OrasCommand from "../../abstract/OrasCommand.js";

export default class Gay extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "gay";
        this.aliases = ["gayness"];
        this.cat = "utility";
        this.desc = "Check the gayness percentage";
        this.usage = "gay [@user]";
        this.dev = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.manage = false;
        this.exec = async (message, args, prefix) => {
            let target = message.mentions.members.first() || message.member;
            let percentage = Math.floor(Math.random() * 101);

            // Create the embed
            
            return message.reply({ embeds: [
                                    this.client.utils
                                        .embed()
                                        .setAuthor({
                                            name: `${message.author.username}`,
                                            iconURL: message.author.displayAvatarURL(),
                                        })
                                        .setTitle(`Gay Percentage`)
                                        .setDescription(`${target.user.tag} is ${percentage}% Gay! 🏳️‍🌈`)                            .setFooter({
                                            text: `Thanks For Selecting ${this.client.user.username}`,
                                            iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
                                        }),
                                ], });
        };
    }
}
