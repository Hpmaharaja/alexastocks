var googleStocks = require('google-stocks');

googleStocks(['AAPL'], function(error, data) {
  console.log(data[0]['l']);
  console.log(typeof(data));
  console.log(typeof(data[0]['l']));
});

