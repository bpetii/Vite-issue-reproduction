import express from 'express';

const app = express();
app.use(express.static('www/'));

app.listen(3000, () => {
  console.log("listening at 3000");
});