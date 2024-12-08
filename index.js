import './config.js';
import './function/settings/settings.js';
import { fetchLatestBaileysVersion } from '@adiwajshing/baileys';
import cfont from 'cfonts';
import { spawn } from 'child_process';
import { createInterface } from 'readline';
import { promises as fsPromises } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sizeFormatter } from 'human-readable';
import axios from 'axios';
// Fixing cheerio import issue by using a named import.
import * as cheerio from 'cheerio';
import os from 'os';
import moment from 'moment-timezone';
import fs from 'fs';
import yargs from 'yargs';
import express from 'express';
import chalk from 'chalk';

const formatSize = sizeFormatter({
  std: 'JEDEC',
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

const { say } = cfont;
const { tz } = moment;
const app = express();
const port = process.env.PORT || 8079;
const time = tz('Asia/Jakarta').format('HH:mm:ss');
const currentFilePath = fileURLToPath(import.meta.url);

say('Bot Dashboard', {
  font: 'simpleBlock',
  align: 'center',
  gradient: ['yellow', 'cyan', 'red'],
  transitionGradient: true,
});

say('by Bot Owner', {
  font: 'tiny',
  align: 'center',
  colors: ['white'],
});

app.listen(port, () => {
  console.log(chalk.green(`⚡ Port ${port} is now open`));
});

const folderPath = './tmp';
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(chalk.green('Tmp folder created successfully.'));
}

let isRunning = false;

const rl = createInterface(process.stdin, process.stdout);

async function start(file) {
  if (isRunning) return;
  isRunning = true;
  const args = [join(dirname(currentFilePath), file), ...process.argv.slice(2)];
  const p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  });

  p.on('message', (data) => {
    console.log(chalk.magenta('[ ✅ Accepted  ]', data));
    switch (data) {
      case 'reset':
        p.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });

  p.on('exit', (code) => {
    isRunning = false;
    console.error('[❗] Exited with code:', code);
    if (code !== 0) return start(file);
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      start(file);
    });
  });

  const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
  if (!opts['test']) {
    if (!rl.listenerCount('line')) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }

  const packageJsonPath = join(dirname(currentFilePath), './package.json');
  const pluginsFolder = join(dirname(currentFilePath), 'plugins');
  const totalFoldersAndFiles = await getTotalFoldersAndFiles(pluginsFolder);

  fs.readdir(pluginsFolder, async (err, files) => {
    if (err) {
      console.error(chalk.red(`Plugins Folder Error: ${err}`));
      return;
    }

    try {
      const { version } = await fetchLatestBaileysVersion();
      console.log(chalk.bgGreen(chalk.white(`Baileys Library Version ${version} is installed`)));
    } catch (e) {
      console.error(chalk.bgRed(chalk.white('Baileys Library is not installed')));
    }
  });

  try {
    const packageJsonData = await fsPromises.readFile(packageJsonPath, 'utf-8');
    const packageJsonObj = JSON.parse(packageJsonData);
    const { data } = await axios.get('https://api.ipify.org');
    const ramInGB = os.totalmem() / (1024 * 1024 * 1024);
    const freeRamInGB = os.freemem() / (1024 * 1024 * 1024);

    console.log(`╭──⎔ System Dashboard ⎔
┣ Bot Name: ${chalk.white(packageJsonObj.name)}
┣ Version: ${chalk.white(packageJsonObj.version)}
┣ Description: ${chalk.white(packageJsonObj.description)}
┣ OS: ${chalk.white(os.type())}
┣ Memory: ${chalk.white(freeRamInGB.toFixed(2) + ' / ' + ramInGB.toFixed(2))}
┣ IP: ${chalk.red(data)}
┣ Owner: ${chalk.white(global.info.nomerown)}
╰──⎔⎔
╭──⎔⎔ ${chalk.bgCyan(chalk.white('Bot Specifications'))} ⎔⎔
┣ Features: ${chalk.white(totalFoldersAndFiles.files)} Features
╰──⎔⎔ 

⎔──⎔⎔ Creator: ${chalk.bold.cyan('Tio')} ⎔⎔──⎔`);
  } catch (err) {
    console.error(chalk.red(`Unable to read package.json file: ${err}`));
  }

  setInterval(() => {}, 1000);
}

async function getTotalFoldersAndFiles(folderPath) {
  const entries = await fsPromises.readdir(folderPath, { withFileTypes: true });
  const folders = entries.filter((entry) => entry.isDirectory()).length;
  const files = entries.filter((entry) => entry.isFile()).length;

  return { folders, files };
}

// Start the system
start('main.js');
