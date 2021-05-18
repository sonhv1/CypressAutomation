Cypress.Commands.add("select_dropdown", (pageObj, select_value) => {
    cy.wait(500);
    cy.xpath(pageObj.selector).click();
    cy.xpath(pageObj.selector)
      .invoke("attr", "aria-controls")
      .then((value) => {
        cy.xpath(`//*[@id="${value}"]`).within(() => {
          cy.get("option").contains(select_value).click();
        });
      });
  });

