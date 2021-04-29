/// <reference types="Cypress" />

import LoginPage from "../Pages/LoginPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.visit("https://www.perxtech.io/dashboard");
});

describe("Creating a reward", () => {
  const loginPage = new LoginPage();

  //--------------------------------------------------------------------------------------

  //   it("Ensure that a logged in user has sufficient permission to create a reward", () => {
  //     const homePage = loginPage.login();
  //     const rewardPage = homePage.openRewardPage();
  //     rewardPage.verifyRewardUrl();
  //     rewardPage.clickCreateNewButton();
  //     rewardPage.verifyCreateNewRewardUrl();
  //   });

  //   it("A non-authorized user should not have access to the reward detail/edit page if he tries to access directly from the URL.", () => {
  //     cy.visit("https://dashboard.perxtech.io/p/rewards/edit/749");
  //     cy.url().should("not.include", "p/rewards/edit");
  //   });

  //   it("Clicking Create New button should lead to reward creation page", () => {
  //     const homePage = loginPage.login();
  //     const rewardPage = homePage.openRewardPage();
  //     rewardPage.verifyRewardUrl();
  //     rewardPage.clickCreateNewButton();
  //     rewardPage.verifyCreateNewRewardUrl();
  //   });

  //   it("A reward validity period should have both start and end dates", () => {
  //     const homePage = loginPage.login();
  //     const rewardPage = homePage.openRewardPage();
  //     rewardPage.verifyEditRewardUrl
  //     rewardPage.clickCreateNewButton();
  //     rewardPage.verifyCreateNewRewardUrl()
  //     rewardPage.verifyStartDate();
  //     rewardPage.verifyEndDate();
  //   });

  // it("A successful submission only happens when the payload contains all mandatory information\
  //     Submit successfully when reward name and end date is not empty", ()=> {
  //   const homePage = loginPage.login();
  //   const rewardPage = homePage.openRewardPage();
  //   rewardPage.clickCreateNewButton().inputRewardName("Reward 1");
  //   rewardPage.clickSelectEndDate();
  //   rewardPage.chooseDate("April 29, 2021");
  // })

  // it("Error message displayed when reward name is empty", ()=> {
  //   const homePage = loginPage.login();
  //   const rewardPage = homePage.openRewardPage();
  //   rewardPage.clickCreateNewButton();
  //   rewardPage.clickNextButton();
  //   rewardPage.verifyNameErrorMessage();
  // })

  it("Error message displayed when end date empty", () => {
    const homePage = loginPage.login();
    const rewardPage = homePage.openRewardPage();
    rewardPage.clickCreateNewButton().inputRewardName("Reward 1");
    rewardPage.clickSelectEndDate();
    rewardPage.verifyEndDateNull('');
    rewardPage.clickNextButton();
    rewardPage.clickNextButton();
    rewardPage.verifyEndDateErrorMessage('Start date & end date required')
  });
});
