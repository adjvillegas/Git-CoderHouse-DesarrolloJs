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
        debugger
        this.productoView.show_products(app, this.getProducts())
    }

    getProducts() {
        return this.productoModel.get_products()
        debugger
    }
}
