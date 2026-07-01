import {test,expect} from '@playwright/test'
import { InventoryPage } from '../pages/InventoryPage.js'
import { LoginPage } from '../pages/LoginPage'  
import { CartPage } from '../pages/CartPage'
import { CheckOutPage } from '../pages/CheckOutPage'

test.describe('Products page', ()=>{

   test.beforeEach(async({page})=>{
        const Login=new LoginPage(page)
        await Login.gotoLoginPage('https://www.saucedemo.com/')
        await Login.LoginPage("standard_user","secret_sauce")
        await expect(page.getByText('Products')).toBeVisible()
    })
    test('Add product',async({page})=>{
        const product=new InventoryPage(page)
        const verify=new CartPage(page)
        let cartcount= await product.getCartCount()
        await product.addProduct('sauce-labs-backpack')
        await product.addProduct('sauce-labs-bike-light')
        expect( await product.getCartCount()).toBeGreaterThan(cartcount)
        await verify.VerifyProduct('sauce Labs Backpack')
    })   
    
    test('Remove Product',async({page})=>{
        const product=new InventoryPage(page)
        await product.addProduct('sauce-labs-backpack')
            
        await product.removeProduct('sauce-labs-backpack')
    
        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible()
})

    test('CheckOut Products',async({page})=>{
        const product=new InventoryPage(page)
        const checkout=new CheckOutPage(page)
        const cart=new CartPage(page)
        await product.addProduct('sauce-labs-backpack')
        await product.addProduct('sauce-labs-bike-light')
        await product.openCart()
        await cart.Continueshopping()
        await expect(page.locator('[data-test="title"]')).toHaveText('Products')
        await product.openCart()
        await cart.checkOut()
        await checkout.cancelCheckout()
        await cart.checkOut()
        await checkout.proceedCheckout('sruthi','Hasan','5444004')
        await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview')
        expect(await checkout.getSubtotalPrice()).toBe(39.98)
        expect(await checkout.getTax()).toBe(3.20)
        expect(await checkout.getTotalPrice()).toBe(43.18)
    })


})