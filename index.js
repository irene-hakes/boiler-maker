const app = require('./server')
const PORT = 1337

app.listen(PORT, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${PORT}`);
});
