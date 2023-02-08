const fNameInput = document.getElementById("first_name");
const lNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const companyInput = document.getElementById("company");

const inputs = [
  document.getElementById("first_name"),
  document.getElementById("last_name"),
  document.getElementById("email"),
  document.getElementById("company"),
];

const handleClick = e => {
  let elabel = e.target.previousElementSibling;

  if (elabel.classList.contains("hide")) {
    inputs.map(input => {
      let label = input.previousElementSibling;
      if (elabel !== label && label.classList.contains("hide")) return false;
      label.classList.toggle("hide");
    });
  }
};

fNameInput.addEventListener("click", handleClick);
lNameInput.addEventListener("click", handleClick);
emailInput.addEventListener("click", handleClick);
companyInput.addEventListener("click", handleClick);

window.addEventListener(
  "click",
  () => {
    if (inputs.every(input => input !== document.activeElement)) {
      inputs.filter(input =>
        !input.previousElementSibling.classList.contains("hide")
          ? input.previousElementSibling.classList.toggle("hide")
          : false
      );
    }
  },
  false
);
