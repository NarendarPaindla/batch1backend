require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const authRoutes=require('./routes/authRoutes');
const app = express();

app.use(express.json());
// Health check
app.get('/api/ping', (req, res) => res.send('pong'));
app.use('/api/auth',authRoutes);






const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true })  
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
  });
