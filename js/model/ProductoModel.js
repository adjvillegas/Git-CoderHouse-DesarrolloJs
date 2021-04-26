class ProductoModel {
    constructor() {
     
        this.product
    //   const productos = JSON.parse(localStorage.getItem('productos')) || [];
    //   this.productos  = productos.map(producto => new Producto(producto));
    }

    get_products() {
    
        $.ajaxSetup().async = false
        
        $.getJSON("model/productList.json", (response, status) => {
            if (status == "success") {

                this.product = response
                // debugger
                // if (PRODUCTLIST.length > 0) {
                //     // $("#nav-tabContent").append('')
                //     // displayPopUp("navTabContent")
    
                //     // oList = new pedido()
    
                //     // checkLocalstorage()
    
    
                // }
            } else {
                $.ajaxSetup().async = true
            }

        
        })

        $.ajaxSetup().async = true    
        return this.product
    }
    
    // guardarProductos() {
    //   localStorage.setItem('productos', JSON.stringify(this.productos));
    // }
  
    // agregarProducto(producto) {
    //   this.productos.push(new Producto(producto));
    //   this.guardarProductos();
    // }
}
