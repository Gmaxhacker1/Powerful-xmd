/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

const isLinkHttp = /chat.whatsapp.com|wa.me/i;
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;
    let chat = global.db.data.chats[m.chat];
    let name = conn.getName(m.sender);
    const isAntiLinkHttp = isLinkHttp.test(m.text);
    if (chat.antiLink && isAntiLinkHttp) {
    
m.reply(!isAdmin ? '*❗ kamu terdeteksi mengirim link grup lain*\n*kamu akan dikick dari grup Karena melanggar peraturan grup*' : '*📣 kamu admin, kamu aman*')

        if (isBotAdmin && chat.antiLink&& !isAdmin) {        
          await conn.sendMessage(m.chat, { delete: m.key })
          
          await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            return !1;
        } else if (!chat.antiLink && !isAdmin) {
            await conn.sendMessage(m.chat, { delete: m.key })
            await conn.sendMessage(m.chat, 'Yahaha, Moga Harimu Suram!')      
        }
    }
    return !0;
}