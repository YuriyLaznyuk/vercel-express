const express = require('express');
const app = express();
const product = require('./api/product');
require('dotenv').config();
const file = require('./api/file');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json());

app.use('/api/product', product);
app.use('/api/file', file);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
