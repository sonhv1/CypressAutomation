/// <reference types = "Cypress" />

before(() => {
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});

class LoginPage {
  constructor() {
    this.locators = {
      email: "#email",
      password: "#password",
      loginBtn: ".ant-btn",
    };
  }

  // Function login with parameters user and pass
  login() {
    cy.get(this.locators.email).type(this.data.email);
    cy.get(this.locators.password).type(this.data.password);
    cy.get(this.locators.loginBtn).click();
    return this;
  }
}

export default LoginPage;
