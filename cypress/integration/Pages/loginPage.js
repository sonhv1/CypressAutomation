/// <reference types = "Cypress" />

class loginPage {
    constructor() {
        this.locators = {
            email: '#email',
            password:  '#password',
            loginBtn:  '.ant-btn'
        }

        
    }

    // Function login with parameters user and pass
    login(user, pass) {
        cy.get(this.locators.email).type(user)
        cy.get(this.locators.password).type(pass)
        cy.get(this.locators.loginBtn).click()
        return this
    }
}

    export default loginPage;
