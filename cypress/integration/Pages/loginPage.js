/// <reference types = "Cypress" />
import BasePage from "./BasePage";
import HomePage from './HomePage';



class LoginPage extends BasePage {
  constructor() {
    super();
    this.locators = {
      emailField: '#email',
      passwordField: '#password',
      loginBtn: '.ant-btn',
      email: "reward_admin@dashboard.com",
      password: "reward_admin",
      adminEmail: "admin@dashboard.com",
      adminPassword: "admin1234"
    };
  }

  login() {
    this.sendKeyLocator(this.locators.emailField, this.locators.email);
    this.sendKeyLocator(this.locators.passwordField, this.locators.password);
    this.clickLoginButton();
    return new HomePage;
  }

  loginAsAdmin() {
    this.sendKeyLocator(this.locators.emailField, this.locators.adminEmail);
    this.sendKeyLocator(this.locators.passwordField, this.locators.adminPassword);
    this.clickLoginButton();
    return new HomePage;
  }

  clickLoginButton() {
    this.clickElement(this.locators.loginBtn);
    return new HomePage();
  }
}

export default LoginPage;
