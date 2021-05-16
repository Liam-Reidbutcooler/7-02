document.getElementById('button').addEventListener('click',comparison)
let userinput = 0
function comparison() {
  userinput = document.getElementById('in').value
  userinput = parseInt(userinput)
   if (userinput < 0) {
     document.getElementById('a').innerHTML = "Negative"
   } else {
     document.getElementById('a').innerHTML = "Positive"
   }
}