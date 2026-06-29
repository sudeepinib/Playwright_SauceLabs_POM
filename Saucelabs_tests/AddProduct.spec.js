import {test,expect} from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage'
import { LoginPage } from '../pages/LoginPage'  

test.describe('Products page', ()=>{

   test.beforeEach(async({page})=>{
        const Login=new LoginPage(page)
        await Login.gotoLoginPage('https://www.saucedemo.com/')
        await Login.LoginPage("standard_user","secret_sauce")
        await expect(page.getByText('Products')).toBeVisible()
    })
    test('Add product',async({page})=>{
        //await page.pause()
        const product=new InventoryPage(page)
        let cartcount= await product.getCartCount()
        await product.addProduct('sauce-labs-backpack')
        console.log("countis ",product.getCartCount())
        expect( await product.getCartCount()).toBeGreaterThan(cartcount)
        
        //const cartCount = await product.getCartCount();

        //await product.addProduct('sauce-labs-backpack');

        //const updatedCartCount = await product.getCartCount();

        //expect(updatedCartCount).toBeGreaterThan(cartcount);
    })

})