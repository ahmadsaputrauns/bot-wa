let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Gunakan Format .Mentransfer <type> <jumlah> <@tag>\nContoh Penggunaan: *.mentransfer koin 100 @tag*\n\n*List Yang Bisa Di Transfer :*\n- Koin\n- Limit`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag Salah Satu, Atau Ketik Nomernya!!'
        let users = global.db.data.users
        switch (type) {
            case 'koin':
                if (global.db.data.users[m.sender].koin >= count * 1) {
                    try {
                        global.db.data.users[m.sender].koin -= count * 1
                        global.db.data.users[who].koin += count * 1
                        conn.reply(m.chat, `Berhasil Mentransfer Koin Sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].koin += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                    }
                } else conn.reply(m.chat, `Koin Kamu Tidak Mencukupi Untuk Mentransfer Sebesar ${count}`.trim(), m)
                break
            case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `Berhasil Mentransfer Limit Sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                       }
                } else conn.reply(m.chat, `Limit Kamu Tidak Mencukupi Untuk Mentransfer Sebesar ${count}`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Gunakan Format .Mentransfer <type> <jumlah> <@tag>\nContoh Penggunaan: *.mentransfer koin 100 @tag*\n\n*List Yang Bisa Di Transfer :*\n- Koin\n- Limit`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Gunakan Format .Mentransfer <type> <jumlah> <@tag>\nContoh Penggunaan: *.mentransfer koin 100 @tag*\n\n*List Yang Bisa Di Transfer :*\n- Koin\n- Limit`.trim(), m)
        console.log(e)
        }
}
    
handler.help = ['transfer']
handler.tags = ['user']
handler.command = /^(transfer|tf)$/i

export default handler
