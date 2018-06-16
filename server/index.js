const express = require ('express');
const parser = require('body-parser');
const cors = require('cors');

const { router } = require('./router');
require('./../db');

const PORT = 3000;
const App = express();
const corsOptions = {
  origin: "https://amazonaws.com", 
  optionsSuccessStatus: 200
}

App.use(cors(corsOptions));
App.use(parser.json());
App.use(parser.urlencoded({ extended: true }));

App.use('/api', router);

App.listen(PORT, () => {
  console.log('Server is live and listening on port ', PORT);
});

module.exports = {
  App: App
};