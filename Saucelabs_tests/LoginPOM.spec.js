import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import LoginData  from '../testData/LoginData.json'

/*test('Valid TestLogin using POM file',async({page})=>{
    
    const Login =new LoginPage(page)

    await  Login.gotoLoginPage('https://www.saucedemo.com/')
    await Login.LoginPage(LoginData.validUser.username,LoginData.validUser.password)
    await expect(page.getByText(LoginData.validUser.asserttext)).toBeVisible

})

test('InValid TestLogin using POM file',async({page})=>{
    
    const Login =new LoginPage(page)

    await  Login.gotoLoginPage('https://www.saucedemo.com/')
    await Login.LoginPage(LoginData.InvalidUser.username,LoginData.InvalidUser.password)
    await expect(page.getByText(LoginData.InvalidUser.asserttext)).toBeVisible

})*/
test('Login',async({page})=>{
    const Login =new LoginPage(page)
    
    for(const user of LoginData.Users ){
    await Login.gotoLoginPage('https://www.saucedemo.com/')
    await Login.LoginPage(user.username,user.password)
    await expect(page.getByText(user.asserttext)).toBeVisible()
    }
     
})