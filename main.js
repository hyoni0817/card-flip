const card = document.querySelectorAll(".card__inner");

for(let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function (e) {
    card[i].classList.add('is-flipped'); 
    //반복해서 뒤집고 싶을 때는 add대신에 toggle
  }, {
    capture: true,
  });
}
