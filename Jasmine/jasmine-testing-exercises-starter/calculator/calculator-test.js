it("should calculate the monthly rate correctly", function () {
  expect(
    Math.round(calculateMonthlyPayment({ amount: 10000, years: 1, rate: 0.1 }))
  ).toEqual(879);
  //expect(Math.round(879.1588)).toEqual(879);
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 1, rate: 0.1 })
  ).toEqual(879.16);
});

it("result should be a number", function () {
  const values = { amount: 5000, years: 10, rate: 0.05 };
  expect(typeof calculateMonthlyPayment(values)).toBe("number");
});

/// etc
