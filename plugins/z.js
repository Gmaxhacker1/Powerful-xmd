let handler = async (m, {conn, text}) => {
let grup = Object.keys(db.data.chats).filter(v => v.endsWith('@g.us'))
let admin = []

for (let c of grup) {
let cek = (await conn.groupMetadata(c)).participants.filter(v => v.admin !== null).map(v => v.id)
admin = admin.concat(cek)
}
let pesan = text ? text : 'Hai admin!'
for (let adm of admin) {
await conn.reply(adm, pesan, null)
await conn.delay(1500)
}
m.reply('sukses')
}
handler.help = handler.command = ['pengumuman']
handler.tags = ['owner']
handler.rowner = true
export default handler