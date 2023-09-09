let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${usedPrefix}suit gunting\n\nkasih spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 200
            m.reply(`Kamu Menang!\nKamu: ${text}\nBot: ${astro}\nKamu Mendapatkan 200 Koin`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].koin += 500
            m.reply(`Kamu Menang!\nKamu: ${text}\nBot: ${astro}\nKamu Mendapatkan 200 Koin`)
        } else {
            m.reply(`Kamu Kalah!\nkamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].koin += 200
            m.reply(`Kamu Menang!\nKamu: ${text}\nBot: ${astro}\nKamu Mendapatkan 200 Koin`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}\nCoba Lagi :v`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['havefun']
handler.command = /^(suit)$/i

export default handler
