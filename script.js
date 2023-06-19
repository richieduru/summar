const buttons = document.querySelectorAll(".list-item");
const submit = document.querySelector(".btn-submit");
const rating = document.querySelector(".span-value");
const card = document.querySelector(".card");
const success = document.querySelector(".success");

let value;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("list-item"));
    e.target.classList.add("list-item");
    value = e.target.textContent;
  });
});

submit.addEventListener("click", () => {
  rating.textContent = value;
  card.style.display = "none";
  success.style.display = "flex";
});
