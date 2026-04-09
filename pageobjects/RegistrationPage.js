export  class RegistrationPage
  {
       constructor(page)
       {
          this.page=page
          this.firstName=page.locator("//input[@id='customer.firstName']")
          this.lastName=page.locator("//input[@id='customer.lastName']")
          this.address=page.locator("//input[@id='customer.address.street']")
          this.city=page.locator("//input[@id='customer.address.city']")
          this.state=page.locator("//input[@id='customer.address.state']")
          this.zipcode=page.locator("//input[@id='customer.address.zipCode']")
          this.phonenumber=page.locator("//input[@id='customer.phoneNumber']")
          this.ssn= page.locator("//input[@id='customer.ssn']")
          this.userName=page.locator("//input[@id='customer.username']")
          this.password=page.locator("//input[@id='customer.password']")
          this.confirm = page.locator("//input[@id='repeatedPassword']")

          this.registerbutton=page.locator("//input[@value='Register']")
       }


        async registerNewUser(fname,lname,address,city,state,zipcode,phone,ssn,username,pass)
        {
         await this.firstName.fill(fname)
         await this.lastName.fill(lname)
         await this.address.fill(address)
         await this.city.fill(city)
         await this.state.fill(state)
         await this.zipcode.fill(zipcode)
         await this.phonenumber.fill(phone)
         await this.ssn.fill(ssn)
         await this.userName.fill(username)
         await this.password.fill(pass)
         await this.confirm.fill(pass)
        }

        async RegisterButtonClick()
        {
             await this.registerbutton.click()
        }
  }