// your exercise here
/*Task 1

Declare three variables, a and b and c.

If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines)*/

//Task 1
var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n_______________\n" +
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "a += b = " + (a += b) + "\n" +
      "a -= b = " + (a -= b) + "\n" +
      "a *= b = " + (a *= b) + "\n" +
      "a /= b = " + (a /= b) + "\n" +
      "a %= b = " + (a %= b) + "\n" +
      "a == b = " + (a == b) + "\n" +
      "a != b = " + (a != b) + "\n" +
      "a > b = " + (a > b) + "\n" +
      "a < b = " + (a < b) + "\n" +
      "!a && !c  = " + (!a && !c) + "\n" +
      "!a || !c = " + (!a || !c) + "\n"
     );



//Task 2

var first_name = "Sahra"; 
var last_name = "Omer"; 
var email = "omer0023@algonquinlive.com"; 
var output = 'My name is ' + first_name + ' ' + last_name +'.' + '\n You can contact me at ' + email + '.';  
    
console.log(output);