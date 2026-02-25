import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("File:", __filename);
console.log("Directory:", __dirname);

import{add, subtract, multiply} from './math.js';

console.log("Add:", add(5, 3));
console.log("Subtract:", subtract(10, 4));
console.log("Multiply:", multiply(6, 7));

import os from 'os';

console.log("os:",os.type());
console.log ("Architecture:", os.arch());
console.log("Total Memory:",Math.round(os.totalmem() / (1024 /1024)) + " MB");
console.log("Free Memory:", Math.round(os.freemem() / (1024 /1024)) + " MB");

import fs from 'fs'; 
fs.writeFileSync("log.txt","Node.js homework completed successfully!");

const content = fs.readFileSync("log.txt", "utf8");
console.log("File Content:", content);

import chalk from "chalk";

console.log(chalk.green("✓ Success"));
console.log(chalk.yellow("⚠ Warning"));
console.log(chalk.red("✖ Error"));