class model {
    constructor() {
        
        var product_ 
        
        $.getJSON("model/productList.json", (response, status) => {
            if (status == "success") {
                product_ = response
            }
        })

        this.product = product_
    }

    getProductModel = function () {
    
        return this.product
    }

}
