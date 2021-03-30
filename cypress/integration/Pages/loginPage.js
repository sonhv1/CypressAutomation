/// <reference types = "Cypress" />

class loginPage {
    visit() {
        cy.visit('https://www.perxtech.io/dashboard')
    }

    userName() {
        return cy.get('#email')
    }

    password() {
        return cy.get('#password')
    }

    loginBtn() {
        return cy.get('.ant-btn')
    }

    login(user, pass) {
        const login = new loginPage()
        login.userName().type(user)
        login.password().type(pass)
        login.loginBtn().click()
        return this
    }
}

    export default loginPage;
