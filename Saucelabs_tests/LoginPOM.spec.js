import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import LoginData  from '../testData/LoginData.json'

test('Login',async({page})=>{
    const Login =new LoginPage(page)
    
    for(const user of LoginData.Users ){
    await Login.gotoLoginPage('https://www.saucedemo.com/')
    await Login.LoginPage(user.username,user.password)
    await expect(page.getByText(user.asserttext)).toBeVisible()
    }
     
})
