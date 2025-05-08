// Src by vint

const express = require('express');
const path = require('path');
const fa = require('fa');
const fs = require('fs');
const app = express();

const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/ru', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'ru.html'));
});

app.get('/en', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'en.html'));
});

app.get('/download_ru', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'ru_download.html'));
});

app.get('/download_en', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'en_download.html'));
});

app.listen(config.port, () => {
  console.log(`SteelBrawl сайт запущен! ${config.link}:${config.port}`);
  console.log(`сурс и запуск от винта пон`);
});