var totCartValue=0; 
function calculate(){
var rec=document.getElementById("choose").value;

if(rec=='soap'){
    document.getElementById("price").value='40';
}
if(rec=='brush'){
    document.getElementById("price").value='25';
}
if(rec=='paste'){
    document.getElementById("price").value='30';
}
if(rec=='shampoo'){
    document.getElementById("price").value='10';
}
if(rec=='faceWash'){
    document.getElementById("price").value='100';
}
}

function tprice(){

var itemPrice=document.getElementById("price").value;
var itemQuantity=document.getElementById("quantity").value;
var pasValue=itemPrice*itemQuantity;

tamount(pasValue);
document.getElementById("result").value=itemPrice*itemQuantity;
}
function tamount(totValue){
 totCartValue = totCartValue + totValue;
 alert(totCartValue);
 document.getElementById("totalValue").value=totCartValue;
}
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = ""
    cell2.innerHTML = "<select id='choose' onchange='calculate()'>"
    +"<option value='select'>[Select Items]</option>"
    +"<option value='soap'>Soap</option>"
    +"<option value='brush'>Brush</option>"
    +"<option value='paste'>Tooth-Paste</option>"
    +"<option value='shampoo'>Shampoo</option>"
    +"<option value='faceWash'>Face-Wash</option>"
+"</select>";
    cell3.innerHTML = "<input type='text'  id='price' name='price'>";
    cell4.innerHTML = "<input type='text'  id='quantity' oninput='tprice()' name='quantity' placeholder='enter quantity'>";
    cell5.innerHTML = "<input type='text'  id='result' name='total'/>";
}
// function findTotal(){
//     var arr = document.getElementById('result');
//     var tot = 0;
//     for (var i = 1; i < arr.length; i++) {
//        //if (parseInt(arr[i].value))
//         tot += parseInt(arr[i].value);
// }
// document.getElementById('totalValue').value = tot;
//}
