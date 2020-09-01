const mongoose = require('mongoose');
const requireDir = require('require-dir');
const express = require('express');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
requireDir('./src/models');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require('./src/routes'));
app.listen(3001);