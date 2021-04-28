/// <reference types="Cypress" />

//import dashboardPage from "../Pages/dashboardPage";
import LoginPage from "../Pages/LoginPage";
import CreateRewardPage from "../Pages/CreateRewardPage";
import DashboardPage from "../Pages/DashboardPage";
import HomePage from "../Pages/HomePage";
import RewardPage from "../Pages/RewardPage";
import { verify } from "cypress/types/sinon";

//Url
Url = {
  rewardUrl: "/dashboard/p/rewards/list",
  createNewRewardUrl: "/dashboard/p/rewards/create",
  editRewardUrl: "/p/rewards/edit",
};

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach(() => {
  cy.visit("https://www.perxtech.io/dashboard");
});

describe("Test authorization of user roles and groups", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const rewardPage = new RewardPage();
  //--------------------------------------------------------------------------------------

  it("Ensure that a logged in user has sufficient permission to create a reward", () => {
    homePage = loginPage.login();
    rewardPage = homePage.openRewardPage();
    rewardPage.verifyIncludeUrl(rewardUrl);
    rewardPage.clickCreateNewButton();
    rewardPage.verifyIncludeUrl(createNewRewardUrl);
  });

  it("A non-authorized user should not have access to the reward detail/edit page if he tries to access directly from the URL.", () => {
    cy.visit("https://dashboard.perxtech.io/p/rewards/edit/749");
    verifyNotIncludeUrl(editRewardUrl);
  });

  it("Clicking Create New button should lead to reward creation page", () => {
    homePage = loginPage.login();
    rewardPage = homePage.openRewardPage();
    rewardPage.verifyIncludeUrl(rewardUrl).clickCreateNewButton().verifyIncludeUrl(createNewRewardUrl)
  });

  it("A reward validity period should have both start and end dates", ()=> {
    homePage = loginPage.login();
    rewardPage = homePage.openRewardPage();
    rewardPage.verifyIncludeUrl(rewardUrl).clickCreateNewButton()
    .verifyIncludeUrl(createNewRewardUrl)

  })
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
