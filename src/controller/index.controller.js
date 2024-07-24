const { Pool } = require('pg');
const {config} = require('dotenv');
config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

const getEstacionamiento = async(req, res) => {
    const response = await pool.query('SELECT * FROM estacionamiento ORDER BY CAST(substring(id_estacionamiento FROM \'[0-9]+\') AS INTEGER)');
    res.status(200).json(response.rows);
};

module.exports = {
    getEstacionamiento,
}