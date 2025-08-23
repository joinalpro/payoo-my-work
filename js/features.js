// show the cashout form

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    // show cashout button
    document.getElementById("cash-out-form").classList.remove("hidden");

    // hide the add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

//   show the Addmoney form
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    // show addmojnt button
    document.getElementById("add-money-form").classList.remove("hidden");

    // hide the cashout form
    document.getElementById("cash-out-form").classList.add("hidden");
  });
