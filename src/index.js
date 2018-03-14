import express from 'express';

import middlewares from '../config/middleware';
// import constants from '../config/constants';

import './day3';

const app = express();

middlewares(app);

// app.listen(constants.PORT, err => {
//   if (err) {
//     throw err;
//   }

//   console.log(`server is running on port ${constants.PORT}`);
// });
