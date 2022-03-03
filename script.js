// 2. // score counter
var count = 314;
var countElement = document.querySelector("#count");

function add1() {
  count++;
  countElement.innerHTML = count;
}

var count1 = 159;
var count1Element = document.querySelector("#count1");

function add2() {
  count1++;
  count1Element.innerHTML = count1;
}
// 3. timeout
function codeToRunLater() {
  alert("The ninjas have won!");
}

setTimeout(codeToRunLater, 13000);

// 1. // cookie fixed position

function acceptCookies() {
  var cookie = document.querySelector(".cookies");
  cookie.remove();
}
