const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const file = path.resolve('file', 'YuriyL2022_2.pdf');
const fileEn = path.resolve('file', 'YuriyL2022_2_eng.pdf');

router.get('/:lang', async (req, res) => {
	const lang = req.params['lang'];
	const load = lang === 'ukr' ? file : fileEn;
	console.log('lang', lang);
	if (fs.existsSync(load)) {
		return res.download(load, 'YuriyL.pdf');
	} else {
		return res.status(500).json({error: 'error download'});
	}
});
module.exports = router;
