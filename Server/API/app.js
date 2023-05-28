const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: 'domain_name',
//     credentials: true,
//   })
// );

app.use(router);


app.listen(3000, () => {
  console.log('API listening on port 3000');
});
