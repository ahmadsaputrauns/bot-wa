import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
try {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/hentai?apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Title:* ${v.title}\n*Link:* ${v.link}\n*Video:* ${v.video_1}\n*Video2:* ${v.video_2}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
  } catch (e) {
  m.reply(eror)
  }
}
handler.help = ['hentai']
handler.tags = ['asupan']
handler.command = /^(hentai)$/i
handler.premium = true

export default handler