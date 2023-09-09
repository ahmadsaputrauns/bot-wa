import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, daftar, umur, pasangan, koin, role } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let str = `
*Nama:* ${username} 
*Nomor:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Umur:* ${daftar ? umur : ''} Tahun
*Koin:* ${koin}
*Exp:* ${exp}
*Limit:* ${limit}
*Role:* ${role}
*Level:* ${level}
${readMore}
`.trim()
   await conn.sendFile(m.chat, pp, '', str, m)
}
handler.help = ['profile']
handler.tags = ['user']
handler.command = /^(profile|limit|me)$/i
handler.daftar = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, '*Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}