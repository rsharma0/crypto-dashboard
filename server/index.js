const express = require('express');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/portfolio', portfolioRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
