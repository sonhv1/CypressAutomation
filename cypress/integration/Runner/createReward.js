/// <reference types="Cypress" />

import LoginPage from "../Pages/LoginPage";

// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false;
// });

beforeEach(() => {
  cy.visspecify("https://www.perxtech.io/dashboard");
});

describe("Creating a reward", () => {
  const loginPage = new LoginPage();
  

  //--------------------------------------------------------------------------------------

    specify("Ensure that a logged in user has sufficient permission to create a reward", () => {
      const homePage = loginPage.login();
      const rewardPage = homePage.openRewardPage();
      rewardPage.verifyRewardUrl();
      rewardPage.clickCreateNewButton();
      rewardPage.verifyCreateNewRewardUrl();
    });

    specify("A non-authorized user should not have access to the reward detail/edit page if he tries to access directly from the URL.", () => {
      cy.visspecify("https://dashboard.perxtech.io/p/rewards/edit/749");
      cy.url().should("not.include", "p/rewards/edit");
    });

    specify("Clicking Create New button should lead to reward creation page", () => {
      const homePage = loginPage.login();
      const rewardPage = homePage.openRewardPage();
      rewardPage.verifyRewardUrl();
      rewardPage.clickCreateNewButton();
      rewardPage.verifyCreateNewRewardUrl();
    });

    specify("A reward validity period should have both start and end dates", () => {
      const homePage = loginPage.login();
      const rewardPage = homePage.openRewardPage();
      rewardPage.verifyEditRewardUrl
      rewardPage.clickCreateNewButton();
      rewardPage.verifyCreateNewRewardUrl()
      rewardPage.verifyStartDate();
      rewardPage.verifyEndDate();
    });

  specify("A successful submission only happens when the payload contains all mandatory information\
      Submit successfully when reward name and end date is not empty", ()=> {
    const homePage = loginPage.login();
    const rewardPage = homePage.openRewardPage();
    rewardPage.clickCreateNewButton().inputRewardName("Reward 1");
    rewardPage.clickSelectEndDate();
    rewardPage.chooseDate("April 29, 2021");
  })

  specify("Error message displayed when reward name is empty", ()=> {
    const homePage = loginPage.login();
    const rewardPage = homePage.openRewardPage();
    rewardPage.clickCreateNewButton();
    rewardPage.clickNextButton();
    rewardPage.verifyNameErrorMessage();
  })

  specify("Error message displayed when end date empty", () => {
    const homePage = loginPage.login();
    const rewardPage = homePage.openRewardPage();
    rewardPage.clickCreateNewButton().inputRewardName("Reward 1");
    rewardPage.clickSelectEndDate();
    rewardPage.verifyEndDateNull('');
    rewardPage.clickNextButton()
    rewardPage.clickNextButton();
    rewardPage.verifyEndDateErrorMessage('Start date & end date required')
  });

  specify("If the reward is of private type: All fields related to catalogues,\
      labels, brands, tags and categories should disappear.", () => {
    const homePage = loginPage.login();
    const rewardPage = homePage.openRewardPage();
    rewardPage.clickCreateNewButton().inputRewardName("Reward 1");
    rewardPage.clickSelectEndDate();
    rewardPage.chooseDate("May 29, 2021");
    rewardPage.checkPrivateType();
    rewardPage.clickNextButton();
    rewardPage.clickNextButton();
    
  });
});
