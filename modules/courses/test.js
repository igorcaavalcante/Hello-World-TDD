const { Teacher } = require('../../models/teacher');
const { Course } = require('../../models/course');
const request = require('supertest');

describe('courses', () => {

    let server;

    const title = 'NodeJS';
    const workLoad = 50;
    const places = 20;
    let teacher;

    beforeEach(async () => {
        server = require('../../index');
        teacher = new Teacher({
            name: "Alex Max",
        });
        teacher = await teacher.save();
    });

    afterEach(async () => {
        await Teacher.deleteOne({});
        await Course.deleteOne({});
        await server.close();
    });

    it('shoud not create a course - title not provided', async () => {
        const res = await request(server).post('/api/courses').send({ workLoad, places, teacher: teacher.id });
        expect(res.status).toBe(400);
    });

    it('shoud not create a course - workLoad not provided', async () => {
        const res = await request(server).post('/api/courses').send({ title, places, teacher: teacher.id });
        expect(res.status).toBe(400);
    });

    it('shoud not create a course - teacher not provided', async () => {
        const res = await request(server).post('/api/courses').send({ title, workLoad, places });
        expect(res.status).toBe(400);
    });

    it('shoud not create a course - number of places not provided', async () => {
        const res = await request(server).post('/api/courses').send({ title, workLoad, teacher: teacher.id });
        expect(res.status).toBe(400);
    });

    it('shoud not create a course - teacher not found', async () => {
        teacher = "aaaa";
        const res = await request(server).post('/api/courses').send({ title, workLoad, places, teacher });
        expect(res.status).toBe(400);
    });

    it('shoud create a course - everything ok', async () => {
        const res = await request(server).post('/api/courses').send({ title, workLoad, places, teacher: teacher.id });
        expect(res.status).toBe(200);
    });

});
