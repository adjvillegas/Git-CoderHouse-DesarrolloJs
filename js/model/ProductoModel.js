class ProductoModel {
    constructor() {

        this.product;
        // this.order = new order();
        //   const productos = JSON.parse(localStorage.getItem('productos')) || [];
        //   this.productos  = productos.map(producto => new Producto(producto));
    }

    get_products() {

        if (this.product == undefined) {

            $.ajaxSetup().async = false

            $.getJSON("model/productList.json", (response, status) => {
                if (status == "success") {

                    this.product = response

                } else {

                    $.ajaxSetup().async = true

                }

            })

            $.ajaxSetup().async = true
        }

        return this.product

    }

    get_single_product(id) {
        return this.product.find(producto => producto.id == id)
    }

    // get_order_attr (atribute) {

    //    let atributes = {
    //         'length': () => this.order.get_order().length
    //     }

    //     return atributes[atribute]()
    // }

    // charge_product_to_order(aItem) { 

    //         this.order.process_order(aItem);

    // }
    // guardarProductos() {
    //   localStorage.setItem('productos', JSON.stringify(this.productos));
    // }

    // agregarProducto(producto) {
    //   this.productos.push(new Producto(producto));
    //   this.guardarProductos();
    // }
}