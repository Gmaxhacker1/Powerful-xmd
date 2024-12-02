import axios from 'axios'

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    if (!text) return m.reply('> ✨Hallo ada yang bisa saya bantu?')
    try {
        const {
            key
        } = await conn.sendMessage(m.chat, {
            image: {
                url: 'https://telegra.ph/file/e628941df62f8d0f8c5aa.png'
            },
            caption: wait
        }, {
            quoted: fVerif,
            mentions: [m.sender]
        })
        const result = await gemini(text);

        await conn.delay(500)
        await conn.sendMessage(m.chat, {
            image: {
                url: 'https://telegra.ph/file/e628941df62f8d0f8c5aa.png'
            },
            caption:  `\`✨Gemini Ai\`\n\n${result.reply}`,
            edit: key
        }, {
            quoted: fVerif,
            mentions: [m.sender]
        })
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["gemini"]
handler.tags = ["ai"]
handler.command = /^(gemini(ai)?)$/i
handler.register = true
handler.premium = true

export default handler

async function gemini(txt) {
    try {
        var api = await axios.get(`https://hercai.onrender.com/gemini/hercai?question=${encodeURIComponent(txt)}`, {
            headers: {
                "content-type": "application/json",
            },
        })
        return api.data;
    } catch (e) {
    console.log(e)
}
}