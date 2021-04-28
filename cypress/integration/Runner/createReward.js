/// <reference types="Cypress" />

import LoginPage from "../Pages/LoginPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.visit("https://www.perxtech.io/dashboard");
});

describe("Test authorization of user roles and groups", () => {
  const loginPage = new LoginPage();

  //--------------------------------------------------------------------------------------

  // it("Ensure that a logged in user has sufficient permission to create a reward", () => {
  //   const homePage = loginPage.login();
  //   const rewardPage = homePage.openRewardPage();
  //   rewardPage.verifyRewardUrl();
  //   rewardPage.clickCreateNewButton();
  //   rewardPage.verifyCreateNewRewardUrl();
  // });

  // it("A non-authorized user should not have access to the reward detail/edit page if he tries to access directly from the URL.", () => {
  //   cy.visit("https://dashboard.perxtech.io/p/rewards/edit/749");
  //   cy.url().should("not.include", "p/rewards/edit");
  // });

  // it("Clicking Create New button should lead to reward creation page", () => {
  //   const homePage = loginPage.login();
  //   const rewardPage = homePage.openRewardPage();
  //   rewardPage.verifyRewardUrl();
  //   rewardPage.clickCreateNewButton();
  //   rewardPage.verifyCreateNewRewardUrl();
  // });

  it("A reward validity period should have both start and end dates", () => {
    const homePage = loginPage.login();
    const rewardPage = homePage.openRewardPage();
    rewardPage.verifyEditRewardUrl
    rewardPage.clickCreateNewButton();
    rewardPage.verifyCreateNewRewardUrl()
    rewardPage.verifyStartDate();
    rewardPage.verifyEndDate();
  });
});

// describe("Test Creating a reward", () => {
//   it("testCreateNewReward", () => {
//     const login = new LoginPage();
//     const crp = new CreateRewardPage();
//     login.login();
//     crp.createReward();
//   });

//   it("TestAccessRole", () => {
//     const login = new LoginPage();
//     const crp = new CreateRewardPage();
//     login.login();
//   });

//   it("Test Reward form", () => {
//     const login = new LoginPage();
//     const crp = new CreateRewardPage();
//     login.login();
//     crp.createReward();
//     crp.inputInfo("Reward1");
//     crp.checkPrivateType();
//     crp.clickToNext();
//     crp.checkValidPeriod();
//     crp.selectValidPeriod();
//   });
// });

// describe("Test Upload a file in bulk list", () => {
//   it("Test ability to upload", () => {
//     const login = new LoginPage();
//     const dbp = new dashboardPage();
//     login.login("admin@dashboard.com", "admin1234");
//     dbp.checkAbilityToUpload();
//   });

//   it("Test verify format of file", () => {
//     const login = new LoginPage();
//     const dbp = new dashboardPage();
//     login.login("admin@dashboard.com", "admin1234");
//     dbp.checkAbilityToUpload();
//     dbp.checkFileFormat();
//   });
// });

// // async function test() {
// //     await driver.build()
// //     await
// // }
