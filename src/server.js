const express = require("express");

const app = express();

import Routes from './routes/route.js';

app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/', Routes);

const PORT = process.env.PORT || 8080; // port at which server listening



app.listen(
  PORT,()=>{
    console.log(`server started at port ${PORT}`)
  }
);
