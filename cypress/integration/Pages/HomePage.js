import BasePage from "./BasePage";
import RewardPage from "./RewardPage";
import BulkActionsPage from './BulkActionsPage';

class HomePage extends BasePage {
  constructor() {
    super();
    this.locators = {
      dashboardMenu: 'li[data-key="business_intelligence"]',
      loyaltyMenu: 'li[data-key="loyalties"]',
      campaignMenu: 'li[data-key="campaigns"]',
      merchantMenu: 'li[data-key="merchants"]',
      bulkActionMenu: 'li[data-key="bulk_actions"]',
      rewardMenu: 'li[data-key="rewards"]',
      layoutContent: 'main[class="ant-layout-content"]',
      rewardHeader: 'main[class="ant-layout-content"] strong'
    };
    this.url = {
      dashboard: "p/business_intelligence/overview",
      campaign: "p/campaigns/list",
      loyalty: "p/loyalty/list",
      merchants: "p/merchants/list",
      //bulkActions: "p/bulkaction",
      //customer: "p/customers/list",
    };
    this.originUrl = "https://dashboard.perxtech.io/dashboard/";
  }

  //verify url
  verifyUrl() {
    for (var value in this.url) {
      cy.visspecify(`${this.originUrl}${this.url[value]}`);
      cy.get(this.locators.layoutContent)
        .should("be.visible")
        .should('contain', '403 Forbidden')
    }
    return this;
  }
 
  openRewardPage() {
    this.clickElement(this.locators.rewardMenu);
    return new RewardPage();
  }

  openLoyaltyMenu() {
    this.clickElement(loyaltyMenu);
    return this;
  }

  openCampaignMenu() {
    this.clickElement(campaignMenu);
    return this;
  }

  openBulkActionMenu() {
    this.clickElement(this.locators.bulkActionMenu);
    return new BulkActionsPage();
  }

  verifyRewardHeader() {
    cy.get(this.locators.rewardHeader).should('be.visible')
  }
}

export default HomePage;
