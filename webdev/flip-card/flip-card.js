const cards = document.querySelectorAll(".card_inner");

function flipCard() {
  this.classList.toggle("is_flipped");
}

cards.forEach((card) => card.addEventListener("click", flipCard));
