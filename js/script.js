const inputs = [
  document.getElementById("first_name"),
  document.getElementById("last_name"),
  document.getElementById("email"),
  document.getElementById("company"),
];
const formCheckbox = document.querySelector("input[name=mailing]");
const chboxSpan = document.querySelector(".checkbox_required");
const form = document.getElementById("banner_form");

let url = "";
const formData = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  // mailing: checkboxChecked && "mail",
};
let checkboxChecked = false;

const clearForm = () => {
  inputs.map(input => (input.value = ""));
  formCheckbox.checked = false;
};

const isValid = () => {
  let valid = inputs.every(input => input.value.length > 0);
  if (!valid) {
    inputs.filter(input => {
      if (
        input.value.length < 1 &&
        !input.classList.contains("input_invalid")
      ) {
        input.classList.toggle("input_invalid");
      }
    });
    return false;
  }
  return true;
};

const handleInput = e => {
  inputs.filter(input =>
    input.value.length > 0 && input.classList.contains("input_invalid")
      ? input.classList.toggle("input_invalid")
      : null
  );
  inputs.map(input => {
    if (e.target === input && e.target.value.length > 0) {
      switch (e.target.id) {
        case "first_name":
          formData.first_name = e.target.value;
          break;
        case "last_name":
          formData.last_name = e.target.value;
          break;
        case "email":
          formData.email = e.target.value;
          break;
        case "company":
          formData.company = e.target.value;
          break;
      }
      return;
    } else if (
      e.target === input &&
      !e.target.classList.contains("input_invalid") &&
      e.target.value.length < 1
    ) {
      e.target.classList.toggle("input_invalid");
    }
  });
};

// Dynamic checkbox changing (toggle warning)
// const handleChbox = e => {
//   if (formCheckbox.checked) {
//     checkboxChecked = true;
//     chboxSpan.classList.add("display_none");
//   }
//   if (!formCheckbox.checked) {
//     checkboxChecked = false;
//     chboxSpan.classList.remove("display_none");
//   }
// };

const handleSubmit = e => {
  e.preventDefault();
  !checkboxChecked
    ? chboxSpan.classList.remove("display_none")
    : chboxSpan.classList.add("display_none");
  if (!isValid() || !checkboxChecked) {
    inputs.map(input =>
      input.value.length > 0 && input.classList.contains("input_invalid")
        ? input.classList.toggle("input_invalid")
        : false
    );
    return;
  }

  const data = JSON.stringify(formData);
  console.log("Sending data:", data);

  fetch(url + `${form.id}`, {
    method: "POST",
    body: data,
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));

  clearForm();
};

inputs.map(input => input.addEventListener("input", handleInput));
formCheckbox.addEventListener("change", () =>
  formCheckbox.checked ? (checkboxChecked = true) : (checkboxChecked = false)
);
form.addEventListener("submit", handleSubmit);
