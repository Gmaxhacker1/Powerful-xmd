/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, {text, args}) => {

  if (!args[0]) throw `Use example .simi halo`

  let api = await fetchJson(`https://simsimi.fun/api/v2/?mode=talk&lang=id&message=${text}&filter=false`)
  
  m.reply(api.success)
}
handler.command = ['simi']
handler.tags = ['main']
handler.help = ['simi']

export default handler