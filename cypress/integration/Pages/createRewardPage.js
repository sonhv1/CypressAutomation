/// <reference types = "Cypress" />

class createRewardPage { 

    // locator

   

    // check title function
    checkTitle(title) {
        cy.title().should('eq', title)
        return this
    }


    checkRole() {
        cy.get('button[type=button]').should('be.visible').should('be.enabled');
        return this
    }


    createReward() {
        const crp = new createRewardPage()
        const createnewBtn = cy.get('button[type=button]')
        createnewBtn.click()
        return this
    }

}


export default createRewardPage