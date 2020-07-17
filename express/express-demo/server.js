const express = require('express');

const app = express();

let students = [
    'Emad Hanna',
    'Neil Yuen',
    'Dathan Wong'
];

// express middleware (necessary to be above any app requests)
app.use(express.json());

// similar to path in python path("/" views.my_func)
// req == request, res == response
app.get('/', (req, res) => {
    console.log(req);
    res.json({students});
    });

//What if I wanted to get a student by id? Here's How:
app.get('/:studentId', (req, res) => {
    res.json({
        student:  students[req.params.studentId]
    });
});

// what if you wanted to delete a student by id? Here's How:
app.delete('/:studentId' , (req, res) =>{
    students = students.filter((_, idx) => idx !== +req.params.studentId)
    console.log(students);
    res.json({
        message: 'Success'
    });
})

//what if I wanted to add a student to the database? Here's How:
app.post('/', (req, res) => {
    console.log(req.body);

    students.push(req.body.name);

    console.log(students);

    res.json({
        student: req.body.name,
        message: 'Success'
    });
});

//What if I want to update the object? Here's How:
app.put('/:studentId', (req, res) => {
    students[req.params.studentId] = req.body.name;
    
    console.log(students);
    res.json({
        //we can do student without colon, cause key and value are equal
        student: students[req.params.studentId],
        message: 'Success'
    })
})


app.listen(8000, () => console.log('listening on 8000!'));