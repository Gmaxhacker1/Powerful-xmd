Hai kamu iser nightmare Md 

📌 Script ini selalu Up to Date
📌 Script ini menggunakan acc ip untuk menghindari pencurian atau penjualan secara ilegal
📌 Hargai creator sebisa kalian apa susahnya menghargai doang
📌 Kalai menjumpai script dengan owner yang asing segera lapor ke Owner

Owner:
wa.me/6282285357346 (tio)

/**•───── MERRY ✧ MD ─────• **/
```Up to Date 1.2.4```

Ket: 

[ System ] (plugins dengan awalan _)

[ *new* ]

```added```

_File_
- [ Simple.js ] function send list button & image (sendListButton && sendListImageButton)
- [ Handler.js ] joinonly & premiumonly (pemindahan dengan sebelumnya menggunakan plugins)
- 
_Plugins_
- [ Internet ] iplook (melihat lokasi IP)
- [ Maker ] nulis (menulis menggunakan bot)
- [ System ] template response (penambalan respon button)
- [ Own ] set template (penambalan opsi select template dalam button)
- [ Main ] main menu (+button template)
- [ Own ] fixdb (penambalan jika idgc mengalami eror)
- [ Download ] capcut (downloader video capcut)
- ...Coming soon

/**•───── MERRY ✧ MD ─────• **/
const list = {
    title: "Klik Disini!",
    sections: [{
        title: "Menu",
        highlight_label: "Recommended",
        rows: [{
                title: "menu list",
                description: "menampilkan menu list",
                id: ".menu",
            },
            {
                title: "menu all",
                description: "tampilkan semua menu",
                id: ".menu all",
            },
        ],
    }, ],
};

let quick = [
{
                "name": "cta_copy",
                "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\".os\"}"
              }
]

#Example serialize [ list button ] {
conn.sendListButton(m.chat, "List menu", list, footer)
} 

#Example serialize [ list button dg foto ] {
conn.sendListImageButton(m.chat, "List menu", list, footer, thumbnail)
}

#Example serialize [ url button ] {
conn.sendUrlButton(m.chat, "List menu", quick, footer)
}

#Example serialize [ url button dg foto ] {
conn.sendUrlImageButton(m.chat, "List menu", quick, footer, thumbnail)
}

#Example serialize [ foto dg list button & url button ] {
conn.sendListImageButton(m.chat, "List menu", quick, footer, thumbnail, quick)
}

#Example serialize [  list button & url button ] {
conn.sendListButton(m.chat, "List menu", quick, footer, quick)
}