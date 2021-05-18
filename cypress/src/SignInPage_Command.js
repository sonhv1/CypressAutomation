/// <reference types="Cypress" />
let SignInPage = require("../data/pages/SignInPage");
let CreateAccountPage = require("../data/pages/CreateAccountPage");
import _ from "lodash";
import { createYield } from "typescript";

let Account = {
  gender: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  date_of_birth: "",
  month_of_birth: "",
  year_of_birth: "",
  address_first_name: "",
  address_last_name: "",
  company: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  other_info: "",
  home_phone: "",
  mobile_phone: "",
  address_alias: "",
};

function inputInfo(Account) {
  switch (Account.gender) {
    case "Mr":
      cy.get(CreateAccountPage.page_items.mr_checkbox.selector).click();
      break;
    case "Mrs":
      cy.get(CreateAccountPage.page_items.mrs_checkbox.selector).click();
      break;
  }

  cy.get(CreateAccountPage.page_items.firstName_field.selector).type(
    Account.firstName
  );
  cy.get(CreateAccountPage.page_items.lastName_field.selector).type(
    Account.lastName
  );
  cy.get(CreateAccountPage.page_items.email_field.selector).should(
    "have.value",
    Account.email
  );
  cy.get(CreateAccountPage.page_items.password_field.selector).type(
    Account.password
  );
  cy.get(CreateAccountPage.page_items.day_dropdown_list.selector).select(
    Account.date_of_birth
  );
  cy.get(CreateAccountPage.page_items.month_dropdown_list.selector).select(
    Account.month_of_birth
  );
  cy.get(CreateAccountPage.page_items.year_dropdown_list.selector).select(
    Account.year_of_birth
  );
  // cy.get(CreateAccountPage.page_items.address_firstName_field).should(
  //   "have.value",
  //   Account.firstName
  // );

  // cy.get(CreateAccountPage.page_items.address_lastName_field.selector).should(
  //   "have.value",
  //   Account.lastName
  // );
  
  cy.get(CreateAccountPage.page_items.company_field.selector).type(
    Account.company
  );
  cy.get(CreateAccountPage.page_items.address_field.selector).type(
    Account.address
  );
  cy.get(CreateAccountPage.page_items.address2_field.selector).type(
    Account.address2
  );
  cy.get(CreateAccountPage.page_items.city_field.selector).type(Account.city);
  cy.get(CreateAccountPage.page_items.state_dropdown_list.selector).select(
    Account.state
  );
  cy.get(CreateAccountPage.page_items.zip_field.selector).type(Account.zip);
  cy.get(CreateAccountPage.page_items.country_dropdown_list.selector).select(
    Account.country
  );
  cy.get(CreateAccountPage.page_items.other_info_field.selector)
    .type(Account.other_info)
    .should("have.value", Account.other_info);
  cy.get(CreateAccountPage.page_items.home_phone_field.selector)
    .type(Account.home_phone)
    .should("have.value", Account.home_phone);
  cy.get(CreateAccountPage.page_items.mobile_phone_field.selector)
    .type(Account.mobile_phone)
    .should("have.value", Account.mobile_phone);
  cy.get(CreateAccountPage.page_items.address_alias_field.selector).type(
    Account.address_alias
  );
  cy.get(CreateAccountPage.page_items.register_btn.selector).click();
}

Cypress.Commands.add("create_invalid_account", (email, errorMessage) => {
  cy.get(SignInPage.page_items.email_create.selector).type(email);
  cy.get(SignInPage.page_items.createBtn.selector).click();
  cy.get(SignInPage.page_items.invalid_message.selector)
    .should("be.visible")
    .should("contain", errorMessage);
  //debugger;
});

Cypress.Commands.add("input_email", (email) => {
  cy.get(SignInPage.page_items.email_create.selector).type(email);
  cy.get(SignInPage.page_items.createBtn.selector).click();
});

Cypress.Commands.add("create_valid_account", (Account) => {
  inputInfo(Account);
  //debugger;
});
