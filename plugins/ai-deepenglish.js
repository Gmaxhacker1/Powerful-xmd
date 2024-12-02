/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

import { fetch } from 'undici';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    await m.reply(wait)
    try {
        let result = await gptDeepenglish(text)
        await m.reply(result.answer)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["deepenglish"]
handler.tags = ["ai"];
handler.command = /^(deepai|deepenglish)$/i
export default handler

/* New Line */
async function gptDeepenglish(input) {
    const messages = [
        { role: "assistant", content: "Kamu adalah asisten AI yang siap membantu segala hal." },
        { role: "user", content: input }
    ];

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: { Accept: "text/event-stream", "Content-Type": "application/json" },
            body: JSON.stringify({ messages })
        });

        return await response.json();
    } catch (error) {
        console.error("An error occurred during data fetching:", error);
        throw error;
    }
}