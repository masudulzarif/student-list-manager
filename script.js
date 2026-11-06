// =====================
// Student List Manager 
// =====================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];

// Add initial sample data
students.push({ id: 1, name: "Masudul Zarif", roll: 101, marks: 85, status: "Pass" });
students.push({ id: 2, name: "Rahim Ahmed", roll: 102, marks: 35, status: "Fail" });
students.push({ id: 3, name: "Sadia Islam", roll: 103, marks: 90, status: "Pass" });

function showMenu() {
    console.log("\n==============================");
    console.log("    STUDENT LIST MANAGER");
    console.log("==============================");
    console.log("1. View All Students");
    console.log("2. Add Student");
    console.log("3. Search Student by Name");
    console.log("4. Filter by Pass/Fail");
    console.log("5. Delete Student");
    console.log("6. Exit");
    
    rl.question("\nChoose an option (1-6): ", handleMenu);
}

function handleMenu(choice) {
    switch(choice.trim()) {
        case '1':
            console.log("\nCurrent Student List:");
            console.table(students);
            showMenu();
            break;
            
        case '2':
            rl.question("Enter student name: ", (name) => {
                rl.question("Enter roll: ", (roll) => {
                    rl.question("Enter marks: ", (marks) => {
                        const m = Number(marks);
                        const newStudent = {
                            id: students.length + 1,
                            name: name,
                            roll: Number(roll),
                            marks: m,
                            status: m >= 40 ? "Pass" : "Fail"
                        };
                        students.push(newStudent);
                        console.log(`Successfully added: ${name}`);
                        showMenu();
                    });
                });
            });
            break;
            
        case '3':
            rl.question("Enter name to search: ", (query) => {
                const results = students.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
                if (results.length > 0) {
                    console.log("\nSearch Results:");
                    console.table(results);
                } else {
                    console.log("\nNo student found!");
                }
                showMenu();
            });
            break;
            
        case '4':
            rl.question("Enter status to filter (Pass/Fail): ", (statusQuery) => {
                const filtered = students.filter(s => s.status.toLowerCase() === statusQuery.toLowerCase());
                console.log(`\nStudents with status '${statusQuery}':`);
                console.table(filtered);
                showMenu();
            });
            break;
            
        case '5':
            rl.question("Enter Student ID to delete: ", (idStr) => {
                const id = Number(idStr);
                const index = students.findIndex(s => s.id === id);
                if (index !== -1) {
                    const removed = students.splice(index, 1);
                    console.log(`Deleted student: ${removed[0].name}`);
                } else {
                    console.log("\nStudent ID not found!");
                }
                showMenu();
            });
            break;
            
        case '6':
            console.log("Exiting... Goodbye!");
            rl.close();
            break;
            
        default:
            console.log("Invalid choice! Please choose between 1 to 6.");
            showMenu();
            break;
    }
}

// Start the CLI app
showMenu();