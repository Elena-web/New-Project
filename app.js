import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Получаем путь к текущему файлу
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Основной маршрут
app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'index.html')); // Отправляем index.html из корня проекта
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
