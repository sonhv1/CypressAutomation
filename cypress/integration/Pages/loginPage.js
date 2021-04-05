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
        cy.get(email).type(user)
        cy.get(password).type(pass)
        cy.get(loginBtn).click()
        return this
    }
}

    export default loginPage;
