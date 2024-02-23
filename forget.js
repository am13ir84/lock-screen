document.getElementById("msg").innerText = "Enter 1254";
let pin = "";
localStorage.setItem("localPin", 1254);
let input = document.getElementById("pin-input");

let stats = false;
function addPin(number) {
  pin += number;
  input.value = pin;
}

function clearPin() {
  pin = pin.substring(0, pin.length - 1);
  input.value = pin;
}

function submit() {
  const currentPin = input.value;
  if (currentPin === localStorage.getItem("localPin")) {
    input.style.borderColor = "green";
    input.value = "";
    pin = "";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1000);
  } else {
    input.style.borderColor = "red";
    setTimeout(() => {
      input.style.borderColor = "black";
      input.value = "";
      pin = "";
    }, 1000);
  }
}

function Super() {
  submit();
}
