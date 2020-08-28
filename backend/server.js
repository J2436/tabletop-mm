const express = require('express');

const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./utils/config');
const groupsRouter = require('./controllers/groups');
const playersRouter = require('./controllers/players');
const loginRouter = require('./controllers/login');
const mailRouter = require('./controllers/mail');
const TokenChecker = require('./middleware/TokenChecker');

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to MongoDB'))
  .catch((error) => console.error(`error connecting to server ${error.message}`));

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(morgan('tiny'));
app.use('/login', loginRouter);
app.use(TokenChecker);
app.use('/players', playersRouter);
app.use('/groups', groupsRouter);
app.use('/mail', mailRouter);
app.listen(config.PORT);
console.log(`Server listening on ${config.PORT}`);
