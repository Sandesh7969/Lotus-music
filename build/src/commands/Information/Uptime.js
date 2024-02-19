import OrasCommand from "../../abstract/OrasCommand.js";
export default class OrasLatency extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "uptime";
        this.cat = "info";
        this.desc = "Informs you about the bot's latency";
        this.aliases = ["uptime"];
        this.exec = async (message, prefix, args) => {
            return message?.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`<:time_flora:1206841364663377930> Uptime`)
                        .setAuthor({
                            name: `Ping & Uptime`,
                            iconURL: this.client.user.displayAvatarURL(),
        })
                    .setFooter({
                                        text: `Requested By: ${message.author.tag}`,
                        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
                                    })
                        .setDescription(` <:time_flora:1206841364663377930><t:${Math.round(this.client.readyTimestamp / 1000)}:R>\n<:ping:1202394451075534908> **Ping**\n> <:ping:1202394451075534908> \`${this.client.ws.ping}\`ms`),
                ],
            });
        };
    }
}
//# sourceMappingURL=Latency.js.map