const students = require('./students');

function displayStudents() {
    console.log("--- Student List ---");
    students.forEach(student => {
        console.log(`ID: ${student.id} | Name: ${student.name} | Dept: ${student.department}`);
    });
}

displayStudents();