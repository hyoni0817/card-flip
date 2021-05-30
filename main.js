const card = document.querySelectorAll(".card__inner");

for(let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function (e) {
    card[i].classList.toggle('is-flipped'); 
  }, {
    capture: true,
  });
}
