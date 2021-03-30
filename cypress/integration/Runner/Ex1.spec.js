/// <reference types="cypress" />

import dashboardPage from "../Pages/dashboardPage";
import loginPage from "../Pages/loginPage";
import createRewardPage from "../Pages/createRewardPage";

describe('Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    it('TestLogin', ()=> {
        const login = new loginPage()
        login.visit()
        const crp = new createRewardPage()
        login.login('reward_admin@dashboard.com', 'reward_admin');
        crp.checkTitle('Perx | Rewards')
    })


    it('testRole', () => {
        const login = new loginPage()
        login.visit()
        const crp = new createRewardPage()
        login.login('reward_admin@dashboard.com', 'reward_admin')
        crp.checkRole()
    })

    it('testCreateNewReward', () => {
        const login = new loginPage()
        login.visit()
        const crp = new createRewardPage()
        login.login('reward_admin@dashboard.com', 'reward_admin')
        crp.createReward()
    })
  
})

