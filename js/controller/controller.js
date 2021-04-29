class Controllers {
    constructor () {
        this.oProduct = new ProductoController(new ProductoModel(), new ProductoView());
        this.oOrder = new OrderController(new OrderModel(), new OrderView());
    }

    welcome(app) {
        this.oProduct.welcome(app)
    }

    list(app) {
        this.oProduct.list(app, (item) => {
            this.oOrder.charge_product_to_order(item)
        }, (evnt) => {
            this.oOrder.show_modal_order(evnt)
        })
    }

}