const{expect}=require('@playwright/test')

export class InventoryPage
{
constructor(page)
{
    this.page=page
    this.cartIcon=this.page.locator('[data-test="shopping-cart-link"]')
    this.cartNumber=this.page.locator('[data-test="shopping-cart-badge]')
}
async clickOnProduct(productName){
     await this.page.getByText(productName).click()
     //await expect(this.page.getByText(productName)).toBeVisible

}

async getCartCount(){
    let count = await this.cartNumber.textContent()
    return count
}

async addProduct(productName,productID){
    
    await this.page.locator('#add-to-cart-${productID}').click()
    //await expect(this.cartNumber).toHaveText(count+1)
    await this.cartIcon.click()
    //await expect(this.page.getByText(productName)).toBeVisible

}

async removeProduct(productName){

}
async openCart(){

}

async sortProducts(){
    
}

}