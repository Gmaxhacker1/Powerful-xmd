import cron from 'node-cron';

export async function before(m) {
    let bot = db.data.settings[conn.user.jid]
        
if (new Date() - bot.resetTime < 86400000) return 
        cron.schedule('0 52 09 * * *', async () => {
                
            let data = Object.keys(db.data.users);
            let grup = Object.keys(db.data.chats).filter(v => v.endsWith('@g.us'));

            let user = db.data.users;
            
            for (let usr of data) {
                if (user[usr].limit < 7) {
                    user[usr].limit = 250;
                }
            }
         for (let gc of grup) {
                await conn.reply(gc, '\`\`\`Sistem telah mereset limit semua user yang mempunyai nilai dibawah 7\`\`\`', null);
await conn.delay(5000)
            }
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        });
         bot.resetTime = new Date * 1
}