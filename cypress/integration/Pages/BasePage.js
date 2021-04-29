beforeEach(() => {
  cy.fixture("invalid_files_list").then((data) => {
    this.file_name = data;
  });
});

class BasePage {
  clickElement(elementLocator) {
    cy.get(elementLocator).click({ multiple: true, force: true });
  }

  sendKeyLocator(elementLocator, key) {
    cy.get(elementLocator).type(key, { force: true });
  }

  uploadFile(elementLocator, fileToUpload) {
    cy.get(elementLocator).attachFile(fileToUpload, {
      subjectType: "drag-n-drop",
    });
  }

  verifyIncludeUrl(url) {
    expect(cy.url().should("include", url));
  }

  verifyNotIncludeUrl(url) {
    expect(cy.url().should("not.include", url));
  }

  verifyElementVisibleByString(string) {
    expect(cy.contains(string).should("be.visible"));
  }

  verifyElementVisibleByLocator(locator) {
    expect(cy.get(locator).should("be.visible"));
  }
}
export default BasePage;
