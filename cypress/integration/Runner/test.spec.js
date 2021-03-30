/// <reference types="cypress" />

describe('Test Suite', () => {
    // it('Tcs1', ()=> {
    //     cy.visit('https://codedamn.com')
    // })

    // it('Tcs2', ()=> {
    //     cy.visit('https://codedamn.com')
    //     cy.contains('Become Frontend Developer')
    // })

    
    // it('Tcs3', ()=> {
    //     cy.visit('https://codedamn.com')
    //     cy.contains('Become Frontend Developer').click()
        
    // })


    it('Search a product', ()=> {
        cy.visit('https://demo.nopcommerce.com');
        cy.get('#small-searchterms').type('ssss');
        cy.get([type="submit"]).click();
    })
  
    
   
})