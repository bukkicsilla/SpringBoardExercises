describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });
  it("in case of empty input", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });
  it("update server table", function () {
    submitServerInfo();
    updateServerTable();
    expect(serverTbody.innerHTML).toBe(
      '<tr id="server1"><td>Alice</td><td>$0.00</td></tr>'
    );
  });
  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
