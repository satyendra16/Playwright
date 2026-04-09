import { customtest as test, expect } from '../fixtures/testfuxture'
import { POManager } from '../pageobjects/POManager'

test.describe.parallel('Open New Account Tests', () => {

  test('@smoke-openaccount', async ({ page, testdataForregistration }) => {
    const poManager = new POManager(page)
    
    // Navigate to home page
    const homePage = poManager.getHomePage()
    await homePage.goTo()
    
    // Login with test data
    const loginPage = poManager.getLoginPage()
    await loginPage.loginToApplication(
      testdataForregistration.username,
      testdataForregistration.password
    )
    
    // Navigate to Open Account page
    const openAccountPage = poManager.getOpenAccountPage()
    
    // Select account type as SAVINGS
    await openAccountPage.selectAccountType('SAVINGS')
    
    // Select account to transfer funds from (you can dynamically pick one)
    await openAccountPage.selectTransferAccount('14121')
    
    // Click Open New Account button
    await openAccountPage.clickOpenNewAccountButton()
    
    // Verify account was opened successfully
    expect(await openAccountPage.isAccountOpenedSuccessfully()).toBe(true)
    
    // Get and verify new account number is generated
    const newAccountNumber = await openAccountPage.getNewAccountNumber()
    expect(newAccountNumber).toBeTruthy()
    expect(newAccountNumber.length).toBeGreaterThan(0)
  })

  test('@regression-openaccount-randomSelection', async ({ page, testdataForregistration }) => {
    const poManager = new POManager(page)
    
    // Navigate to home page
    const homePage = poManager.getHomePage()
    await homePage.goTo()
    
    // Login with test data
    const loginPage = poManager.getLoginPage()
    await loginPage.loginToApplication(
      testdataForregistration.username,
      testdataForregistration.password
    )
    
    // Navigate to Open Account page
    const openAccountPage = poManager.getOpenAccountPage()
    
    // Select account type as SAVINGS
    await openAccountPage.selectAccountType('SAVINGS')
    
    // Randomly select from available accounts (14121, 14343, 14787, 14898)
    const accounts = ['14121', '14343', '14787', '14898']
    const randomAccount = accounts[Math.floor(Math.random() * accounts.length)]
    
    await openAccountPage.selectTransferAccount(randomAccount)
    
    // Click Open New Account button
    await openAccountPage.clickOpenNewAccountButton()
    
    // Verify account was opened successfully
    expect(await openAccountPage.isAccountOpenedSuccessfully()).toBe(true)
    
    // Get and verify new account number is generated
    const newAccountNumber = await openAccountPage.getNewAccountNumber()
    expect(newAccountNumber).toBeTruthy()
  })

})
