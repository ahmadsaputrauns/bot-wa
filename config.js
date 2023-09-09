import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281348097758', 'senja', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281348097758'
global.packname = 'Quin - MD by'
global.author = '© senja'
global.namebot = '​senja- MD'
global.wm = '© Clara By senja'
global.stickpack = 'Quin - MD by'
global.stickauth = '© senja'
global.fotonya = 'https://telegra.ph/file/00c92546beb69bde702bc.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/xyroinee'
global.sgh = 'https://github.com/Hrasxyz'
global.sgc = 'https://chat.whatsapp.com/FfgC4RuMw4B7kW2KIBPTG8'
// Donasi
global.psaweria = 'https://saweria.co/hrasxyz'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '081348097758'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = 'ClaraKeyOfficial'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "ClaraKeyOfficial",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
