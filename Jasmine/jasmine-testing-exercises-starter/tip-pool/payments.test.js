describe("Payments test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = "100";
    tipAmtInput.value = "10";
  });
  it("should create a new payment with createCurPayment()", function () {
    const payment = {
      billAmt: "100",
      tipAmt: "10",
      tipPercent: 10,
    };
    expect(createCurPayment()).toEqual(payment);
  });
  it("in case of empty input on createCurPayment()", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    expect(createCurPayment()).toEqual(undefined);
  });
  it("update payment table", function () {
    paymentId = "1";
    const curPayment = createCurPayment();
    appendPaymentTable(curPayment);
    const tableRow =
      '<tr id="payment1"><td>$100</td><td>$10</td><td>10%</td></tr>';
    expect(paymentTbody.innerHTML).toEqual(tableRow);
  });

  it("should add a new payment to AllPayments on submitPaymentInfo()", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toBe(1);
    expect(allPayments["payment1"].billAmt).toEqual("100");
    expect(allPayments["payment1"].tipAmt).toEqual("10");
  });
  it("in case of empty input on submitPaymentInfo()", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
  });
  afterEach(function () {
    // teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentId = 0;
    paymentTbody.innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
  });
});
