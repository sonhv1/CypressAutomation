/// <reference types="cypress" />

//import dashboardPage from "../Pages/dashboardPage";
import loginPage from "../Pages/loginPage";
import createRewardPage from "../Pages/createRewardPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

beforeEach(() => {
    cy.visit("https://www.perxtech.io/dashboard");
  });
 
// describe('Test authorization of user roles and groups', () => {
//     it('Test permission', ()=> {
//         const login = new loginPage()
//         //login.visit()
//         const crp = new createRewardPage()
//         login.login('reward_admin@dashboard.com', 'reward_admin');
//         crp.checkTitle('Perx | Rewards')
//         crp.checkAuthorization()
//         crp.verifyUrl()
//     })
// })


describe('Test Creating a reward', () => {

    // it('TestLogin', ()=> {
    //     const login = new loginPage()
    //     //login.visit()
    //     const crp = new createRewardPage()
    //     login.login('reward_admin@dashboard.com', 'reward_admin');
    //     crp.checkTitle('Perx | Rewards')
    // })
    

    // it('testRole', () => {
    //     const login = new loginPage()
    //     const crp = new createRewardPage()
    //     login.login('reward_admin@dashboard.com', 'reward_admin')
    //     crp.checkRole()
    // })

    // it('testCreateNewReward', () => {
    //     const login = new loginPage()
    //     //login.visit()
    //     const crp = new createRewardPage()
    //     login.login('reward_admin@dashboard.com', 'reward_admin')
    //     crp.createReward()
    // })

    // it('TestAccessRole', ()=> {
    //     const login = new loginPage()
    //     //login.visit()
    //     const crp = new createRewardPage()
    //     login.login('reward_admin@dashboard.com', 'reward_admin')
    // })

    it('Test Reward form', ()=> {
        const login = new loginPage()
        //login.visit()
        const crp = new createRewardPage()
        login.login('reward_admin@dashboard.com', 'reward_admin')
        crp.createReward()
        crp.inputInfo('Reward1')
        crp.clickToNext()
        crp.checkValidPeriod()
        crp.selectValidPeriod()
    })
})

// describe('Test Upload a file in bulk list', () => {
//     it('TestLogin', ()=> {
//         const login = new loginPage()
//         //login.visit()
//         const crp = new createRewardPage()
//         login.login('reward_admin@dashboard.com', 'reward_admin')
//         crp.checkTitle('Perx | Rewards')
//     })

// })
