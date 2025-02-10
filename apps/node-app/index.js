import express from 'express';
const app = express();

app.get('/node-app', (req, res) => {
  res.send(`Hello from the Node.js Server at container port ${PORT} and host port 3007?`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
