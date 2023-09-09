import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*wa/i.test(m.quoted.contentText)) return !0
    this.tebakanime = this.tebakanime ? this.tebakanime : {}
    if (!(id in this.tebakanime)) return m.reply('Soal Itu Telah Berakhir')
    if (m.quoted.id == this.tebakanime[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakanime[id][1]))
        if (['.wa', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            global.db.data.users[m.sender].exp += 500
            global.db.data.users[m.sender].limit += 1
            global.db.data.users[m.sender].koin += 200
            conn.reply(m.chat, `*✓ Benar!*\nSelamat Kamu Mendapatkan:\n• 500 Exp\n• 200 Koin\n• 1 Limit`, m)
            clearTimeout(this.tebakanime[id][3])
            delete this.tebakanime[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler

