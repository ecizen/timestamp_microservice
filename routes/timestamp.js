const express = require('express');
const router = express.Router();

router.get('/:date', (req, res) => {
  const date = req.params.date || '';
  let parsedDate;

  if (!date) {
    parsedDate = new Date();
  } else if (/^\d+$/.test(date)) {
    parsedDate = new Date(parseInt(date));
  } else {
    parsedDate = new Date(date);
  }

  if (parsedDate.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

module.exports = router;
