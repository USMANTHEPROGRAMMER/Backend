const express = require('express');
const app = express();
const PORT = 3000

console.log(app)

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});

app.get("/", (req, res) => {
    res.send('Hello! My first Express Server');
});

app.get("/about", (req, res) => {
    res.send("About Page Activated")
})

// app.get('/', (req, res) => {
//   res.send('Hello! My first Express Server');
// });

