import { Pool } from 'pg';

// REPLACE WITH YOUR CREDENTIALS
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // default PostgreSQL port
});

export default pool;