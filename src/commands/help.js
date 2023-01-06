module.exports = {
    conf: {
      aliases: ['help','yardım'],
      name: "yardım",
      usage: 'help',
      description: "Botun ses ayarları hakkında bilgi alırsınız."
    },
    
    run: async ({client, msg, args, cfg, Database, guild, prefix, author}) => {
    if (!author.hasPermission(8)) return

    client.message(client.normalEmbed("Hey <@!"+author+">, Buradan Komutlara Göz Gezdirebilirsin;\n\n*Ses modunu ayarlamak için \`"+prefix+"ses-mod\` komutunu kullanabilirsin.\n Sistemi üzerindeki ses dosyalarını \`"+prefix+"ses-yükle\` ve \`"+prefix+"ses-sil\` komutlarıyla ayarlayabilirsin.*", msg), msg.channel.id, 5000)}}