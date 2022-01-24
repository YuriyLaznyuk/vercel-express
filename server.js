const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const file = path.resolve('file', 'YuriyL_12_eng.pdf');

const PORT = process.env.PORT || 2424;

app.get('/', (req, res) => {
	res.json({message: 'server for vercel'});
});

app.get('/api/file', (req, res) => {
	if (fs.existsSync(file)) {
		return res.download(file, 'YuriyL_eng.pdf');
	} else {
		return res.status(500).json({error: 'error download'});
	}
});

app.listen(PORT, () => {
	console.log('server port: ', PORT);
});
