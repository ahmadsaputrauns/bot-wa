import { createHash } from 'crypto'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let namae = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
const pp = await conn.profilePictureUrl(m.sender, "image").catch((_) => "./src/avatar_contact.png")
  if (user.daftar === true) throw `Kamu Sudah Ter daftar Di Database, Apa Kamu Ingin Mendaftar Ulang? *${usedPrefix}unreg`
  if (!Reg.test(text)) return m.reply(`Masukan Nama.UmurKamu\nContoh: .daftar Clara.18`)
  let [_, nama, splitter, umur] = text.match(Reg)
  if (!nama) throw 'Nama Tidak Boleh Kosong'
  if (!umur) throw 'Umur Tidak Boleh Kosong'
  umur = parseInt(umur)
  if (umur >= 30) throw 'WOI TUA (。-`ω´-)'
  if (umur <= 5) throw 'Halah dasar bocil'
  user.nama = nama.trim()
  user.umur = umur
  user.regTime = + new Date
  user.daftar = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `• *Nama:* ${nama}
• *Umur:* ${umur} Tahun
• *Status:* Sukses
• *Serial Nomor:* ${sn}
`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: cap }, m)
}
handler.help = ['daftar']
handler.tags = ['user']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
