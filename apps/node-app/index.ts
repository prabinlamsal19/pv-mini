import express, {Request, Response} from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to the DOLBY Backend, the source of truth in Picovico system?`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`)
});
