const request = require('supertest');
const { Teacher } = require('../../models/teacher');

describe('teachers', () => {

    let server;

    let name = "João Maria"

    beforeEach(async () => {
        server = require('../../index');
    });

    afterEach(async () => {
        await Teacher.deleteOne({});
        await server.close();
    });

    it('shoud not create a teacher - name not provided', async () => {
        const res = await request(server).post('/api/teachers').send({ });
        expect(res.status).toBe(400);
    });

    it('shoud not create a teacher - name less than 5 characters', async () => {
        name = "Alex";
        const res = await request(server).post('/api/teachers').send({ name });
        expect(res.status).toBe(400);
    });

    it('shoud create a teacher - everything ok', async () => {
        const res = await request(server).post('/api/teachers').send({ name });
        expect(res.status).toBe(400);
    });

});
