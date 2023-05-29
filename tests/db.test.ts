import pool from '../db';

// CURRENTLY FAILS THE TEST, SHOULD PASS TO ENSURE DB CONNECTION
describe('PostgreSQL Connection', () => {
    it('should connect to PostgreSQL', async () => {
      const client = await pool.connect();
      expect(client).toBeTruthy();
      client.release();
      pool.end();
    });
  });