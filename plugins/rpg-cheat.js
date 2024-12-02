/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].money = 999999999
        global.db.data.users[m.sender].limit = 999999999
        global.db.data.users[m.sender].exp = 999999999
        m.reply(`   [ *P R E M I U M* 👑]\n\n*Selamat Kamu Mendapatkan*:\n*Koin:* 999999999\n*Limit:* 999999999\n*Exp:* 999999999`)
}
handler.command = /^(cheat)$/i
handler.premium = true
handler.cooldown = 1
export default handler