const express = require('express');
const router = express.Router();

router.get('/:date?', (req, res) => {
    const dateParam = req.params.date;
    let parsedDate;

    if (!dateParam) {
        parsedDate = new Date();
    } else if (/^\d+$/.test(dateParam)) {
        parsedDate = new Date(parseInt(dateParam));
    } else {
        parsedDate = new Date(dateParam);
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
