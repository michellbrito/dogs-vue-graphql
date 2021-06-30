const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});