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
      if (e.target !== input && label.classList.contains("hide")) return false;
      label.classList.toggle("hide");
    });
  }
};

inputs.map(input => input.addEventListener("click", handleClick));

const handleWindowClick = () => {
  if (inputs.every(input => input !== document.activeElement)) {
    inputs.filter(input =>
      !input.previousElementSibling.classList.contains("hide")
        ? input.previousElementSibling.classList.toggle("hide")
        : false
    );
  }
};

window.addEventListener("click", handleWindowClick, false);
