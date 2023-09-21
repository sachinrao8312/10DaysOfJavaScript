var button = document.getElementById("btn");
let count = 0;

// first way 
button.addEventListener("click", function () {
  button.innerHTML = ++count;
});

// second way
button.onclick = function () {
  button.innerHTML = ++count;
}