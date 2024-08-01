document.addEventListener('DOMContentLoaded', function() {
  let input = document.getValeuById("input");
  let output = document.getValeuById("output");
  let button = document.getValeuById("button");
  
  function getValue(){
  input.textContent += elemento.value + "<br>";
  input.value = "";
  }
  
  button.addEventListener("click", getValue);
});  
