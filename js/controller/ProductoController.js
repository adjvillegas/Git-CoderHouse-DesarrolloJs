class ProductoController {
    constructor(productoModel, productoView) { 
      
        this.productoModel  = productoModel;
        this.productoView   = productoView;
        // this.productoView.agregarProducto('#pag1',(event) =>{
        //     let hijos = $(event.target).parent().children();
        //     this.productoModel.agregarProducto({
        //         id: this.productoModel.productos.length + 1,
        //         nombre: hijos[1].value,
        //         precio: hijos[2].value,
        //     });
        // }
    }

    welcome(app) {
        this.productoView.display_welcome(app)
    }

    list(app) {
       
        this.productoView.show_products(app, this.getProducts(), (evnt) => {
            // Determinar el ID de la selección
                let buttonId = evnt.target.parentElement.id
                let id = buttonId.slice(buttonId.length - 1)

            // Obtener el juego de datos a Procesar
                let aProduct = this.productoModel.get_single_product(id)

            // Ejecutar la ventana emergente
                let padre = evnt.target.parentElement.dataset.target
                
            // Mostrar la ventana emergente con los datos del producto seleccionado    
                this.productoView.display_purchase_product(padre, aProduct, (evn) => {
                    
                    this.productoModel.charge_product_to_order(aProduct)
                    
                    this.productoView.change_panel_order(this.productoModel.get_order_attr("length"))
                })
                
        })
    }

    getProducts() {
        return this.productoModel.get_products()
     
    }
}
