const productsViewScreen = require('../screens/productView.screen')

describe('Product cart', () => {

    it('should list products', async () => {
        const name = 'Ingrid Running Jacket'
        const searchName = 'Ingrid Running Jacket'
        await productsViewScreen.waitProduct(name)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)
        await productsViewScreen.productSelect()
        await productsViewScreen.productAdd()
        await productsViewScreen.goToCArt()
    })

    

})