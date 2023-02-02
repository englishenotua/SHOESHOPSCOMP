import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './Dataimport.js';

dotenv.config();
connectDatabase();
const app = express();

//API
app.use('/api/import', ImportData);

app.get('/', (req, res) => {
  res.send('API is Running....');
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
