import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем путь к текущему файлу
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = 3000;

// Указываем, что статические файлы находятся в папке public
app.use(express.static(path.join(dirname, 'public')));

// Определение маршрута для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
