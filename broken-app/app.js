const express = require('express');
let axios = require('axios');
const ExpressError = require("./expressError")
var app = express();

app.get('/', function (req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
    // return res.send('my message')

  }
});

app.use(function (req, res, next) {
  const err = new ExpressError('not found', 404)
  return next(err);
})

app.use(function (err, req, res, next) {
  let status = err.status || 500

  return res.status(status).json({
    status,
    message: err.message
  })
})

app.listen(3000);
