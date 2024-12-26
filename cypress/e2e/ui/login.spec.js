describe("Login Page", () => {
  it("should login successfully with valid credentials", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type("user123");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
