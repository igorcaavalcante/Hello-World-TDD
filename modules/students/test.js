const request = require('supertest');
const { Student } = require('../../models/student');

describe('students', () => {

    let server;

    let name = "João José"
    const birth = new Date();

    beforeEach(async () => {
        server = require('../../index');
    });

    afterEach(async () => {
        await Student.deleteOne({});
        await server.close();
    });

    it('shoud not create a student - name not provided', async () => {
        const res = await request(server).post('/api/students').send({ birth });
        expect(res.status).toBe(400);
    });

    it('shoud not create a student - birth not provided', async () => {
        const res = await request(server).post('/api/students').send({ name });
        expect(res.status).toBe(400);
    });

    it('shoud not create a student - name less than 5 characters', async () => {
        name = "Tex";
        const res = await request(server).post('/api/students').send({ name, birth });
        expect(res.status).toBe(400);
    });

    it('shoud create a student - everything ok', async () => {
        const res = await request(server).post('/api/students').send({ name, birth });
        expect(res.status).toBe(400);
    });

});
