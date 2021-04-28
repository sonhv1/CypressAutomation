import BasePage from "./BasePage";
import RewardPage from "./RewardPage";

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
    this.clickElement(this.locators.rewardMenu);
    return new RewardPage;
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
