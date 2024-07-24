require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const PORT = process.env.PORT || 3000; // Port number

// CORS
app.use(cors());

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
