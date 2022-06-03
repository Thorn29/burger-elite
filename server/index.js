const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config({ path: path.join(__dirname, '../config/dev.env')});

const app = express();
app.use(cors());
const userRouter = require('./routers/users');
const foodRouter = require('./routers/food');

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(userRouter);
app.use(foodRouter);
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Now listening on port ${port}...`);
})
