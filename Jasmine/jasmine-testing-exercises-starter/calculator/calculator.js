window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = getCurrentUIValues();
  if (!values.amount) values.amount = 10000;
  if (!values.years) values.years = 1;
  if (!values.rate) values.rate = 0.1;
  //let p = calculateMonthlyPayment(values);
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = values.rate / 12;
  const n = values.years * 12;
  const denom = 1 - (1 + i) ** -n;
  const payment = (values.amount * i) / denom;
  //console.log("In function Payment", payment);
  return +payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyEl = document.getElementById("monthly-payment");
  monthlyEl.innerText = monthly;
}
