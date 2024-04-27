document.getElementById("save-button").addEventListener("click", function () {
  const savingInputField = inputFieldSetByID("saving-input");

  const balance = elementTextField("balance");
  //    const saving=elementTextField('saving-amount
  const savingAmount = (balance * savingInputField) / 100;
  if (balance < savingAmount) {
    let inputContainer = document.getElementById("save-container");
    let p = document.createElement("p");
    p.innerText = `saving amount cannot be greater than income`;
    inputContainer.appendChild(p);
    p.style.color = "red";
    return;
  }
  elementSetTextById("saving-amount", savingAmount);
  const remainingBalance = balance - savingAmount;
  const parseRemain = parseFloat(remainingBalance.toFixed(2));
  elementSetTextById("remaining-balance", parseRemain);
});
