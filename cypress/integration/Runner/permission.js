/// <reference types="Cypress" />

import LoginPage from "../Pages/LoginPage";

// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false;
// });

beforeEach(() => {
  cy.visit("https://www.perxtech.io/dashboard");
});

describe("Creating a reward", () => {
  const loginPage = new LoginPage();

  //--------------------------------------------------------------------------------------

  specify("Given a user acc with permissin to create a reward and \
          ensure that the user is not able to visit the rest of the page sections", () => {
    const homePage = loginPage.login();
    homePage.verifyRewardHeader();
    homePage.verifyUrl();
  });
});
