const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('BYE World!'));
=======
app.get('/', (req, res) => res.send('Bye World!'));
>>>>>>> a47d8266787945a8c2b99b3d347d3131a6bb7e73

app.listen(port);
console.log(`App running on http://localhost:${port}`);
