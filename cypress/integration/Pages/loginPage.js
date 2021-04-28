/// <reference types = "Cypress" />
import BasePage from './BasePage';
import DashboardPage from './dashboardPage';

class LoginPage extends BasePage{
  constructor() {
    this.locators = {
      email: "#email",
      password: "#password",
      loginBtn: ".ant-btn",
    };
  }

  login() {
    this.sendKeyLocator(email,this.data.email);
    this.sendKeyLocator(password, this.data.password);
    this.clickLoginButton();
    return this;
  }

  loginAsAdmin() {
    this.sendKeyLocator(email,this.data.adminEmail);
    this.sendKeyLocator(password, this.data.adminPassword);
    this.clickLoginButton();
    return this;
  }

  clickLoginButton() {
    this.clickElement(this.locators.loginBtn);
    return new DashboardPage()
  }

}

export default LoginPage;
