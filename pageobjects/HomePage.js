 export   class HomePage
    {
        constructor(page)
        {
                 this.page= page;
                 this.signInbutton=page.locator("//a[normalize-space()='Register']")
        }

         async goTo()
          {
            await this.page.goto("/")
          }

          async clickOnSigninButton()
          {
             await this.signInbutton.click()
          }
    }