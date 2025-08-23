document.getElementById("btn-addMoney").addEventListener("click", function (e) {
  e.preventDefault();
  const inputNumber = document.getElementById("input-amount").value;
  const newInputNumber = parseFloat(inputNumber);
  const inputPin = document.getElementById("input-pin").value;

  //   console.log(addMoney, pinNumber)
  if (inputPin === "1234") {
    const oldBalance = document.getElementById("bankBalance").innerText;
    const oldBankBalance = parseFloat(oldBalance);
    const currentBalance = oldBankBalance + newInputNumber;
    const currentUpdatedBalance = (document.getElementById(
      "bankBalance"
    ).innerText = currentBalance);
  } else {
    alert("please check your password");
  }
});
