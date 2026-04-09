export class OpenAccountPage {
    constructor(page) {
        this.page = page;
        this.accountTypeDropdown = page.locator('#type');
        this.fromAccountDropdown = page.locator('#fromAccountId');
        this.openAccountButton = page.getByRole('button', { name: 'Open New Account' });
        this.successMessage = page.getByRole('heading', { name: 'Account Opened!' });
        this.newAccountNumber = page.locator('//p[contains(text(), "Your new account number:")]/following-sibling::p//a');
    }

    async selectAccountType(accountType) {
        await this.accountTypeDropdown.selectOption(accountType);
    }

    async selectTransferAccount(accountNumber) {
        await this.fromAccountDropdown.selectOption(accountNumber);
    }

    async clickOpenNewAccountButton() {
        await this.openAccountButton.click();
    }

    async isAccountOpenedSuccessfully() {
        return await this.successMessage.isVisible();
    }

    async getNewAccountNumber() {
        return await this.newAccountNumber.textContent();
    }
}
