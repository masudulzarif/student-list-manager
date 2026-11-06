// Student List Manager for Browser Console
let students = [
    { id: 1, name: "Masudul Zarif", roll: 101, marks: 85, status: "Pass" },
    { id: 2, name: "Rahim Ahmed", roll: 102, marks: 35, status: "Fail" },
    { id: 3, name: "Sadia Islam", roll: 103, marks: 90, status: "Pass" }
];

// 1. Add Student
function addStudent(name, roll, marks) {
    const student = {
        id: students.length + 1,
        name: name,
        roll: roll,
        marks: marks,
        status: marks >= 40 ? "Pass" : "Fail"
    };
    students.push(student);
    console.log(`Successfully added: ${name}`);
    showStudents();
}

// 2. Search Student by Name
function searchStudent(nameQuery) {
    const results = students.filter(s => s.name.toLowerCase().includes(nameQuery.toLowerCase()));
    if (results.length > 0) {
        console.log("Search Results:");
        console.table(results);
    } else {
        console.log("No student found!");
    }
}

// 3. View All Students
function showStudents() {
    console.log("Current Student List:");
    console.table(students);
}

// 4. Update Student
function updateStudent(id, newName, newMarks) {
    const student = students.find(s => s.id === id);
    if (student) {
        if (newName) student.name = newName;
        if (newMarks !== undefined) {
            student.marks = newMarks;
            student.status = newMarks >= 40 ? "Pass" : "Fail";
        }
        console.log(`Student ID ${id} updated successfully.`);
        showStudents();
    } else {
        console.log("Student not found!");
    }
}

// 5. Delete Student
function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const removed = students.splice(index, 1);
        console.log(`Deleted student: ${removed[0].name}`);
        showStudents();
    } else {
        console.log("Student not found!");
    }
}

// 6. Filter Students (Pass/Fail)
function filterStudents(statusType) {
    const filtered = students.filter(s => s.status.toLowerCase() === statusType.toLowerCase());
    console.log(`Students with status '${statusType}':`);
    console.table(filtered);
}

// Initial display in console
console.log("Student Manager Loaded Successfully!");
showStudents();