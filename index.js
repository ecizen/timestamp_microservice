const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const timestampRoute = require('./routes/timestamp');

// tidak pakai '/api' di sini
app.use(timestampRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
