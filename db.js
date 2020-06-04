const { Pool } = require("pg");
const pool = new Pool({
	PGHOST: process.env.PGHOST,
	PGUSER: process.env.PGUSER,
	PGPASSWORD: process.env.PGPASSWORD,
	PGDATABASE: process.env.PGDATABASE,
	PGPORT: process.env.PGPORT,
});

module.exports = { query: (text, params) => pool.query(text, params) };
