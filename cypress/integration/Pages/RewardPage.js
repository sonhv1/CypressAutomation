/// <reference types = "Cypress" />
import BasePage from "./BasePage";
class RewardPage extends BasePage {
  constructor() {
    super();
    this.locators = {
      createNewRewardButton: "button[type=button]",
      rewardUrl: "/dashboard/p/rewards/list",
      createNewRewardUrl: "/dashboard/p/rewards/create",
      editRewardUrl: "/p/rewards/edit",
      nextButton: ".BottomBar__Content-sc-1dqvwjb-1 > div > .ant-btn-primary",
      nameField: 'input[name="name_en"',
      selectEndDateLocator:
        ':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .common__FlexContainer-jgl043-7 > .ant-col > [style="display: flex; flex-flow: wrap;"] > .sc-fzqMAW > div > .ant-calendar-picker-input',
      date: 'td[role="gridcell"]',
      activeWeek: 'tr[class="ant-calendar-active-week"]',
      nextMonth:
        'td[class="ant-calendar-cell ant-calendar-next-month-btn-day"]',
      endDate: (day) => `td[title = "${day}"]`,
    };
  }

  //verify url
  // verifyUrl() {
  // for(var value in url) {
  //     cy.visit(`${originUrl}${url[value]}`)
  //     expect(cy.get(layoutContent)).should('be.visible').contains('403 Forbidden')
  // }
  //   return this

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

  //
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
    this.clickElement(this.locators.createNewRewardButton);
    return new RewardPage();
  }

  clickNextButton() {
    this.clickElement(this.locators.nextButton);
  }

  verifyRewardUrl() {
    this.verifyIncludeUrl(this.locators.rewardUrl);
  }

  verifyCreateNewRewardUrl() {
    this.verifyIncludeUrl(this.locators.createNewRewardUrl);
  }

  verifyEditRewardUrl() {
    this.verifyIncludeUrl(this.locators.editRewardUrl);
  }

  verifyStartDate() {
    this.verifyElementVisibleByString("Start Date");
  }

  verifyEndDate() {
    this.verifyElementVisibleByString("End Date");
  }

  inputRewardName() {
    this.sendKeyLocator(this.locators.nameField, "ZXZ");
  }

  verifyNameErrorMessage() {
    this.verifyElementVisibleByString("Rewards must have a name.");
  }

  clickSelectEndDate() {
    this.clickElement(this.locators.selectEndDateLocator);
  }

  chooseDate(date) {
    this.clickElement(this.locators.endDate(date));
  }
}

export default RewardPage;
