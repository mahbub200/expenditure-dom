function inputFieldSetByID(id) {
  let fieldInput = document.getElementById(id);
  let fieldString = fieldInput.value;
  let fieldValue = Number(fieldString);
  // fieldInput.value=''
  return fieldValue;
}
function elementTextField(id) {
  let textElement = document.getElementById(id);
  let textElementString = textElement.innerText;
  let textElementValue = Number(textElementString);
  return textElementValue;
}
function elementSetTextById(id, value) {
  const totalExpenses = document.getElementById(id);
  totalExpenses.innerText = value;
}
function errorHandlng(id, incomeInputField, expense) {
  let inputContainer = document.getElementById(id);
  let p = document.createElement("p");
  if (incomeInputField < expense) {
    p.innerText = `expense cannot be greater  than income`;
  } else {
    p.innerText = `field input cannot be a string or a negative number`;
  }

  inputContainer.appendChild(p);
  p.style.color = "red";
}
