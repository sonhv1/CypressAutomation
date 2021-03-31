/// <reference types = "Cypress" />

var url = {
    dashboardUrl: "business_intelligence/overview",
    reportUrl: "reports",
    inventoryUrl: "inventories",
    catalogueUrl: "catalogues",
    campaignUrl: "campaigns",
    loyaltyUrl: "loyalty/list"
}

// Locator 
var originUrl = "https://dashboard.perxtech.io/dashboard/p/"
var nameField = ':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > div > .ant-input'
var nextBtn = '.BottomBar__Content-sc-1dqvwjb-1 > div > .ant-btn-primary'
var createNewRewardButton = 'button[type=button]'
var dashboards = '[data-key="business_intelligence"] > a'
var reports = '[data-key="reports"] > a'
var rewards = '[data-key="rewards"] > a'
var inventory = '[data-key="inventories"] > a'
var catalogues = '[data-key="catalogs"] > a'
var campaigns = '[data-key="campaigns"] > a'
var campaignsBeta = '[data-key="new_campaigns"] > a'
var loyalty = '[data-key="loyalties"] > a'
var rules = '[data-key="transaction_rules"] > a'
var merchants = '[data-key="merchants"] > a'
var layoutContent = '.ant-layout-content'
var dashboardUrl = 'https://dashboard.perxtech.io/dashboard/p/business_intelligence/overview'
var reportUrl = 'https://dashboard.perxtech.io/dashboard/p/reports'
var inventoryUrl = 'https://dashboard.perxtech.io/dashboard/p/inventories'
var catalogueUrl = 'https://dashboard.perxtech.io/dashboard/p/catalogues'
var campaignUrl = 'https://dashboard.perxtech.io/dashboard/p/campaigns'
var loyaltyUrl = 'https://dashboard.perxtech.io/dashboard/p/loyalty/list'
var startDateField = '[style="margin-bottom: 10px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-fzoYkl > .sc-fzomME > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .ant-calendar-picker-input'
var endDateField = '[style="margin-bottom: 0px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-fzoYkl > .sc-fzomME > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .ant-calendar-picker-input'
var calendarBody = '//tbody[@class="ant-calendar-tbody"]'
var date = 'ant-calendar-date'
var selectDate = '[style="margin-bottom: 10px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-fzoYkl > .sc-fzomME > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .anticon > svg'
var calendarClear = '//i[@class="anticon anticon-close-circle ant-calendar-picker-clear"]';
var cc = '//*[@id="root"]/section/section/main/span/div/div[3]/form/div[1]/div/div/div/div[4]/div[2]/div[1]/div[2]/div/span/div/div[1]/div/span[1]/div/i[2]'
var launchBtn = 'cy.get("[type="submit"]")'
var editBtn = '//button[@class="ant-btn ant-btn-primary ant-btn-lg"]'



class createRewardPage { 
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
        cy.get(createNewRewardButton).should('be.visible').should('be.enabled')
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
        cy.get(dashboards).should('not.exist')
        cy.get(reports).should('not.exist')
        cy.get(inventory).should('not.exist')
        cy.get(catalogues).should('not.exist')
        cy.get(campaigns).should('not.exist')
        cy.get(loyalty).should('not.exist')
        cy.get(rules).should('not.exist')
        cy.get(merchants).should('not.exist')
        return this
    }

    //verify url
    verifyUrl() {
    for(var value in url) {
        cy.visit(`${originUrl}${url[value]}`)
        cy.get(layoutContent).should('be.visible').contains('403 Forbidden')
    }
      return this

    }

    // input info of course
    inputInfo(name) {
        cy.get(nameField).type(name)
    }

    // click to Next button
    clickToNext() {
        cy.get(nextBtn).click()
    }

    // check valid period includes start date and end date
    checkValidPeriod() {
        cy.get(startDateField).should('be.visible').should('be.enabled')
        cy.get(endDateField).should('be.visible').should('be.enabled')
    }


    selectValidPeriod() {
    
    //    // cy.get(startDateField).clear({force: true})
    //     // cy.get(endDateField).title('eq', 'March 29, 2021').click()
    //     //cy.get(endDateField).contains('15').click()
    //     this.clickToNext()
        //cy.get(startDateField).click().type(Cypress.moment().format('MMM DD, YYYY'))
        // cy.get(startDateField).each(randomElement => {
        //     cy.wrap(randomElement).click({force: true});
        // });

        // cy.get(endDateField).each(randomElement => {
        //     cy.wrap(randomElement).click({force: true});
        // });
        //cy.get(startDateField).click().should('have.value', Cypress.moment().format('DD MM YYYY'))
       cy.get(startDateField).click()
    //    const $el = await cy.find(calendarBody) 
    //    if($el.length > 0) {
    //        cy.find("March 17, 2021").click()
    //    }
    cy.get('body').then(($body) => {
        if ($body.find(startDateField).length > 0) {
            cy.contains('15').click()
        }
        })

        cy.get(endDateField).click()
        cy.get('body').then(($body) => {
            if ($body.find(startDateField).length > 0) {
                cy.contains('18').click()
            }
        })
        this.clickToNext()
        cy.get('span').contains('Launch').click()
       
    }
}



export default createRewardPage