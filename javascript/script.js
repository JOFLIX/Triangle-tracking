//*************************************************
function findOut(){
  var a=parseInt(document.getElementById('a').value);
  var b=parseInt(document.getElementById('b').value);
  var c=parseInt(document.getElementById('c').value);

  
  
   if (a===b && b===c && c === a){
    alert("Equilateral triangle");
    console.log(confirm("Superb! Willing to continue? :)"))
  }
  else if (a === c && a !== c) {
    alert("Isosceles");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }else if (a === c && a !== b) {
    alert("Isosceles");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }else if (b === c && b !== a) {
    alert("Isosceles");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }else if (a !== b && b !== c && a !== c && a + b > c && b + c > a){
    alert("scalene");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }else if (a + b <= c) {
    alert ("Not a triangle");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }else if (a + c <=b) {
    alert ("Not a triangle");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }else if (b + c <=a)  {
    alert ("Not a triangle");
    console.log(confirm("Superb! Willing to continue? :)"))
 
  }
  else if(NaN){
    alert("Not a number! Kindly isert number!")
  }

  else(alert("Not an integer"))
}
  
  