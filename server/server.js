const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const linkRoutes = require('./routes/link');
const cors = require('cors');


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth',authRoutes);
app.use('/api/links', linkRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
