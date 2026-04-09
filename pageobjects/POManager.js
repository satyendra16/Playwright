import { HomePage } from "./HomePage";
import { RegistrationPage } from "./RegistrationPage";
import { LoginPage } from "./LoginPage";
import { OpenAccountPage } from "./OpenAccountPage";
 export class POManager
 {
      constructor(page)
      {
          this.page=page
          this.homepage=new HomePage(this.page)
          this.registrationpage=new RegistrationPage(this.page)
         this.loginpage  = new LoginPage(this.page)
         this.openaccountpage = new OpenAccountPage(this.page)
      }

      getHomePage()
      {
          return this.homepage
      }
      
      getRegistrationPage()
      {
         return this.registrationpage
      }

       getLoginPage()
       {
         return this.loginpage
       }

       getOpenAccountPage()
       {
         return this.openaccountpage
       }
 }