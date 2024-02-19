import OrasCommand from "../../abstract/OrasCommand.js";
import { cpu } from "systeminformation";
import { cpus, totalmem } from "node:os";
export default class Stats extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "stats";
        this.aliases = ["st", "stat", "botinfo", "bi"];
        this.desc = "Informs you about the current statitics of the bot";
        this.usage = "stats";
        this.cat = "info";
        this.exec = async (message, args, prefix) => {
            let em = this.client.utils
                .premiumEmbed(message.guildId)
                .setAuthor({
                    name: `Stats`,
                    iconURL: this.client.user.displayAvatarURL(),
                })
                .setDescription(`The __Basic Stats__ Page of the Trixo`)
                .addFields([
                {
                    name: `<:info:1206834266407833681>__Basic Information__`,
                    value: `> **<:arrow_flora:1206859118154092584> Bot Tag**: ${this.client.user.tag}\n> **<:arrow_flora:1206859118154092584> Servers**: ${await this.client.cluster
                        .broadcastEval((x) => x.guilds.cache.size)
                        .then((result) => result.reduce((a, b) => a + b, 0))}\n> **<:arrow_flora:1206859118154092584> Users**: ${await this.client.cluster
                        .broadcastEval((c) => c.guilds.cache
                        .filter((x) => x.available)
                        .reduce((a, g) => a + g.memberCount, 0))
                        .then((r) => r.reduce((acc, memberCount) => acc + memberCount, 0))}\n> **<:arrow_flora:1206859118154092584> Channels**: ${await this.client.cluster
                        .broadcastEval((x) => x.channels.cache.size)
                        .then((r) => r.reduce((a, b) => a + b, 0))}\n> **<:arrow_flora:1206859118154092584> Online Since**: <t:${Math.round(this.client.readyTimestamp / 1000)}:R>
                        > **<:arrow_flora:1206859118154092584> Latency**: ${this.client.ws.ping}ms`,
                },
            ])
                .setThumbnail(this.client.user.displayAvatarURL());
            let cpuUsage;
            let cpuFree;
            const lol = Object.values(cpus()[0].times).reduce((a, b) => a + b, 0) *
                100;
            const lol2 = (process.cpuUsage().user + process.cpuUsage().system) * 1000;
            cpuUsage = (lol2 / lol).toFixed(2);
            cpuFree = (100 - cpuUsage).toFixed(2);
            let b1 = this.client.utils.button(`custom_id`, `Basic Information`, 2, `gen`);
            let b2 = this.client.utils.button(`custom_id`, `System Information`, 2, `sys`);
            let b3 = this.client.utils.button(`custom_id`, `Team Information`, 2, `team`);
            let row = this.client.utils.actionRow([b1, b2.setDisabled(false), b3]);
            let msg = await message.reply({
                embeds: [em],
                components: [row],
            });
            let guild = await this.client.guilds
                .fetch(this.client.config.supportId)
                .catch(() => { });
            let collector = await msg.createMessageComponentCollector({
                filter: (b) => {
                    if (b.user.id === message.author.id)
                        return true;
                    else
                        return b.reply({
                            content: `${this.client.emoji.cross} You are not the command requester`,
                            ephemeral: true,
                        });
                },
                time: 100000 * 7,
            });
            collector.on("collect", async (interaction) => {
                if (interaction.isButton()) {
                    if (interaction.customId === `team`) {
                        return interaction
                            .update({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(message.guildId)
                                    .setAuthor({
                                    name: `Stats`,
                                    iconURL: this.client.user.displayAvatarURL(),
                                })
                                    .setDescription(`The __Team Stats__ Page of Bot`)
                                    .addFields([
                                    {
                                        name: `<:users:1206844431572017163> __Team Information__`,
                                        value: `> <a:developer_bot:1191706873615880273> **Developer**: [**Supreme**](https://discord.com/users/1131953433134497923)
                                        > <:codev:1206836807858257930> **Co-Developer**: [**Radhe**](https://discord.com/users/1146450017327009903) | [**Akshay**](https://discord.com/users/1191577120288297000)
                                        > <:owner:1191577120288297000> **Owners**: [**Supreme**](https://discord.com/users/1131953433134497923) | [**Radhe**](https://discord.com/users/1146450017327009903)`,
                                    },
                                    
                                ])
                                    .setThumbnail(this.client.user.displayAvatarURL()),
                            ],
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils
                                        .button(`custom_id`, `Basic Information`, 2, `gen`)
                                        .setDisabled(false),
                                    this.client.utils.button(`custom_id`, `System Information`, 2, `sys`),
                                    this.client.utils.button(`custom_id`, `Team Information`, 2, `team`),
                                ]),
                            ],
                        })
                            .catch(() => { });
                    }
                    else if (interaction.customId === `gen`) {
                        await interaction.deferUpdate();
                        return await msg
                            .edit({
                            embeds: [em],
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`custom_id`, `Basic Information`, 2, `gen`),
                                    this.client.utils
                                        .button(`custom_id`, `System Information`, 2, `sys`)
                                        .setDisabled(false),
                                    this.client.utils.button(`custom_id`, `Team Information`, 2, `team`),
                                ]),
                            ],
                        })
                            .catch(() => { });
                    }
                    else if (interaction.customId === `sys`) {
                        await interaction.deferUpdate();
                        return await msg
                            .edit({
                            embeds: [
                                this.client.utils
                                    .premiumEmbed(message.guildId)
                                    .setAuthor({
                                    name: `Stats`,
                                    iconURL: this.client.user.displayAvatarURL(),
                                })
                                .setDescription(`The __System Stats__ Page of the Bot`)
                                    .addFields([
                                    {
                                        name: `<:info:1206834266407833681> __System Information__`,
                                        value: `> <:arrow_flora:1206859118154092584> **Discord.js**: v14.9.0\n> <:arrow_flora:1206859118154092584> **Node js**: 16.20.2\n> <:arrow_flora:1206859118154092584> **CPU**: AMD EPYC 7B13 64-Core Processor\n> <:arrow_flora:1206859118154092584> **Arch**: x64\n> <:arrow_flora:1206859118154092584> **Platform**: Linux`,
                                    },
                                ])
                                    .setThumbnail(this.client.user.displayAvatarURL()),
                            ],
                            components: [
                                this.client.utils.actionRow([
                                    this.client.utils.button(`custom_id`, `Basic Information`, 2, `gen`),
                                    this.client.utils.button(`custom_id`, `System Information`, 2, `sys`),
                                    this.client.utils
                                        .button(`custom_id`, `Team Information`, 2, `team`)
                                        .setDisabled(false),
                                ]),
                            ],
                        })
                            .catch(() => { });
                    }
                }
            });
            collector.on("end", async () => {
                if (!msg)
                    return;
                else
                    return await msg.edit({
                        components: [
                            this.client.utils.actionRow([
                                b1.setDisabled(false),
                                b2.setDisabled(false),
                                b3.setDisabled(false),
                            ]),
                        ],
                    });
            });
        };
    }
}
function checkMemPresence(member) {
    try {
        if (member.presence?.status === `online`)
            return "<:online:1123087833788330066>";
        else if (member.presence?.status === `idle`)
            return "<:idle:1123087869460885614>";
        else if (member.presence?.status === `offline`)
            return "<:Offline:1123088263503159327>";
        else if (member.presence?.status === `dnd`)
            return "<:dnd:1123087852834664468>";
        else
            return "<:Offline:1123088263503159327>";
    }
    catch (e) {
        console.log(e);
        return "<:Offline:1123088263503159327>";
    }
}
//# sourceMappingURL=Stats.js.map
