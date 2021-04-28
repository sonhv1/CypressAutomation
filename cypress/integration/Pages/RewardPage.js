/// <reference types = "Cypress" />
import BasePage from './BasePage';

// var url = {
//     dashboardUrl: "business_intelligence/overview",
//     reportUrl: "reports",
//     inventoryUrl: "inventories",
//     catalogueUrl: "catalogues",
//     campaignUrl: "campaigns",
//     loyaltyUrl: "loyalty/list"
// }

// Locator 

var nameField = ':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > div > .ant-input'
var nextBtn = '.BottomBar__Content-sc-1dqvwjb-1 > div > .ant-btn-primary'
var createNewRewardButton = 'button[type=button]'
var dashboards = '[data-key="business_intelligence"] > a'
var rules = '[data-key="transaction_rules"] > a'
var layoutContent = '.ant-layout-content'
var dashboardUrl = 'https://dashboard.perxtech.io/dashboard/p/business_intelligence/overview'
var startDateField = '[style="margin-bottom: 10px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-fzoYkl > .sc-fzomME > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .ant-calendar-picker-input'
var endDateField = '[style="margin-bottom: 0px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-fzoYkl > .sc-fzomME > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .ant-calendar-picker-input'
var calendarBody = '//tbody[@class="ant-calendar-tbody"]'
var date = 'ant-calendar-date'
var selectDate = '[style="margin-bottom: 10px;"] > .ant-col > .ant-form-item-control > .ant-form-item-children > .sc-fzoYkl > .sc-fzomME > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .anticon > svg'
var calendarClear = '//i[@class="anticon anticon-close-circle ant-calendar-picker-clear"]';
var cc = '//*[@id="root"]/section/section/main/span/div/div[3]/form/div[1]/div/div/div/div[4]/div[2]/div[1]/div[2]/div/span/div/div[1]/div/span[1]/div/i[2]'
var launchBtn = 'button[type="submit"]'
var editBtn = '//button[@class="ant-btn ant-btn-primary ant-btn-lg"]'
var rewardName = '[data-testid=reward_name] > .sc-fzomME'
var validPeriod = '.sc-fznKkj > :nth-child(1) > :nth-child(8) > .sc-fzomME > :nth-child(1) > .Label-sc-3w3uon-0'
var privateRadioBtn = 'input[value="private"]'
var brandField = ':nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select-show-arrow > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'
var tagsField = ':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select-show-arrow > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'
var categoriesField = ':nth-child(9) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .css-kxm09t-container > .css-g0vauy-control > .css-1hwfws3'
var labelsField = ':nth-child(10) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .css-kxm09t-container > .css-g0vauy-control > .css-1hwfws3'
var uploadBtn = 'button[class="ant-btn ant-btn-primary ant-btn-lg"]'
class RewardPage extends BasePage{ 
    constructor() {
        super()
        this.locators = {
            createNewRewardButton: 'button[type=button]',
            rewardUrl: "/dashboard/p/rewards/list",
            createNewRewardUrl: "/dashboard/p/rewards/create",
            editRewardUrl: "/p/rewards/edit",
        }
    }

    //verify url
    // verifyUrl() {
    // for(var value in url) {
    //     cy.visit(`${originUrl}${url[value]}`)
    //     expect(cy.get(layoutContent)).should('be.visible').contains('403 Forbidden')
    // }
    //   return this

    // }

    // input info of course
    // inputInfo(name) {
    //     cy.get(nameField).type(name)
    // }

    // // click to Next button
    // clickToNext() {
    //     cy.get(nextBtn).click()
    // }

    // // check valid period includes start date and end date
    // checkValidPeriod() {
    //     cy.get(startDateField).should('be.visible').should('be.enabled')
    //     cy.get(endDateField).should('be.visible').should('be.enabled')
    // }


    // selectValidPeriod() {
    
    // //    // cy.get(startDateField).clear({force: true})
    // //     // cy.get(endDateField).title('eq', 'March 29, 2021').click()
    // //     //cy.get(endDateField).contains('15').click()
    // //     this.clickToNext()
    //     //cy.get(startDateField).click().type(Cypress.moment().format('MMM DD, YYYY'))
    //     // cy.get(startDateField).each(randomElement => {
    //     //     cy.wrap(randomElement).click({force: true});
    //     // });

    //     // cy.get(endDateField).each(randomElement => {
    //     //     cy.wrap(randomElement).click({force: true});
    //     // });
    //     //cy.get(startDateField).click().should('have.value', Cypress.moment().format('DD MM YYYY'))
    //    cy.get(startDateField).click()
    // //    const $el = await cy.find(calendarBody) 
    // //    if($el.length > 0) {
    // //        cy.find("March 17, 2021").click()
    // //    }
    //     cy.get('body').then(($body) => {
    //     if ($body.find(startDateField).length > 0) {
    //         cy.contains('15').click()
    //     }
    //     })

    //     cy.get(endDateField).click()
    //     cy.get('body').then(($body) => {
    //         if ($body.find(startDateField).length > 0) {
    //             cy.contains('18').click()
    //         }
    //     })

    //     this.clickToNext()

    //     if(this.verifyMandatoryField()) () => {
    //         cy.get(launchBtn).click()
    //     }

    // }

    // verifyMandatoryField() {
    //     cy.get(rewardName).should(($div) => {
    //         const text = $div.text()
    //         expect(text).not.to.null
    //     })

    //     cy.get(validPeriod).should(($div) => {
    //         const text = $div.text()
    //         expect(text).not.to.null
    //     })
    // }

    // checkPrivateType() {
    //     cy.get(privateRadioBtn).should('not.be.checked').click()
    //     cy.get(brandField).should('not.be.visible').should('not.be.enabled')
    //     cy.get(tagsField).should('not.be.visible').should('not.be.enabled')
    //     cy.get(categoriesField).should('not.be.visible').should('not.be.enabled')
    //     cy.get(labelsField).should('not.be.visible').should('not.be.enabled')
    // }

    clickCreateNewButton() {
        this.clickElement(this.locators.createNewRewardButton)
        return new RewardPage();
    }

    verifyRewardUrl() {
        this.verifyIncludeUrl(this.locators.rewardUrl)
    }

    verifyCreateNewRewardUrl() {
        this.verifyIncludeUrl(this.locators.createNewRewardUrl)
    }

    verifyEditRewardUrl() {
        this.verifyIncludeUrl(this.locators.editRewardUrl)
    }

    verifyStartDate() {
        this.verifyElementVisibleByString('Start Date')
    }

    verifyEndDate() {
        this.verifyElementVisibleByString('End Date')
    }

}




export default RewardPage