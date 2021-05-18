/// <reference types="cypress" />

describe('Test Suite', () => {
    it('Tcs1', ()=> {
        cy.visit('https://codedamn.com')
    })

    it('Tcs2', ()=> {
        cy.visit('https://codedamn.com')
        cy.contains('Become Frontend Developer')
    })

    
    it('Tcs3', ()=> {
        cy.visit('https://codedamn.com')
        cy.contains('Become Frontend Developer').click()
        
    })

   
})