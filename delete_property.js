const student = {
    name: 'rohit',
    age: 27,
    roll_no: 233
}

console.log(JSON.stringify(student, null, 2));
delete student.roll_no;

console.log(JSON.stringify(student, null, 2));