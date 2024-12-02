let baileys = (await import("@adiwajshing/baileys")).default
let { useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidNormalizedUser, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = baileys
import { Boom } from "@hapi/boom"
import NodeCache from "node-cache"
import Pino from "pino"
import { makeWASocket } from '../lib/simple.js'
import fs from 'fs'

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {

let conns = global.conn
let user = global.db.data.users[m.sender]

    let authFile = 'plugins/jadibot/'+m.sender.split("@")[0]
    let isInit = !fs.existsSync(authFile)
    let { state, saveCreds} = await useMultiFileAuthState(authFile)
    let msgRetryCounterCache = new NodeCache() 
    
    const config = {
    logger: Pino({ level: "fatal" }).child({ level: "fatal" }),
    printQRInTerminal: false,
    mobile: false,
    auth: {
    creds: state.creds,
    keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
    },
    browser: ['Linux', 'Chrome', ''],
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined
    }
    conn = makeWASocket(config)
    let ev = conn.ev
    
     if (!conn.authState.creds.registered) {
      setTimeout(async () => {
         let phoneNumber = m.sender.split("@")[0]   
         let code = await conn.requestPairingCode(phoneNumber)
         let hasilcode = code?.match(/.{1,4}/g)?.join("-") || code
    let key = await conns.reply(m.chat, '*± C A R A  P A K A I*\n\nMasukan code dibawah ini untuk menjadi bot clone\n\n1. Klik titik tiga : di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomer telepon saja\n5. Masukan code di atas\n\n*⏱️ Code Expired 60 seconds*\n\n© Create by Bang syaii', m)
await conns.reply(m.chat, hasilcode, key)
      }, 3000)
   }
        
    async function connectionUpdate(update) {
    const { connection, lastDisconnect } = update
    console.log(update)
    if (connection == 'connecting') {
    console.log(connection)
    } else if (connection == 'open') {
    conns.reply(m.chat, `*[ CONNECTION SUCCESS ✅ ]*\n\nHai *@${m.sender.split("@")[0]}, Kini Anda menjadi bot clone dari Akiraa-Bot*\n\n*Ingat Hanya bot Clone, Jadi ada beberapa fitur yang tidak dapat di akses oleh pengguna bot clone*`, m)
    global.conns.push(conn)
    }
    if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    console.log(reloadHandler(true))
    }
   }

    reloadHandler = async function (restatConn) {
    let Handler = await import('../handler.js')
    let handler = await import('../handler.js')
    if (Object.keys(Handler || {}).length) handler = Handler
    if (restatConn) {
    try { conn.ws.close() } catch { }
    conn = {
      ...conn, ...makeWASocket(config)
     }
   }
   if (!isInit) {
     conn.ev.off('messages.upsert', conn.handler)
     conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
     conn.ev.off('connection.update', conn.connectionUpdate)
     conn.ev.off('creds.update', conn.credsUpdate)
   }

   conn.welcome = 'Hai, @user!\nSelamat datang di grup *@subject*\n\n@desc'
   conn.bye = 'Selamat tinggal @user!'
   conn.spromote = '@user sekarang admin!'
   conn.sdemote = '@user sekarang bukan admin!'
   conn.handler = handler.handler.bind(conn)
   conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
   conn.connectionUpdate = connectionUpdate.bind(conn)
   conn.credsUpdate = saveCreds.bind(conn)

   conn.ev.on('messages.upsert', conn.handler)
   conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
   conn.ev.on('connection.update', conn.connectionUpdate)
   conn.ev.on('creds.update', conn.credsUpdate)
   isInit = false
   return true
}
    reloadHandler()   
}
handler.help = ['jadibot *<number>*']
handler.tags = ['jadibot']
handler.command = /^jadibot$/i

export default handler