const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const timestampRoute = require('./routes/timestamp')

app.use(`/api/`, timestampRoute)

app.listen(PORT, () => {
  console.log(`Timestamp Microservice is running on port ${PORT}`);
});
