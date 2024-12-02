import fs from 'fs'
const data = fs.readFileSync('./function/database/jadibot.json');
let json = JSON.parse(data);

let handler = async (m, {conn, usedPrefix, command}) => {
if (!json[0]) throw `Tidak ada yang menjadi Bot`

let teks = `*[List Cloning Bot]*\n\n`
let no = 1
for (let bot of json) {
teks += `${no++}). ${await conn.getName(bot) || 'no name'} (${bot})\n`
}
m.reply(teks)
}
handler.help = handler.command = ['listjadibot']
handler.tags = ['main']

export default handler