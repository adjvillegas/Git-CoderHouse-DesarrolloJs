class OrderController {
    // Clase para el control de los elementos propios del objeto Compra
    constructor(Model, View) {

        this.OrderModel = Model;
        this.OrderView = View;

    }

    show_modal_order(event) {

        let padre = event.target.dataset.target

        this.OrderView.show_popup_orders(padre, this.OrderModel.get_order_attr('data'))
    }

    charge_product_to_order(aItem) {
        //Proceso de Carga del producto a la compra
        this.OrderModel.process_order(aItem, (check = "true") => {
        //Proceso de Actualización de la vista de Compra, luego de ser exitosamente comprado
            if (check) {
                this.OrderView.change_panel_order(this.OrderModel.get_order_attr("length"))
            }

        });

    }
}