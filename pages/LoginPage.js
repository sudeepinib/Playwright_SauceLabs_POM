//const test = require("node:test")

const{expect} =require('@playwright/test')
exports.LoginPage =class LoginPage
{
    constructor(page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator("#password")
        this.login=page.getByRole('button',{name:"Login"})
        
    }

    async gotoLoginPage(url){
        await this.page.goto(url)
    }

    async LoginPage(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.login.click()

    }
}
//module.exports=LoginPage