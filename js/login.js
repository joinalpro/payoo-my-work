//

document.getElementById("button-login").addEventListener("click", function (e) {
  e.preventDefault();
  // step-3  get the phone number
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  //   console.log(phoneNumber, pinNumber);

  //   step-4 validate phone and pin
  //   this is not the perfect way; it's temporary
  if (phoneNumber === "5" && pinNumber === "1234") {
    console.log("you are logged in");
    // allow user to use website
    window.location.href = "/home.html";
  } else {
    alert("wrong phone or password");
  }

  //
});
