class ProductoModel {
    constructor() {

        this.product;

    }

    get_products(fDisplayError) {

        if (this.product == undefined) {

            $.ajaxSetup().async = false

            $.getJSON("database/productList.json", (response, status) => {
                if (status == "success") {

                    this.product = response
                    return this.product

                } else {
                    this.product = undefined
                    fDisplayError()
                }

            }).always(function(response, status) {
                if (status == "success") {

                    this.product = response
                    return this.product

                } else {
 
                    fDisplayError()
                }
              });
  
            $.ajaxSetup().async = true
    
        }

        // return this.product

    }

    get_single_product(id) {
        return this.product.find(producto => producto.id == id)
    }

}