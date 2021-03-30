/// <reference types = "Cypress" />

class dashboardPage {
    checkTitle(title) {
        cy.title().should('eq', title)
        return this
    }
}

export default dashboardPage