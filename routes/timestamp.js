const express = require('express');
const router = express.Router();

// route untuk tanggal atau timestamp
router.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;
  let parsedDate;

  if (!dateParam) {
    parsedDate = new Date();
  } else if (/^\d+$/.test(dateParam)) {
    // angka dianggap sebagai Unix timestamp dalam milidetik
    parsedDate = new Date(Number(dateParam));
  } else {
    parsedDate = new Date(dateParam);
  }

  if (parsedDate.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

module.exports = router;
