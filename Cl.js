function cal(){
  var ope1 = document.getElementById("first").value;
  var ope2 = document.getElementById("second").value;
  var ope = document.getElementById("ope").value;
  
   let num1 = parseFloat(ope1);
   let num2 = parseFloat(ope2);
  if (ope == '+'){
     var res = num1 + num2
  }
   if (ope == '-'){
    var  res =   num1 - num2
  }
  if (ope == '*'){
    var  res =  num1 * num2
  }
  if( ope == '/'){
        var  res =  num1 / num2
  }
  
  
  
  document.getElementById("res").value = res;
}
function mode(){
   let b = document.querySelector("body");
 //  b.style.backgroundColor = "black";
   if ( b.style.backgroundColor == 'white'){
     b.style.backgroundColor = "black";
   } else  {
     b.style.backgroundColor = "white";
     
   }
}