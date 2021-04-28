import BasePage from "./BasePage";

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
    };
  }

  openRewardPage() {
    this.clickElement();
    return this;
  }

  openLoyaltyMenu() {
    this.clickElement(loyaltyMenu);
    return this;
  }

  openCampaignMenu() {
      this.clickElement(campaignMenu)
      return this
  }

  clickBulkActionMenu() {
      this.clickElement(bulkActionMenu)
      return this
  }





}

export default HomePage;
