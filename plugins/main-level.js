import db from '../lib/database.js'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import can from 'knights-canvas'
import uploadImage from '../lib/uploadImage.js'
import { ranNumb, padLead } from '../lib/others.js'
import got from 'got'

let handler = async (m, { conn }) => {
	let user = global.db.data.users[m.sender]
	let name = await conn.getName(m.sender)
	if (!canLevelUp(user.level, user.exp, global.multiplier)) {
		let image, data, pp, out
		let { min, xp, max } = xpRange(user.level, global.multiplier)
		let txt = `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* Lagi!`
		let meh = padLead(ranNumb(43), 3)
		try {
			try { pp = await conn.profilePictureUrl(m.sender, 'image') }
			catch { pp = 'https://i.ibb.co/m53WF9N/avatar-contact.png' }
			let out = 'https://telegra.ph/file/6894577305375f8139e3a.jpg'
			image = await new can.Rank().setAvatar(pp).setUsername(name.replaceAll('\n','')).setBg(out).setNeedxp(xp).setCurrxp(user.exp - min).setLevel(user.level).setRank('https://i.ibb.co/Wn9cvnv/FABLED.png').toAttachment()
			data = await image.toBuffer()
			await conn.sendMessage(m.chat, { image: data, caption: txt }, { quoted : m })
		} catch (e) {
			console.log(e)
			m.reply(txt)
		}
	} else {
		let before = user.level * 1
		while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
		if (user.level <= 2) {
			user.role = 'Mizunoto ✩¹'
		} else if (user.level <= 2) {
			user.role = 'Mizunoto ✩²'
		} else if (user.level <= 4) {
			user.role = 'Mizunoto ✩³'
		} else if (user.level <= 6) {
			user.role = 'Mizunoto ✩⁴'
		} else if (user.level <= 8) {
			user.role = 'Mizunoto ✩⁵'
		} else if (user.level <= 10) {
			user.role = 'Mizunoe ✩¹'
		} else if (user.level <= 20) {
			user.role = 'Mizunoe ✩²'
		} else if (user.level <= 30) {
			user.role = 'Mizunoe ✩³'
		} else if (user.level <= 40) {
			user.role = 'Mizunoe ✩⁴'
		} else if (user.level <= 50) {
			user.role = 'Mizunoe ✩⁵'
		} else if (user.level <= 60) {
			user.role = 'Kanoto ✩¹'
		} else if (user.level <= 70) {
			user.role = 'Kanoto ✩²'
		} else if (user.level <= 80) {
			user.role = 'Kanoto ✩³'
		} else if (user.level <= 90) {
			user.role = 'Kanoto ✩⁴'
		} else if (user.level <= 100) {
			user.role = 'Kanoto ✩⁵'
		} else if (user.level <= 110) {
			user.role = 'Kanoe ✩¹'
		} else if (user.level <= 120) {
			user.role = 'Kanoe ✩²'
		} else if (user.level <= 130) {
			user.role = 'Kanoe ✩³'
		} else if (user.level <= 140) {
			user.role = 'Kanoe ✩⁴'
		} else if (user.level <= 150) {
			user.role = 'Kanoe ✩⁵'
		} else if (user.level <= 160) {
			user.role = 'Michinoto ✩¹'
		} else if (user.level <= 170) {
			user.role = 'Michinoto ✩²'
		} else if (user.level <= 180) {
			user.role = 'Michinoto ✩³'
		} else if (user.level <= 190) {
			user.role = 'Michinoto ✩⁴'
		} else if (user.level <= 200) {
			user.role = 'Michinoto ✩⁵'
		} else if (user.level <= 210) {
			user.role = 'Michinoe ✩¹'
		} else if (user.level <= 220) {
			user.role = 'Michinoe ✩²'
		} else if (user.level <= 230) {
			user.role = 'Michinoe ✩³'
		} else if (user.level <= 240) {
			user.role = 'Michinoe ✩⁴'
		} else if (user.level <= 250) {
			user.role = 'Michinoe ✩⁵'
		} else if (user.level <= 260) {
			user.role = 'Tsuchinoto ✩¹ '
		} else if (user.level <= 270) {
			user.role = 'Tsuchinoto ✩²'
		} else if (user.level <= 280) {
			user.role = 'Tsuchinoto ✩³'
		} else if (user.level <= 290) {
			user.role = 'Tsuchinoto ✩⁴'
		} else if (user.level <= 300) {
			user.role = 'Tsuchinoto ✩⁵'
		} else if (user.level <= 310) {
			user.role = 'Tsuchinoe ✩¹'
		} else if (user.level <= 320) {
			user.role = 'Tsuchinoe ✩²'
		} else if (user.level <= 330) {
			user.role = 'Tsuchinoe ✩³'
		} else if (user.level <= 340) {
			user.role = 'Tsuchinoe ✩⁴'
		} else if (user.level <= 350) {
			user.role = 'Tsuchinoe ✩⁵'
		} else if (user.level <= 360) {
			user.role = 'Hinoto ✩¹'
		} else if (user.level <= 370) {
			user.role = 'Hinoto ✩²'
		} else if (user.level <= 380) {
			user.role = 'Hinoto ✩³'
		} else if (user.level <= 390) {
			user.role = 'Hinoto ✩⁴'
		} else if (user.level <= 400) {
			user.role = 'Hinoto ✩⁵'
		} else if (user.level <= 410) {
			user.role = 'Hinoe ✩¹'
		} else if (user.level <= 420) {
			user.role = 'Hinoe ✩²'
		} else if (user.level <= 430) {
			user.role = 'Hinoe ✩³'
		} else if (user.level <= 440) {
			user.role = 'Hinoe ✩⁴'
		} else if (user.level <= 450) {
			user.role = 'Hinoe ✩⁵'
		} else if (user.level <= 460) {
			user.role = 'Kinoto ✩¹'
		} else if (user.level <= 470) {
			user.role = 'Kinoto ✩²'
		} else if (user.level <= 480) {
			user.role = 'Kinoto ✩³'
		} else if (user.level <= 490) {
			user.role = 'Kinoto ✩⁴'
		} else if (user.level <= 500) {
			user.role = 'Kinoto ✩⁵'
		} else if (user.level <= 510) {
			user.role = 'Kinoe ✩¹'
		} else if (user.level <= 520) {
			user.role = 'Kinoe ✩²'
		} else if (user.level <= 530) {
			user.role = 'Kinoe ✩³'
		} else if (user.level <= 540) {
			user.role = 'Kinoe ✩⁴'
		} else if (user.level <= 550) {
			user.role = 'Kinoe ✩⁵'
		} else if (user.level <= 560) {
			user.role = 'Pillar 숒'
		} else if (user.level <= 570) {
			user.role = 'Pillar 숒'
		} else if (user.level <= 580) {
			user.role = 'Pillar 숒'
		} else if (user.level <= 590) {
			user.role = 'Pillar 숒'
    	} else if (user.level <= 600) {
			user.role = 'Pillar 숒'
		}
		if (before !== user.level) {
			let txt = `Selamat ${name.replaceAll('\n','')} Naik Level\n• Level Sebelumnya : ${before}\n• Level Baru : ${user.level}\n• Pada Jam : ${new Date().toLocaleString('id-ID')}\n*_Semakin Sering Berinteraksi Dengan Clara Semakin Tinggi Level Kamu_*`
			try {
				let image, data, pp
				try { pp = await conn.profilePictureUrl(m.sender, 'image') }
				catch { pp = 'https://i.ibb.co/m53WF9N/avatar-contact.png' }
				image = await new can.Up().setAvatar(pp).toAttachment()
				data = await image.toBuffer()
				await conn.sendMessage(m.chat, { image: data, caption: txt }, { quoted : m })
			} catch {
				m.reply(txt)
			}
		}
	}
}

handler.menufun = ['level']
handler.tagsfun = ['user']
handler.command = /^(level(up)?)$/i

export default handler
