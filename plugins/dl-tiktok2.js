/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    let input = `[!] *wrong input*
	
Ex : ${usedPrefix + command} https://vm.tiktok.com/ZSL7p9jRV/`
    if (!text) return m.reply(input)
    conn.sendMessage(m.chat, {
        react: {
            text: '⏱️',
            key: m.key
        }
    })
    try {
        const data = await tiktok(text)
        let stats = data.stats
        if (data.video) {
            let cap = `${data.title}

❤: ${stats.likeCount}
🔁: ${stats.shareCount}
▶️: ${stats.playCount}
💬: ${stats.commentCount}
📩: ${stats.saveCount}`
            conn.sendFile(m.chat, data.video.noWatermark, '', cap, m)
            await conn.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            })
        } else if (data.images) {
            let caption = `${data.title}

❤: ${stats.likeCount}
🔁: ${stats.shareCount}
▶️: ${stats.playCount}
💬: ${stats.commentCount}
📩: ${stats.saveCount}`
            for (let result of data.images) {
                conn.sendMessage(m.sender, {
                    image: {
                        url: result.url
                    },
                    caption: caption
                }, {
                    quoted: m
                })
            }
            conn.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            })
        }
    } catch (e) {
        throw eror
    }
}

handler.help = ['tiktok2 <link>']
handler.tags = ['downloader']
handler.command = /^(tiktok2|tt2|ttdl2)$/i
handler.limit = true
handler.register = true

export default handler

async function tiktok(url) {
    const ngaji = await axios.get('https://api.tiklydown.eu.org/api/download?url=' +
        encodeURIComponent(url)
    )
    return ngaji.data
}