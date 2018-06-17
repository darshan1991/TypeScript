var student = /** @class */ (function () {
    function student(s_id, s_name) {
        this.s_id = s_id;
        this.s_name = s_name;
        this.booksIssued = 0;
    }
    return student;
}());
var book = /** @class */ (function () {
    function book(b_id, b_title, author) {
        this.b_id = b_id;
        this.b_title = b_title;
        this.author = author;
    }
    return book;
}());
var bk = [];
bk.push(new book(101, "Java", "Ashok"), new book(102, "JavaScript", "Anand"), new book(103, "TypeScript", "Kiran"));
var std = [];
std.push(new student("C01", "Ankith"), new student("C02", "Barath"), new student("C03", "Chethan"));
function issueBook(b, s) {
    b.s = s;
    s.booksIssued++;
}
function returnBook(b) {
    b.s.booksIssued--;
    b.s = null;
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
