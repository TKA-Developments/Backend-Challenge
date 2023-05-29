import request from 'supertest';

import server from '../server';

afterAll(async () => {
    server.close();
});

// REPLACE WITH YOUR TESTS
describe('Test the /api path', () => {
    test('It should response the GET method', (done) => {
        request(server)
            .get('/api')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});