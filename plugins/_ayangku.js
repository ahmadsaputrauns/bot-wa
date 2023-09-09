import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `Hai juga sayang, Watashi let user = `@${m.sender.split('@')[0]}` nih

heii kamuu!!>< let user = `@${m.sender.split('@')[0]}`
    
AKU BERUNTUNG BGTT PUNYA KAMU♡.
akuu ga nyesel kenal kamu, aku bahagia bgt bisa kenal org ky kamu walaupun kadang suka nyebelin hhe.
kmu kl nyebelin tuh yaa bikin aku pgn gebug tauu gemessss ya allah😞,, pgn cubit km pgn gigit kmuuu,,
aku lucu ga kalo ngambek bubb??, lucu yaa?, lucu dong akuuu akuu pacalll kamuuu💐🤘🏿.
kmu beruntung ga kenal akuu?, aku si beruntunggg bgt bgt bgt sih ya kenal km, aku bersyukur bisa kenal kmuuu.
AKU KENAL ORANG KAYA KAMU AKU TUH MERASA ORANG PALING BERUNTUNG DI DUNIA INII🌷💐. km km bisa hargaiin perasaan aku, km bisa ngertiin aku km bisa ngadepin sikap aku yang kek bocill iniii, setiap hari suka nya bikin masalah terusss🤘🏿🤘🏿, tapi seru wleeee xixi.
km sayang ga sm aku?, aku sih sayang ya sama kamu,, kamu parah sih kl ga sayang aku parah.
AKU SAYANG KM, KAMU SAYANG AKU YAAA!!!💐💐.
cewe aku cantik bgttt cewe aku lucuu 
cewe cewe apa yang lucuu??, cewe aku😾🫶🏿.
siapa yang suka nya manja?,, cewe aku lah☝️😜
siapaa yang cewe nya cantik bgttt??, ya jlss cewe aku yakali cewe di luar sana hiiiii,,
kamu kamu kamuuuu paling sempurna pokoknyaaaa😜🫶🏿.
GAADA YANG BIKIN AKU NYAMAN SELAIN KAMU, GAADA YANG BIKIN AKU CINTA SEDALAM INII><.
I really love youu bubb💟🌷
i love youu
you favorite i
SAYANG BGT SAAMA CEWE SATU INI👆🏿.
I really do not regret knowing you♡.
i always you.
bubb pretty 😜💟.
GA ADA YANG BISA NGALAHIN CEWE AKU🫶🏿💐.
bububb perfect><
bububb perfect><
bububb perfect><
bububb perfect><
bububb perfect><
bububb perfect><
bububb perfect><
💐💐💐.
AKU BANGGA BANGET PUNYA KAMU BANGGA BANGET 💟‼️. 
aku gamau kita asing.
nnti kl udah ga bareng bareng lagi jangan asing yaaa‼️.
gamawuu asing sama kamu gamau‼️💐.
oh iya bubb aku mw ngomong, maaf sama kamuuuu, kl aku suka bikin km kesel sm ulah aku😞,
AKU TAU KAMU KADANG JUGA CAPE YA NGADEPIN AKU??,,
aku milih km karna km bisa ngadepin sikap aku💐‼️.
aku gamauu kamu berubah
km marah aku bodo amat?, ga bubb aku nangisss!!
aku nangis takut km cape sm aku, aku takut km bosen sm aku.

pokonya always u bububb pretty ak><🌷.

`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Senja - Official Group`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu)$/i;

export default handler;
