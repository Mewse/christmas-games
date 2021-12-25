const express = require('express');
const app = express();

app.use(express.static('build'));

app.use("/", (response, request) => {
  response.writeHead(301,
    {Location: '/#/'}
  );
  response.end();
})

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});