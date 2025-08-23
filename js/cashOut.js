document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();
  const inputCashOutAmount = document.getElementById(
    "input-cashout-amount"
  ).value;
  const cashOutAmount = parseFloat(inputCashOutAmount);
  const inputCashOutPin = document.getElementById("input-cashout-pin").value;
  //   password verification
  if (inputCashOutPin === "1234") {
    const currentBankBalance = document.getElementById("bankBalance").innerText;
    const currentBalance = parseFloat(currentBankBalance);

    const afterCashoutBalance = currentBalance - cashOutAmount;
    const newBankBalance = (document.getElementById("bankBalance").innerText =
      afterCashoutBalance);
  } else {
    alert("Please check your password");
  }
});
