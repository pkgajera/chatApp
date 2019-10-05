const express = require('express');
const router = express.Router();

router.route('/',(req,res) => {
  res.send('server is up now')
});

module.exports = router;
