class MyStoreScreen {
    get #myStoreLogo(){
        return $('~My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    get #productsButton(){
        return $('id:products')
    }


    async getStoreName(){
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed(){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }

    async clickProductsButton(){
        await this.#productsButton.waitForExist({ timeout: 10000 })
        await this.#productsButton.click()
    }
}

module.exports = new MyStoreScreen()