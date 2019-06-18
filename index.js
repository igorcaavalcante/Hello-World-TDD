const express = require('express');
const app = express();

app.use(express.json());

const coursesRouter = require('./modules/courses/index');
const teachersRouter = require('./modules/teachers/index');
const studentsRouter = require('./modules/students/index');

app.use('/api/courses', coursesRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/students', studentsRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Ouvindo na porta ${PORT}`));