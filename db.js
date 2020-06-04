const { Pool } = require("pg");
const pool = new Pool({
	PGHOST: "dumbo.db.elephantsql.com",
	PGUSER: "fliermev",
	PGPASSWORD: "Y3FtjUt1qvL2fHW_4lY1E8ZedtexLdGF",
	PGDATABASE: "fliermev",
	PGPORT: 5432,
	// PGHOST: process.env.PGHOST,
	// PGUSER: process.env.PGUSER,
	// PGPASSWORD: process.env.PGPASSWORD,
	// PGDATABASE: process.env.PGDATABASE,
	// PGPORT: process.env.PGPORT,
});

module.exports = { query: (text, params) => pool.query(text, params) };
