class student
{
    s_id : String;   
    s_name : String;
    booksIssued : number;
    constructor(s_id: String, s_name: String)
{
    this.s_id  = s_id;
    this.s_name = s_name;
    this.booksIssued = 0;
}
}
class book
{
   s: any;
   b_id : number; 
   b_title : String;
   author : String;
   constructor(b_id : number, b_title: String, author: String)
{
    this.b_id = b_id;
    this.b_title  = b_title;
    this.author = author;
}
}

var bk:book[]=[];
bk.push(new book(101, "Java", "Ashok"), new book(102, "JavaScript", "Anand"), new book(103, "TypeScript", "Kiran"));
var std:student[]=[];
std.push(new student("C01", "Ankith"), new student("C02", "Barath"), new student("C03", "Chethan"));

function issueBook(b:book, s:student)
{
    b.s = s;
    s.booksIssued++;
}
function returnBook(b:book)
{
    b.s.booksIssued--;
    b.s=null;
}
console.log(bk);
console.log(std);

issueBook(bk[0], std[2]);
issueBook(bk[1], std[0]);

console.log(bk);
console.log(std);

returnBook(bk[0]);

console.log(bk);
console.log(std);