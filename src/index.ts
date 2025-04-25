import express from 'express';
import cors from 'cors';
import { connectToDatabase } from '../src/dbConnection/dbConnection';
import { PORT } from './config';
import todoRoutes from './routes/todo.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
