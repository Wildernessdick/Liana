function newsLetter() {
  alert("Thank you for ordering our newsletter!");
}
/* Js animated numbers */
let counts = setInterval(countClientes);
let clients = 2820; //3000
let employess = 0; //180
let users = 820; //1000

function countClientes() {
  var clientCount = document.getElementById("clientCounter");
  var etCount = document.getElementById("employessCounter");
  var uCount = document.getElementById("usersCounter");
  employessCounter.innerHTML = ++employess;
  usersCounter.innerHTML = ++users;
  clientCount.innerHTML = ++clients;

  if (clients === 3000) {
    clearInterval(counts);
  }
}
