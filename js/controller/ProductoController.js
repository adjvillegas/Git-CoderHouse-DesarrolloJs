class ProductoController {
    constructor(Model, View) { 
      
        this.productoModel  = Model;
        this.productoView   = View;

    }

    list(app, fChargeOrder, fOrderView, fDisplayError) {
       
        var oObject = this.getProducts(fDisplayError)

        if (oObject !== undefined) {

        this.productoView.show_products(app, oObject, fOrderView, (evnt) => {

            // Determinar el ID de la selección
                let buttonId = evnt.target.parentElement.id
                let id = buttonId.slice(buttonId.length - 1)
        
            // Obtener el juego de datos a Procesar
                let aProduct = this.productoModel.get_single_product(id)

            // Ejecutar la ventana emergente
                let padre = evnt.target.parentElement.dataset.target
                
            // Mostrar la ventana emergente con los datos del producto seleccionado    
                this.productoView.display_purchase_product(padre, aProduct, (evn) => {
                    
                    fChargeOrder(aProduct)
                    
                })
                
        })
    }
    }

    getProducts(fDisplayError) {
        return this.productoModel.get_products(fDisplayError)
     
    }
}
