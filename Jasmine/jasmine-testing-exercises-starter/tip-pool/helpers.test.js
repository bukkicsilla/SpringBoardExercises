describe("Helperss test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = "100";
    tipAmtInput.value = "10";
    submitPaymentInfo();
  });
  it("sum total bill amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);
  });
  it("sum total tip amount of all payments on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toBe(10);
  });
  it("sum total tip percent on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipPercent")).toBe(10);
  });
  it("sum tip percent of a single tip", function () {
    expect(calculateTipPercent(100, 10)).toBe(10);
  });
  it("append new table data from a value to table row", function () {
    let newTr = document.createElement("tr");
    appendTd(newTr, "Tip percent");
    expect(newTr.children.length).toBe(1);
    expect(newTr.innerHTML).toEqual("<td>Tip percent</td>");
  });

  afterEach(function () {
    // teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
    serverTbody.innerHTML = "";
    paymentTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});
