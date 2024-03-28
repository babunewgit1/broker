const countrySelect = document.querySelector("#cntry");
const countryBox = document.querySelector(".hero_input_pera");
const heroBlock = document.querySelectorAll(".hero_input_block ul li");

countrySelect.addEventListener("click", () => {
  countryBox.classList.toggle("activeCountry");
});

heroBlock.forEach((item) => {
  item.addEventListener("click", () => {
    const para = item.children[0];
    const text = para.textContent.trim();
    countrySelect.textContent = text;
    countryBox.classList.remove("activeCountry");
  });
});

const broker = document.querySelector("#broker");
const compare = document.querySelector("#compare");

broker.addEventListener("click", () => {
  compare.classList.toggle("activeBroker");
});
