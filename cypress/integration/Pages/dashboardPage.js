/// <reference types = "Cypress" />

// import { indexOf } from "cypress/types/lodash"
// import _ from "lodash"

class dashboardPage {
  constructor() {
    this.locators = {
      bulkActionBtn: '[data-key="bulk_actions"] > a',
      uploadBtn: ".sc-AxhUy > div > .ant-btn",
      uploadField: ".ant-upload-drag-icon > .anticon > svg"
    };
  }
  checkTitle(title) {
    cy.title().should("eq", title);
    return this;
  }

  checkAbilityToUpload() {
    if (
      cy
        .get(this.locators.bulkActionBtn)
        .should("exist")
        .click()
        .then(($button) => {
          cy.get(this.locators.uploadBtn).should("exist").should("be.enabled").click();
        })
    )
      return this;
  }

  checkFileFormat() {
    const path = "C:/Users/SonHV3/Documents/data.txt";
    //var filePath
    //var path = filePath?.slice('.') || ''
    //cy.fixture(path)
    cy.get(this.locators.uploadField).trigger("dragenter");

    return this;
  }
}

export default dashboardPage;
