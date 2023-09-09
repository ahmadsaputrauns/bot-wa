import os from 'os';
import cfonts from "cfonts";
import yargs from "yargs";
import express from 'express';
import { spawn } from 'child_process';
import path from 'path';
import { join, dirname } from 'path';
import fs from 'fs';
import { createInterface } from "readline";
import { promises as fsPromises } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(chalk.green(`✓ Port ${port} is open`));
});

let isRunning = false;

const {
    say
} = cfonts;

const rl = createInterface(process.stdin, process.stdout)

async function start(file) {
    if (isRunning) return;
  isRunning = true;

  const currentFilePath = new URL(import.meta.url).pathname;
  const args = [path.join(path.dirname(currentFilePath), file), ...process.argv.slice(2)];
  const p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  });
    p.on("message", data => {
        console.log(chalk.magenta("[ ✅ RECEIVED ]", data))
        switch (data) {
            case "reset":
                p.process.kill()
                isRunning = false
                start.apply(this, arguments)
                break
            case "uptime":
                p.send(process.uptime())
                break
        }
    })
    p.on("exit", (_, code) => {
        isRunning = false
        console.error("[❗] Exited with code :", code)
        if (code !== 0) return start(file)
        watchFile(args[0], () => {
            unwatchFile(args[0])
            start(file)
        })
    })
    let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
    if (!opts["test"])
        if (!rl.listenerCount()) rl.on("line", line => {
            p.emit("message", line.trim())
        })
    // console.log(p)

  const pluginsFolder = path.join(path.dirname(currentFilePath), 'plugins');

  fs.readdir(pluginsFolder, async (err, files) => {
    if (err) {
      console.error(chalk.red(`Folder Plugins Error: ${err}`));
      return;
    }
    console.log(chalk.yellow(`Ditemukan ${files.length} File Di Folder Plugins`));

    try {
      const { default: baileys } = await import('@adiwajshing/baileys');
      const version = (await baileys.fetchLatestBaileysVersion()).version;
      console.log(chalk.yellow(`Library Baileys Versi ${version} Telah Terinstall`));
    } catch (e) {
      console.error(chalk.red('Library Baileys Tidak Terinstall'));
    }
  });

  console.log(chalk.yellow(`${os.type()}, ${os.release()} - ${os.arch()}`));
  const ramInGB = os.totalmem() / (1024 * 1024 * 1024);
  console.log(chalk.yellow(`Total RAM: ${ramInGB.toFixed(2)} GB`));
  const freeRamInGB = os.freemem() / (1024 * 1024 * 1024);
  console.log(chalk.yellow(`RAM Tersisa: ${freeRamInGB.toFixed(2)} GB`));
  console.log(chalk.yellow(`Script by Zeltoria`));

  const packageJsonPath = path.join(path.dirname(currentFilePath), './package.json');
  try {
    const packageJsonData = await fsPromises.readFile(packageJsonPath, 'utf-8');
    const packageJsonObj = JSON.parse(packageJsonData);
    console.log(chalk.blue.bold(`\nInformasi Package`));
    console.log(chalk.cyan(`Nama: ${packageJsonObj.name}`));
    console.log(chalk.cyan(`Version: ${packageJsonObj.version}`));
    console.log(chalk.cyan(`Description: ${packageJsonObj.description}`));
    console.log(chalk.cyan(`Author: Zeltoria`));
  } catch (err) {
    console.error(chalk.red(`Tidak Bisa Membaca File package.json: ${err}`));
  }

  const totalFoldersAndFiles = await getTotalFoldersAndFiles(pluginsFolder);
  console.log(chalk.blue.bold(`\nTotal Folder Dan Files Di "plugins"`));
  console.log(chalk.cyan(`Total Folders: ${totalFoldersAndFiles.folders}`));
  console.log(chalk.cyan(`Total Files: ${totalFoldersAndFiles.files}`));

  console.log(chalk.blue.bold(`\nCurrent Time`));
  const currentTime = new Date().toLocaleString();
  console.log(chalk.cyan(`${currentTime}`));

  setInterval(() => {}, 1000);
}

function getTotalFoldersAndFiles(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        let folders = 0;
        let filesCount = 0;
        files.forEach((file) => {
          const filePath = path.join(folderPath, file);
          if (fs.statSync(filePath).isDirectory()) {
            folders++;
          } else {
            filesCount++;
          }
        });
        resolve({ folders, files: filesCount });
      }
    });
  });
}

start('main.js');
