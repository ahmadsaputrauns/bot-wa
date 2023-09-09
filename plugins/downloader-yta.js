const handler = async (m, { conn, text, command }) => {
if (!text) throw 'Linknya Mana.??'
m.reply(wait)
try {
const url = `https://yt-downloader.akkun3704.repl.co/?url=${text}&filter=audioonly&quality=lowestaudio&contenttype=audio/mpeg`
conn.sendMessage(m.chat, { 
    document: { url: url }, 
    mimetype: 'audio/mpeg', 
    fileName: `lagunya.mp3`,
    caption: '_Nih Kak_'
  }, {quoted: m})
} catch (e) {
m.reply(eror)
}
}

handler.command = /^(ytmp3|youtubemp3|yta)$/i
handler.help = ["ytmp3"]
handler.tags = ['downloader']
handler.limit = true

export default handler