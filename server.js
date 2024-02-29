const express = require('express');
const path = require('path');

const app = express();

// Настройка пути к папке build
const buildPath = path.join(__dirname, 'build');

// Использование статических файлов из папки build
app.use(express.static(buildPath));

// Отправка index.html для всех запросов, кроме API-запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Запуск сервера на порте 3000
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000!');
});