import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

export default app; // Asegúrate de tener esta línea de exportación predeterminada
