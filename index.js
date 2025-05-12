const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date", (req, res) => {
  let rawDate = new Date(req.params.date);

  if (rawDate.toString() === "Invalid Date") {
    rawDate = new Date(parseInt(req.params.date));
  }

  if (isNaN(rawDate)) {
    return res.status(400).json({ error: "Invalid Date" });
  }
  return res.status(200).json({
    unix: rawDate.getTime(),
    utc: rawDate.toUTCString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
