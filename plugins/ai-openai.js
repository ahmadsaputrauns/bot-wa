import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ organization: `org-wlQ2hrPSZIepQa7QcTaG7Lh5`, apiKey: `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` }); 
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    if (!text) throw new Error(`Contoh:\n${usedPrefix}${command} Apakah Banteng Cocok akan punah? atau nambah langkah?`);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });

    conn.reply(m.chat, `${response.data.choices[0].message.content}`, m);

  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
    } else {
      conn.reply(m.chat, `${error.message}`, m);
    }
  }
}

handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|gpt)$/i
handler.limit = true
handler.register = false

export default handler