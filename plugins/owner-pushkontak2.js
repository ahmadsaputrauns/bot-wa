let handler = async (m, { conn, command, usedPrefix, text, participants }) => {
if (!text) return m.reply(`Enter the group id and text in the correct format, for Example: ${usedPrefix+command}1234567890@g.us|assalamualaikum save SENJAXSTORE`)
let [groupId, pushText] = text.split('|') //text.split("|")[0]
if (!groupId || !pushText) throw `Enter the group id and text in the correct format, for Example: ${usedPrefix+command}1234567890@g.us|assalamualaikum save SENJAXSTORE`
m.reply('Currently pushing contact please wait')
const metadata2 = await conn.groupMetadata(groupId)
const halss = metadata2.participants
for (let mem of halss) {
conn.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: text.split("|")[1] })
  }  
  conn.reply(m.chat, 'Success Push Contacts', m)
}
handler.help = ['pushkontakv2', 'pkv2'].map(v => v + ' <idgroup>|<teks> ')
handler.tags = ['owner']
handler.command = /^(pushkontakv3|pkv3)$/i
handler.owner = true
export default handler