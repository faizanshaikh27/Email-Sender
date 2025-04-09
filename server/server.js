const express = require('express');
const cors = require('cors');
require('dotenv').config();

const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
