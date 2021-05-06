class Controllers {
    constructor () {
        this.oProduct = new ProductoController(new ProductoModel(), new ProductoView())
        this.oOrder = new OrderController(new OrderModel(), new OrderView())
        this.oUser = new UserController(new UserModel(), new UserView())
        this.oPage = new myPage()
        this.oError = new Errors()
    }

    delay(app) {
        this.oPage.delay(app)
    }

    welcome(app = "#Home") {
        this.oPage.welcome(app)
    }

    list(app) {
        this.oProduct.list(app, (item) => {
            this.oOrder.charge_product_to_order(item)
        }, (evnt) => {
            this.oOrder.show_modal_order(evnt)
        }, (evnt) => {
            this.oError.notFound(app)
        })
    }

    logon(app) {
        this.oUser.logon(app, this.oProduct)
    }

    newUser(app) {
        this.oUser.create_user(app, this.oError.notFound)
    }

    errorComponent(app) {
        this.oError.notFound(app)
    }
}