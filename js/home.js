document.getElementById("btn-addMoney").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAmount = document.getElementById("input-amount").value;
  const newInputAmount = parseFloat(inputAmount);

  const inputpin = document.getElementById("input-pin").value;
  //   password verfication
  if (inputpin === "1234") {
    //get old bank balance amount
    const oldBalance = document.getElementById("bankBalance").innerText;
    const oldBalanceAmount = parseFloat(oldBalance);
    const newBalance = oldBalanceAmount + newInputAmount;

    //   insert new balance to the available balance
    const currentBalance = (document.getElementById("bankBalance").innerText =
      newBalance);
  } else {
    alert("check your password");
  }
});
