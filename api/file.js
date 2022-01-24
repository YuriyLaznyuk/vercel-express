const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const file = path.resolve('file', 'YuriyL_12.pdf');

router.get('/', (req, res) => {
	if (fs.existsSync(file)) {
		return res.download(file, 'YuriyL.pdf');
	} else {
		return res.status(500).json({error: 'error download'});
	}
});
module.exports = router;
