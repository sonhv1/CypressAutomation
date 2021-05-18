/// <reference types="Cypress" />

let HomePage = require("../data/pages/HomePage");

Cypress.Commands.add("clickSignInBtn", ()=> {
  cy.get(HomePage.page_items.signInBtn.selector).click();
})
