/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import axios from 'axios'

let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args,
    text
}) => {
const id_voice = db.data.settings[conn.user.jid]

const apiKey = ['6cd01e18e00183cc9bf0a3d274b723c7']

let type = (args[0] || '').toLowerCase()
switch (type) {
case 'setmodel':
let list_v = [
'eleven_monolingual_v1',
'eleven_multilingual_v2'
]
let listM = list_v.map((item, index) => ({
            model: item
        }));
if (!args[1]) return m.reply('Select modelV: ' + listM.map((item, index) => `\n\n*${index + 1}.* ${item.model}`).join("\n"))
  let outing = listM[args[1] - 1].model
  id_voice.model_voice = outing
  m.reply(`*Success change model_voice: ${outing}*`)
               
break 
case 'setid':
    let { data } = await axios.get("https://api.elevenlabs.io/v1/voices")
    let listModel = data.voices
    let list = listModel.map((item, index) => ({
            voiceId: item.voice_id,
            name: item.name
        }));
        
       if (!args[1]) return m.reply('Select id: ' + list.map((item, index) => `*${index + 1}.* ${item.name}`).join("\n"))
            let out = list[args[1] - 1].voiceId
            id_voice.id_voice = out
             m.reply(`*Success change id_voice: ${out}*`)
break
default:
if (!text) return m.reply('[❗] invalid text\n/speech halo bang')
        try {
        conn.sendMessage(m.chat, {react: {text: '🕛', key: m.key}})
        
    const options = {
  method: 'POST',
  headers: {'xi-api-key': await pickRandom(apiKey),'Content-Type': 'application/json'},
responseType: "arraybuffer",
  data: {"model_id": `${id_voice.model_voice || 'eleven_monolingual_v1'}`,
  "text": text,
  "voice_settings": {
  "similarity_boost": 1,
  "stability":1,
  "style":1,
  "use_speaker_boost":true
  }}
};
const response = await axios(`https://api.elevenlabs.io/v1/text-to-speech/${id_voice.id_voice || 'MF3mGyEYCl7XYWbV9V6O'}?optimize_streaming_latency=4&output_format=mp3_44100_96`, options)

let audio = {
    audio: response.data,
    mimetype: 'audio/mp4',
    ptt: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: 'SPEECH VOICE',
        body: '',
        sourceUrl: '',
        thumbnail: await (await conn.getFile('https://telegra.ph/file/d088e696314f56d29e60c.jpg')).data,
        renderLargerThumbnail: true
      }
    }
  };

  conn.sendMessage(m.chat, audio, { quoted: m })
  conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
  } catch (e) {
  throw e
  conn.sendMessage(m.chat, {react: {text: '❗', key: m.key}})
  
  }
}
}
handler.help = ["setid","setmodel"].map(v => `speech ${v}`)
handler.tags = ["speech","ai"]
handler.command = /^(spe(ak|ech)?)$/i
handler.premium = true 
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}