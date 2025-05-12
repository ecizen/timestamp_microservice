const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const timestampRoute = require('./routes/timestamp');

app.use('/api', timestampRoute); // /api prefix sudah di sini

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
