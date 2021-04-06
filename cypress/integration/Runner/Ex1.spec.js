/// <reference types="Cypress" />

//import dashboardPage from "../Pages/dashboardPage";
import LoginPage from "../Pages/LoginPage";
import CreateRewardPage from "../Pages/CreateRewardPage";
import DashboardPage from "../Pages/DashboardPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

beforeEach(() => {
    cy.visit("https://www.perxtech.io/dashboard");
  });
 
describe('Test authorization of user roles and groups', () => {
    it('Test permission', ()=> {
        const login = new LoginPage()
        //login.visit()
        const crp = new CreateRewardPage()
        login.login();
        crp.checkTitle('Perx | Rewards')
        crp.checkAuthorization()
        crp.verifyUrl()
    })
})

describe('Test Creating a reward', () => {

    it('TestLogin', ()=> {
        const login = new LoginPage()
        const crp = new CreateRewardPage()
        login.login();
        crp.checkTitle('Perx | Rewards')
    })

    it('testRole', () => {
        const login = new LoginPage()
        const crp = new CreateRewardPage()
        login.login()
        crp.checkRole()
    })

    it('testCreateNewReward', () => {
        const login = new LoginPage()
        const crp = new CreateRewardPage()
        login.login()
        crp.createReward()
    })

    it('TestAccessRole', ()=> {
        const login = new LoginPage()
        const crp = new CreateRewardPage()
        login.login()
    })

    it('Test Reward form', ()=> {
        const login = new LoginPage()
        const crp = new CreateRewardPage()
        login.login()
        crp.createReward()
        crp.inputInfo('Reward1')
        crp.checkPrivateType()
        crp.clickToNext()
        crp.checkValidPeriod()
        crp.selectValidPeriod()
    })
})
 
describe('Test Upload a file in bulk list', () => {
    it('Test ability to upload', ()=> {
        const login = new LoginPage()
        const dbp = new dashboardPage()
        login.login('admin@dashboard.com', 'admin1234')
        dbp.checkAbilityToUpload()
    })

    it('Test verify format of file', ()=> {
        const login = new LoginPage()
        const dbp = new dashboardPage()
        login.login('admin@dashboard.com', 'admin1234')
        dbp.checkAbilityToUpload()
        dbp.checkFileFormat()
    })

})

// async function test() {
//     await driver.build()
//     await 
// }

