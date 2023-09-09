import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw 'Texnya Mana Kak?'
let stiker = await sticker(null, `https://api.xyroinee.xyz/api/canvas/ttp?text=${text}&apikey=${global.xyro}`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
handler.tags = ['sticker']
handler.help = handler.command = ['ttp']
handler.limit = true
export default handler