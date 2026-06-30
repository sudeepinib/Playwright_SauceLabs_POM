import { expect } from "@playwright/test"
export class CartPage
{
    constructor(page)
    {
        this.page=page
        this.continueShop=this.page.locator('#continue-shopping')
        this.checkOutButton=this.page.getByRole('button',{name:'Checkout'})
    }

    async VerifyProduct(productID)
    {
        await expect(this.page.locator('[data-test="inventory-item-name"]',{hasText: productID})).toBeVisible()
    }

    async checkOut()
    {
        await this.checkOutButton.click()
    }

    async Continueshopping()
    {
        await this.continueShop.click()
    }
}