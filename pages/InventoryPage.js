
export class InventoryPage
{
constructor(page)
{
    this.page=page
    this.cartIcon=this.page.locator('[data-test="shopping-cart-link"]')
    this.cartNumber=this.page.locator('[data-test="shopping-cart-badge"]')
    this.sortSelection=this.page.locator('[data-test="product-sort-container"]')

}
async clickOnProduct(productName){
     await this.page.getByText(productName).click()
     //await expect(this.page.getByText(productName)).toBeVisible

}

async getCartCount(){
    if (await this.cartNumber.isVisible()){
    let count = await this.cartNumber.textContent()
    return Number(count)
    }
    return 0
}

async addProduct(productID){
    
    await this.page.locator(`#add-to-cart-${productID}`).click()
    //await expect(this.cartNumber).toHaveText(count+1)
    //await this.cartIcon.click()
    //await expect(this.page.getByText(productName)).toBeVisible
}


async removeProduct(productID){
    const remProduct=this.page.locator(`[data-test="remove-${productID}"]`)

    if(await remProduct.isVisible())
    {
    await remProduct.click()
    }
    else
        console.error(`The product ${productID} is not added to the cart`)
}

async openCart(){
    await this.cartIcon.click()
}

async sortProducts(sortOrder){
    await this.sortSelection.selectOption(sortOrder)
}

}