import axios from 'axios'
import fetch from 'node-fetch'
const { Gemini } = (await import('../scraper/gemini.js'))

let handler = async (m, {conn, text, usedPrefix, command}) => {

let teks 
if (m.quoted) {
teks = m.quoted.text
} else if (text) {
teks = text
} else throw `[ invalid ]\n*gunakan command*:\n${usedPrefix+command} presiden Indonesia`

try {
await m.reply(wait)
let eng = await translate(text, 'en')
let result = await bard(eng[0])
let hasil = await translate(result, 'id')
await conn.sendThumb(m.chat, `\> ✨${hasil[0]}`, 'https://telegra.ph/file/b7464bac089ffbe6fee74.jpg', m)
} catch (e) {
throw eror
}

}
handler.help = handler.command = ['bard']
handler.tags = ['ai']
handler.limit = handler.register = true
export default handler

const gemini = new Gemini('__Secure-1PSID', 'g.a000ggg7UaDFPKPnY6WmTJom9i4DlrIDWRPsj_pN9VLOspqMT8JPhlvHqjvx5HEeH9D0RvIYNgACgYKAYUSAQASFQHGX2MionrncXAMZYpKZTz7vl7eTBoVAUF8yKqj3wN-gJVcJgIY-ukGvSSk0076');

async function bard(query) {
    try {
        const responseText = await gemini.question(query);
        return responseText.content;
    } catch (error) {
        console.error("An error occurred:", error.message);
        throw error;
    }
};

async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}