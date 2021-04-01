/// <reference types = "Cypress" />

// import { indexOf } from "cypress/types/lodash"
// import _ from "lodash"


// Locator
var bulkActionBtn = '[data-key="bulk_actions"] > a'
var uploadBtn = '.sc-AxhUy > div > .ant-btn'
var uploadField = '.ant-upload-drag-icon > .anticon > svg'



class dashboardPage {
    checkTitle(title) {
        cy.title().should('eq', title)
        return this
    }

    checkAbilityToUpload() {
    
        if(cy.get(bulkActionBtn).should('exist').click().then($button => {
            cy.get(uploadBtn).should('exist').should('be.enabled').click()
        })
        )
        return this
    }

    checkFileFormat() {
        const path = 'C:/Users/SonHV3/Documents/data.txt'
        //var filePath
        //var path = filePath?.slice('.') || ''
        //cy.fixture(path)
        cy.get(uploadField).trigger('dragenter')
        cy.dropFile(path)

        return this
    }

    

    
}

export default dashboardPage