class ProductoModel {
    constructor() {

        this.product;

    }

    get_products(fDisplayError) {

        if (this.product == undefined) {

            $.ajaxSetup().async = false

            $.getJSON("m/productList.json", (response, status) => {
                if (status == "success") {

                    this.product = response
                    return this.product

                } else {
    
                    $.ajaxSetup().async = true
                    fDisplayError()
                }

            })
  
            $.ajaxSetup().async = true
    
        }

        return this.product

    }

    get_single_product(id) {
        return this.product.find(producto => producto.id == id)
    }

}