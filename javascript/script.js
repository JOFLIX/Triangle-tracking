//*************************************************
function findOut(){
  var a=parseFloat(document.getElementById('a').value);
  var b=parseFloat(document.getElementById('b').value);
  var c=parseFloat(document.getElementById('c').value);

  
  // Busines logic
  // console.log gives the string despite the result
  // the alert helps to pop the feedback to the client
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
 
  }else if(a!==b && b!==c && c!==a && a + c>b && b + c >a && a+b>c){
    alert("scalene triangle");
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
  
  
