app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;

  let date;
  if (!dateParam) {
    // Jika parameter tidak ada, pakai waktu sekarang
    date = new Date();
  } else if (/^\d+$/.test(dateParam)) {
    // Jika param hanya angka, artinya unix timestamp (milidetik)
    date = new Date(parseInt(dateParam));
  } else {
    // Jika param berbentuk string tanggal (ISO format)
    date = new Date(dateParam);
  }

  // Cek validitas date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});
