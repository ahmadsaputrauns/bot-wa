import fetch from 'node-fetch'

let timeout = 120000
let handler = async (m, { conn, usedPrefix, command }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.tebakanime[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}wa Untuk Bantuan
Hadiah: 
500 Exp
200 Koin
1 Limit
`.trim()
    conn.tebakanime[id] = [
        await conn.sendFile(m.chat, json.img, 'anu.jpg', caption, m, false),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakanime[id]) await conn.reply(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['havefun']
handler.command = /^tebakanime$/i
export default handler