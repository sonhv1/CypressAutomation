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
      endDate: (day) => `td[title = "${day}"]`,
    };
    
  }

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

  inputRewardName(name) {
    this.sendKeyLocator(this.locators.nameField, name);
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

  verifyEndDateNull(string) {
    cy.get(this.locators.selectEndDateLocator).invoke('val')
    .then(sometext => expect(sometext).equals(string));
  }

  verifyEndDateErrorMessage(string) {
    this.verifyElementVisibleByString(string);
  }
}

export default RewardPage;
