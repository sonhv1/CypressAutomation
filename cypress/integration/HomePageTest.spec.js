/// <reference types= "Cypress" />

require("../src/Homepage_Command");
require("../src/SignInPage_Command");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.visit("http://automationpractice.com/index.php");
});

context("Create account", () => {
  //   it("Ex1", () => {
  //     //homePage.clickSignInBtn();
  //     cy.clickSignInBtn();
  //     cy.create_invalid_account("123", "Invalid email address.");
  //   })

  it("Ex2", () => {
    cy.clickSignInBtn();
    cy.input_email("hanucamtaa@gmail.com");
    let Account = {
      gender: "Mr",
      firstName: "Hoang",
      lastName: "Son",
      email: "hanucamtaa@gmail.com",
      password: "123456",
      date_of_birth: "4",
      month_of_birth: "October",
      year_of_birth: "1996",
      company: "LQA",
      address: "zz",
      address2: "zz",
      city: "Ha Noi",
      state: "Oregon",
      zip: "11111",
      country: "United States",
      other_info: "weqw",
      home_phone: "123",
      mobile_phone: "123",
      address_alias: "123",
    };

    cy.create_valid_account(Account);
  });
});
