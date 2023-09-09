import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(michi|michika|chika|bot|ping|p)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./vn/clara.mp3",
	"./vn/clara1.mp3",
	"./vn/clara2.mp3",
	"./vn/clara3.mp3",
	"./vn/clara4.mp3",
];