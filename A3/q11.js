// Function to perform the math and return the value
function getSimpleInterest(p, r, t) {
  // SI = (P * R * T) / 100
  return (p * r * t) / 100;
}

function calculateAndDisplay() {
  var p = parseFloat(document.getElementById("p").value);
  var r = parseFloat(document.getElementById("r").value);
  var t = parseFloat(document.getElementById("t").value);

  // Calling the function with multiple parameters and getting return value
  var si = getSimpleInterest(p, r, t);

  document.getElementById("result").innerHTML = "Total Interest: $" + si;
}