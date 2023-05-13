alert(
  "Welcome To Fitness-Club, This project would be completed soon. Thank you for glasing through."
);

let errorEl = document.getElementById("error");
let hamBurger = document.getElementById("icon");
let overlay = document.querySelector(".navs");
let layTwo = document.getElementById("list");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("icon");
  overlay.classList.toggle("overlay");
  layTwo.classList.toggle("overlay");
});

const Rest = () => {
  errorEl.innerText = "Please Check Again";
};
