import OrasCommand from "../../abstract/OrasCommand.js";

export default class Gay extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "dick";
        this.cat = "fun";
        this.desc = "Check the dick";
        this.usage = "dick [@user]";
        this.dev = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.manage = false;
        this.exec = async (message, args, prefix) => {
            let target = message.mentions.members.first() || message.member;
            const loveRate = Math.floor(Math.random() * 101);

            const heartsCount = Math.floor((loveRate / 100) * 10);
            const filledHearts = '='.repeat(heartsCount);
            
            
            // Send the embed to the channel
            return message.reply({ embeds: [
                                     this.client.utils
                                         .embed()
                                         .setAuthor({
                                             name: `${message.author.username}`,
                                             iconURL: message.author.displayAvatarURL(),
                                         })
                                         .setTitle(`Dick Size`)
                                         .setDescription(`${target.user.tag}'s Dick Size\n\n 8${filledHearts}D`)                            .setFooter({
                                             text: `Thanks For Selecting ${this.client.user.username}`,
                                             iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
                                         }),
                                 ], });
        };
    }
}
