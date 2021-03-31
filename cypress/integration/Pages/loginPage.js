/// <reference types = "Cypress" />


// Locator
var email = '#email'
var password = '#password'
var loginBtn = '.ant-btn'


class loginPage {
    login(user, pass) {
        cy.get(email).type(user)
        cy.get(password).type(pass)
        cy.get(loginBtn).click()
        return this
    }
}

    export default loginPage;
