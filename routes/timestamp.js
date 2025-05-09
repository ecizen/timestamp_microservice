const express = require('express');
const router = express.Router();

router.get('/:date', (req, res) => {
  let { date } = req.params;
  let parsedDate;

  // Jika tidak ada parameter, gunakan waktu saat ini
  if (!date) {
    parsedDate = new Date();
  } else {
    // Jika berupa angka dan bukan ISO string, parse sebagai Unix Timestamp
    if (!isNaN(date)) {
      parsedDate = new Date(parseInt(date));
    } else {
      parsedDate = new Date(date);
    }
  }

  // Cek validitas
  if (parsedDate.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  // Respons sesuai FCC test
  return res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

module.exports = router;
