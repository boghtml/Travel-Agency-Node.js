// index.js

const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

// Використайте cors
app.use(cors());

app.use(express.json());

const countryRoutes = require('./routes/countryRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const tourRoutes = require('./routes/tourRoutes');
const customerRoutes = require('./routes/customerRoutes');
const discountRoutes = require('./routes/discountRoutes');
const saleRoutes = require('./routes/saleRoutes');

app.use('/api/countries', countryRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/sales', saleRoutes);


db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
