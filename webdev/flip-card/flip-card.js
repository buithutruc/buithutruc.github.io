const cards = document.querySelectorAll(".card_inner");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

cards.forEach((card) =>
  card.addEventListener(
    "click",
    (flipCard = async () => {
      card.classList.toggle("is_flipped");
      await delay(8000);
      card.classList.toggle("is_flipped");
    })
  )
);
