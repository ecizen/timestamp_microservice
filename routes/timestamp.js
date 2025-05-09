const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

router.get('/:date_string', (req, res) => {
  let date = new Date(req.params.date_string);

  if (date.toString() === "Invalid Date") {
    const timestamp = parseInt(req.params.date_string);
    if (!isNaN(timestamp)) {
      date = new Date(timestamp);
    }
  }

  if (date.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: date.getTime(),
        utc: date.toUTCString()
    });
  }
});

module.exports = router;
