var students: string[] = ['Darshan', 'Sunil', 'Basavaraj'];
console.log(students);

interface Student {
    id : number;
    Name : string;
}
var newStudent: Student[] = [];

newStudent.push({
    id : 102,
    Name : 'Basavaraj'
});

newStudent.push({
    id : 103,
    Name : 'Sunil'
});
console.log(newStudent[1].id + " is " + newStudent[1].Name);

// array of string and to store new element using array in interface type