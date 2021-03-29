/// <reference types="cypress" />

describe('Test Suite', () => {
    
    it('Tcs3', ()=> {
        cy.visit('https://codedamn.com')
        cy.contains('Become Frontend Developer').click()
        
    })

   
})