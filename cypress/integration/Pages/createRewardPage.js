/// <reference types = "Cypress" />

var url = {
    dashboardUrl: "business_intelligence/overview",
    reportUrl: "reports",
    inventoryUrl: "inventories",
    catalogueUrl: "catalogues",
    campaignUrl: "campaigns",
    loyaltyUrl: "loyalty/list"
}

var originUrl = "https://dashboard.perxtech.io/dashboard/p/"


class createRewardPage { 

    // locator
    createNewRewardButton() {
        return cy.get('button[type=button]')
    }

    dashboards() {
        return cy.get('[data-key="business_intelligence"] > a')
    }

    reports() {
        return cy.get('[data-key="reports"] > a')
    }

    rewards() {
        return cy.get('[data-key="rewards"] > a')
    }

    inventory() {
        return cy.get('[data-key="inventories"] > a')
    }

    catalogues() {
        return cy.get('[data-key="catalogs"] > a')
    }

    campaigns() {
        return cy.get('[data-key="campaigns"] > a')
    }

    campaignsBeta() {
        return cy.get('[data-key="new_campaigns"] > a')
    }

    loyalty() {
        return cy.get('[data-key="loyalties"] > a')
    }

    rules() {
        return cy.get('[data-key="transaction_rules"] > a')
    }

    merchants() {
        return cy.get('[data-key="merchants"] > a')
    }

    layoutContent() {
        return cy.get('.ant-layout-content')
    }

    dashboardUrl() {
        return cy.visit('https://dashboard.perxtech.io/dashboard/p/business_intelligence/overview')
    }

    reportUrl() {
        return cy.visit('https://dashboard.perxtech.io/dashboard/p/reports')
    }

    inventoryUrl() {
        return cy.visit('https://dashboard.perxtech.io/dashboard/p/inventories')
    }

    catalogueUrl() {
        return cy.visit('https://dashboard.perxtech.io/dashboard/p/catalogues')
    }

    campaignUrl() {
        return cy.visit('https://dashboard.perxtech.io/dashboard/p/campaigns')
    }

    loyaltyUrl() {
        return cy.visit('https://dashboard.perxtech.io/dashboard/p/loyalty/list')
    }




    //open url function
    visit(url) {
        cy.get(url)
        return this
    }
   
    // check title function
    checkTitle(title) {
        cy.title().should('eq', title)
        return this
    }

    // check account can create a new reward
    checkRole() {
        this.createNewRewardButton().should('be.visible').should('be.enabled');
        return this
    }

    // create new reward function
    createReward() {
        const crp = new createRewardPage()
        const createNewBtn = cy.get('button[type=button]')
        createNewBtn.click()
        return this
    }

    // checkAccessRole() {
    //     cy.get
    // }

    checkAuthorization() {
        this.dashboards().should('not.exist')
        this.reports().should('not.exist')
        this.inventory().should('not.exist')
        this.catalogues().should('not.exist')
        this.campaigns().should('not.exist')
        this.loyalty().should('not.exist')
        this.rules().should('not.exist')
        this.merchants().should('not.exist')
        return this
    }

    //verify url
    verifyUrl() {
    //   this.dashboardUrl()
    //   this.layoutContent().should('be.visible').contains('403 Forbidden')
    //   this.reportUrl()
    //   this.layoutContent().should('be.visible').contains('403 Forbidden')
    //   this.inventoryUrl()
    //   this.layoutContent().should('be.visible').contains('403 Forbidden')
    //   this.catalogueUrl()
    //   this.layoutContent().should('be.visible').contains('403 Forbidden')
    for(var value in url) {
        cy.visit(`${originUrl}${url[value]}`)
        this.layoutContent().should('be.visible').contains('403 Forbidden')
    }
      return this

    }

}


export default createRewardPage