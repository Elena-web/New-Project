import express from 'express';
import pg from 'pg'; // Импортируйте весь пакет как default

const { Client } = pg;
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const client = new Client({
  host: 'dpg-cslrr923esus73ca6v8g-a.oregon-postgres.render.com',
  port: 5432,
  user: 'twitter_production_uqrx_user',
  password: '2m5p8ukl1VteR5yiYrDRtPS1jm3MUDse',
  database: 'twitter_production_uqrx',
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Connection error', err.stack));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
