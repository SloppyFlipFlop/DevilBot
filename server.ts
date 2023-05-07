import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/redirect", (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    res.status(400).send("URL parameter is required");
    return;
  }

  res.redirect(targetUrl as string);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
