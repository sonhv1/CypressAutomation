// /// <reference types="Cypress" />

// import LoginPage from "../Pages/LoginPage";



// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false;
// });

// beforeEach(() => {
//   cy.visit("https://www.perxtech.io/dashboard");
// });

// describe("Upload a file in bulk list", () => {
//   const loginPage = new LoginPage();
//   //--------------------------------------------------------------------------------------

//   it("Ensure that the logged in user has sufficient permission \
//         to visit the builk file upload page and has the ability to upload.", () => {
//     const homePage = loginPage.loginAsAdmin();
//     const bulkActionPage = homePage.openBulkActionMenu();
//     bulkActionPage.clickUploadButton()
//     .uploadCsvFile()
//     .clickPopupUploadButton()
//     .verifyPopupUploadButtonDisable();

//     bulkActionPage.clickUploadButton()
//     .uploadXlsxFile()
//     .clickPopupUploadButton()
//     .verifyPopupUploadButtonDisable();

//     bulkActionPage.clickUploadButton()
//     .uploadTxtFile()
//     .clickPopupUploadButton()
//     .verifyPopupUploadButtonDisable();

//     cy.log('=========Upload invalid file=========')
//     this.data.forEach((filePath) => {
//       cy.log("Upload invalid file: " + filePath.path);
//       bulkPage.clickUploadButton()
//         .uploadInvalidFile(filePath.path)
//         .verifyPopupUploadButtonDisable();
//     });
//   });

//   // it("Form upload should only accept from the accepted file list (.txt, .xlsx, .csv).", () => {
//   //   const homePage = loginPage.loginAsAdmin();
//   //   const bulkActionPage = homePage.cli
//   //   homePage.verifyUrl();
//   // });

//   // it("After a successful upload, the file list should reflect the newly uploaded file", () => {
//   //   const homePage = loginPage.loginAsAdmin();
//   //   homePage.verifyRewardHeader();
//   //   homePage.verifyUrl();
//   // });
// });
