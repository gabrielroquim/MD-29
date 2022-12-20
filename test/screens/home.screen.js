class HomeScreen {
    get #enterStoreAddress(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        await this.#enterStoreAdress.waitForExist({ timeout: 15000 })
        await this.#enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()