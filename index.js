const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk handle CORS (jika diperlukan)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Endpoint test
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "hello API" });
});

// Endpoint utama
app.get("/api/:date?", (req, res) => {
  let dateParam = req.params.date;
  
  // Handle empty date parameter (current time)
  if (!dateParam) {
    const now = new Date();
    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString()
    });
  }
  
  // Check if it's a Unix timestamp (number in string form)
  let date;
  if (/^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    date = new Date(dateParam);
  }
  
  // Validate date
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }
  
  // Successful response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});