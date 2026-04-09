 export class LoginPage
 {
     constructor(page)
     {
        this.page=page
      //  this.registerLink= page.locator("//input[@value='Register']")
        this.userName= page.locator("//input[@name='username']")
        this.password= page.locator("//input[@name='password']")
        this.loginButton=page.locator("//input[@value='Log In']")
     }


    //    async clickOnRegisterLink()
    //    {
    //       await this.registerLink.click()
    //    }

     async loginToApplication(username,password)
     {
           await this.userName.fill(username)
           await this.password.fill(password)
            await this.loginButton.click()
           
     }
 }