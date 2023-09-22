//Array of the numbers
let arr = [1, 2, 3, 6, 9, 8, 7, 4]; 
let ids = [1, 2, 3, 6, 9, 8, 7, 4];

const btn5 = document.getElementById("btn5"); 

//To rotate array
btn5.addEventListener("click", function () {
  arr.unshift(arr.pop());
  for (let i = 0; i < 8; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = arr[i];
  }
});
