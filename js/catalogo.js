// Clase catalogo. Es una colección de productos con sus metodos.
class catalogo {

    constructor (){
        this.myCatalogo = []
    }

    setProductToCatalogo (oList) {

        if (oList !== undefined) {

        if (oList.length > 0) {

            for (let i = 0; i < oList.length; i++) {

                let newProduct = new product()
                let container = []

                let myID =  this.myCatalogo.length + 1
   
                    for (let property in oList[i]) {
                        
                        if (property in newProduct) {//

                        container.push(oList[i][property])
                        }
                    }
                    
                    // newProduct.addProduct(myID, container)
                    newProduct.addProduct(container)

                this.myCatalogo.push(newProduct)

            }  
        }
    }

    }

    getCatalogo() {
        return this.myCatalogo;
    }

    get_producto_to_catalogo(indx) {
        return this.myCatalogo[indx]
    }

    getCatalogoDescriptionForIndex(indx) {
        return this.get_producto_to_catalogo(indx).descripcion;
    }

    get_precio_product(indx) {
        return this.get_producto_to_catalogo(indx).precio;
    }
}