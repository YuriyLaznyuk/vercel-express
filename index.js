// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');
// require('dotenv').config();
//
// const file = path.resolve('file', 'YuriyL_12_eng.pdf');
//
// const PORT = process.env.PORT || 2424;
// app.use(express.json({extended: false}));
// const user = require('./api/user');
//
// // app.get('/', (req, res) => {
// // 	res.json({message: 'server for vercel'});
// // });
// app.use('/api/user', user);
// app.get('/api/file', (req, res) => {
// 	if (fs.existsSync(file)) {
// 		return res.download(file, 'YuriyL_eng.pdf');
// 	} else {
// 		return res.status(500).json({error: 'error download'});
// 	}
// });
//
// app.listen(PORT, () => {
// 	console.log('server port: ', PORT);
// });
const express = require('express');
const app = express();
const product = require('./api/product');
const file = require('./api/file');

app.use(express.json({extended: false}));

app.use('/api/product', product);
app.use('/api/file', file);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
