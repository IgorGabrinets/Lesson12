//let divCard = document.querySelectorAll("div");
//
//for (let i = 0; i < divCard.length; i++) {
//  function ChangeColor() {
//    divCard[i].classList.add("active");
//  }
//  divCard[i].addEventListener("click", ChangeColor);
//}

let divCard = document.querySelectorAll("div");

for (let i = 0; i < divCard.length; i++) {
  function ChangeColor() {
    divCard[i].classList.add("active");
  }
  divCard[i].addEventListener("click", ChangeColor);
}