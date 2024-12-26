describe("User API", () => {
  it("should return 200 for valid users", () => {
    cy.request("GET", "/api/users").its("status").should("eq", 200);
  });
});
