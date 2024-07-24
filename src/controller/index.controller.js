const { Pool } = require('pg');
const {config} = require('dotenv');
config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

const getEstacionamiento = async(req, res) => {
    const response = await pool.query('SELECT * FROM estacionamiento');
    res.status(200).json(response.rows);
};

module.exports = {
    getEstacionamiento,
}