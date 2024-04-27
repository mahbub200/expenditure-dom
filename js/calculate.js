document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    // taking input values from funxtion
    const incomeInputField = inputFieldSetByID("income-input");
    const foodInputField = inputFieldSetByID("food-input");
    const rentInputField = inputFieldSetByID("rent-input");
    const clothesInputField = inputFieldSetByID("clothes-input");

    // total expense
    const expense = foodInputField + rentInputField + clothesInputField;
    if (incomeInputField < expense) {
      errorHandlng("input-container", incomeInputField, expense);
      return;
    }
    elementSetTextById("total-expenses", expense);
    // balance
    let balance = incomeInputField - expense;
    elementSetTextById("balance", balance);

    if (
      isNaN(incomeInputField) ||
      isNaN(foodInputField) ||
      isNaN(rentInputField) ||
      isNaN(clothesInputField)
    ) {
      errorHandlng("input-container");
    }
    if (
      incomeInputField < 0 ||
      foodInputField < 0 ||
      rentInputField < 0 ||
      clothesInputField < 0
    ) {
      errorHandlng("input-container");
    }
  });

document.getElementById("reset-button").addEventListener("click", function () {
  // Clear input fields
  document.getElementById("income-input").value = "";
  document.getElementById("food-input").value = "";
  document.getElementById("rent-input").value = "";
  document.getElementById("clothes-input").value = "";

  // Reset total expenses and balance to initial values
  document.getElementById("total-expenses").innerText = "00";
  document.getElementById("balance").innerText = "";

  const errorMessage = document
    .getElementById("input-container")
    .querySelector("p");
  if (errorMessage) {
    errorMessage.remove();
  }
});
