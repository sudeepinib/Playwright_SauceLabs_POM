import { expect } from "@playwright/test"
export class CheckOutPage
{
    constructor(page)
    {
        this.page=page
        this.firstName=page.locator('[data-test="firstName"]')
        this.lastName=page.locator('[data-test="lastName"]')
        this.zipCode=page.locator('[data-test="postalCode"]')
        this.ContineButton=page.getByRole('button',{name:"continue"})
        this.totalPrice=page.locator('[data-test="total-label"]')
        this.subtotalPrice=page.locator('[data-test="subtotal-label"]')
        this.tax=page.locator('[data-test="tax-label"]')
        this.cancelButton=page.getByRole('button',{name:'Cancel'})
    }

    async proceedCheckout(firstName,lastName,zipCode)
    {
       await this.firstName.fill(firstName)
       await this.lastName.fill(lastName)
       await this.zipCode.fill(zipCode)
       await this.ContineButton.click()
    }

    async getSubtotalPrice()
    {
        const subtotal= await this.subtotalPrice.textContent()
        return Number(subtotal.replace('Item total: $',''))
    }

    async getTax()
    {
        const tax=await this.tax.textContent()
        return Number(tax.replace("Tax: $",''))
    }

    async getTotalPrice()
    {
        const TotalPrice=await this.totalPrice.textContent()
        return Number(TotalPrice.replace('Total: $',''))
    }

    async cancelCheckout()
    {
        await this.cancelButton.click()
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Your Cart')
    }
}