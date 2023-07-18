import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import officeRoutes from './routes/officeRoutes';
import cors from 'cors';

const PORT = 3004;
const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (_req: Request, res: Response) => {
  res.send('API is running');
});

app.use('/', officeRoutes);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
