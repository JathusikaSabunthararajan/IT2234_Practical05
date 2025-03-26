const express = require('express');
const app = express();
const port = 3000;

// Array of student JSON details
let students = [
    { regno: '2021/ict/01', name: 'Kamal', gender: 'male', age: 24, Course: 'IT' },
    { regno: '2021/ict/15', name: 'Reenu', gender: 'female', age: 23, Course: 'IT' },
    { regno: '2021/ict/21', name: 'Mansoor', gender: 'male', age: 22, Course: 'IT' },
    { regno: '2021/ict/17', name: 'Kaveeena', gender: 'female', age: 24, Course: 'AMC' }
];

// Basic route
app.get('/stu', (req, res) => {
    res.send("Students");
});

// Route to get a student by registration number
app.get('/stu/:regno', (req, res) => {
    const regno = req.params.regno;
    const result = students.find(student => student.regno === regno);

    if (result) {
        res.send(result);
    } else {
        res.status(404).send("Student not found");
    }
});

// Route to filter students by gender
app.get('/stu/gender/:gen', (req, res) => {
    const gen = req.params.gen;
    const result = students.filter(student => student.gender === gen);

    if (result.length > 0) {
        res.send(result);
    } else {
        res.status(404).send("No students found with this gender");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});