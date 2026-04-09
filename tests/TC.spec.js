// import{test,expect} from '@playwright/test'
//  import { HomePage } from '../pageobjects/HomePage'
//   import { RegistrationPage } from '../pageobjects/RegistrationPage'
  import { POManager } from '../pageobjects/POManager'
 // import testData from '../utils/parabank.json' assert {type :'json'}
  import { customtest as test,expect } from '../fixtures/testfuxture,'

//  test('TCRegister',async ({page})=>
//  {
        //   const poManager =new POManager(page)
              //    const homepage= poManager.getHomePage()
//             const homepage=new HomePage(page)
//              await homepage.goTo()
//              await homepage.clickOnSigninButton()
                      //  const registrationpage=   poManager.getRegistrationPage()
//              const registrationpage= new RegistrationPage(page)
//              await registrationpage.registerNewUser('ravi','peter','delhi','saket','delhi','110011','1234567','333333','javasc1','asdf')
//                registrationpage.RegisterButtonClick()
              
//                expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//                await page.waitForTimeout(2000)
//  }
//  )


//  for(  const    data  of testData)
//  {
//   test(`TCRegister ${data.username}`,async ({page})=>
//  {
           //   const poManager =new POManager(page)
              //    const homepage= poManager.getHomePage()
//            // const homepage=new HomePage(page)
//              await homepage.goTo()
//              await homepage.clickOnSigninButton()
              //  const registrationpage=   poManager.getRegistrationPage()
//             // const registrationpage= new RegistrationPage(page)
//              await registrationpage.registerNewUser(
//                            data.firstname,
//                            data.lastname,
//                            data.address,
//                            data.city,
//                            data.state,
//                            data.zipcode,
//                            data.phonenumber,
//                            data.ssn,
//                            data.username,
//                            data.password,
//                            data.confirmpassword
//              )


//                registrationpage.RegisterButtonClick()
              
//                expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
//                await page.waitForTimeout(2000)
//  }
//  )
// }


 
   test.describe.parallel('parabank test',()=>{

   
  test('@smokeTCRegister',async ({page, testdataForregistration})=>
 {
           const poManager =new POManager(page)
                  const homepage= poManager.getHomePage()
           // const homepage=new HomePage(page)
                    
             await homepage.goTo()
             await homepage.clickOnSigninButton()
            
             const registrationpage=   poManager.getRegistrationPage()
           //  const registrationpage= new RegistrationPage(page)
             await registrationpage.registerNewUser(
                           testdataForregistration.firstname,
                           testdataForregistration.lastname,
                           testdataForregistration.address,
                           testdataForregistration.city,
                           testdataForregistration.state,
                           testdataForregistration.zipcode,
                           testdataForregistration.phonenumber,
                           testdataForregistration.ssn,
                           testdataForregistration.username,
                           testdataForregistration.password,
                           testdataForregistration.confirmpassword
             )


               registrationpage.RegisterButtonClick()
              
               expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
               await page.waitForTimeout(2000)
 }
 )

 test('@smoke@regressionlogin',async({page, testdataForregistration})=>
{
    const poManager= new POManager(page)
    const homePage=  poManager.getHomePage()
     const loginPage= poManager.getLoginPage()
        await homePage.goTo()
     await loginPage.loginToApplication(
          testdataForregistration.username,
          testdataForregistration.password 

     )
    //  expect(page).toHaveURL()
    //  await page.waitForTimeout(2000)

})

})
