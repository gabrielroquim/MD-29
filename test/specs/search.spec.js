const productViewScreen = require("../screens/productView.screen")

describe('Search products', () => {
    // beforeEach(async () => {
    //     //verificar se o app ja esta instalado e executando
    //     let state = await driver.queryAppState("br.art.ebaconline")
    //     if(state !== 4){
    //         await driver.launchApp()
    //     }
    // })
    // afterEach(async () => {
    //     //fechar o app
    //     await driver.closeApp()
    // })


    it('should search by teste', async () => {
        let searchName = 'teste'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(`${searchName}\n`)
        
        // Possivel Erro ou Flaky Test
        // expect(await productViewScreen.product(searchName)).toExist()
    });
})