import BasePage from "./BasePage";

class BulkActionsPage extends BasePage {
    constructor() {
        super();
        this.locators = {
            uploadButton: 'button[type="button"]',
            dropBox: '.ant-upload-drag-container',
            fileCsv: 'sample_issue_vouchers.csv',
            fileXlsx: 'sample_issue_vouchers.xlsx',
            fileTxt: 'sample_issue_vouchers.txt',
            firstActionName: 'tr[class="ant-table-row ant-table-row-level-0"]:nth-of-type(1) td:nth-of-type(1) div:nth-of-type(2)',
            popupUploadButton: '.ant-modal-footer > .ant-btn-primary'

        }
    }

    clickUploadButton() {
        this.clickElement(this.locators.uploadButton)
        return this
    }

    uploadCsvFile() {
        this.uploadFile(this.locators.dropBox, this.locators.fileCsv)
        return this
    }

    uploadXlsxFile() {
        this.uploadFile(this.locators.dropBox, this.locators.fileXlsx)
        return this
    }

    uploadTxtFile() {
        this.uploadFile(this.locators.dropBox, this.locators.fileTxt)
        return this
    }

    clickPopupUploadButton() {
        this.clickElement(this.locators.popupUploadButton);
        return this;
    }

    
    verifyUploadStatus() {
        return cy.contains('File uploaded');
    }
    verifyPopupUploadButtonDisable() {
        return cy.get('button[disabled][type ="button"]');
    }

    // verifyIdFileIncreases() {
    //     cy.get(this.locators.firstActionName)
    //         .then(($text) => {
    //             const pattern = /\d+/i;
    //             const textElement = $text.text();
    //             let idNumberBeforeUpload = textElement.match(pattern);
    //             idNumberBeforeUpload = parseInt(idNumberBeforeUpload[0]);
    //             this.clickUploadButton()
    //                 .uploadCsvFile()
    //                 .clickPopupUploadButton()
    //                 .verifyUploadStatus();
    //             cy.waspecify(1000);
    //             cy.get(this.locators.firstActionName)
    //                 .then(($text2) => {
    //                     const textElement2 = $text2.text();
    //                     let idNumberAfterUpload = textElement2.match(pattern);
    //                     idNumberAfterUpload = parseInt(idNumberAfterUpload[0]);
    //                     expect(idNumberAfterUpload).to.eq(idNumberBeforeUpload + 1)
    //                 });

    //         });
    // }

}
export default BulkActionsPage;