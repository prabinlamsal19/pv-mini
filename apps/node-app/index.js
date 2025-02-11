import express from 'express';
// import Pool from 'pg';
const app = express();

app.get('/node-app', (req, res) => {
  res.send(`Hello from the Node.js Server at container port ${PORT} and host port 3007?`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Database connection error:', err);
//   } else {
//     console.log('Database connected:', res.rows[0]);
//   }
// });
