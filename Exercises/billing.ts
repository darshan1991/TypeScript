var items = ['pen', 'pencil','eraser','scale','marker']
var cost = [20, 5, 5, 10, 30] 
var quan = [3, 3, 2, 1, 5]

var total_items = items.length;
var total_quan = quan.reduce(function(a,b){
    return a+b; }, 0);
     
var total_amt = 0;  
     for(var i=0; i<quan.length; i++)
     {
         total_amt = total_amt + (cost[i] * quan[i]);
     }
console.log("Total items: " + total_items);      
console.log("Total Quantity: " + total_quan);
console.log("Total Amount: " + total_amt);