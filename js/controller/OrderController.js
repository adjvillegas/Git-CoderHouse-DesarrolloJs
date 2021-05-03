class OrderController {
    // Clase para el control de los elementos propios del objeto Compra
    constructor(Model, View) {

        this.OrderModel = Model;
        this.OrderView = View;

    }

    show_modal_order(event) {

        let padre = event.target.dataset.target

        this.OrderView.show_popup_orders(padre, this.OrderModel.get_order_attr('data'), 
<<<<<<< HEAD
=======

>>>>>>> update
        // Proceso de llamada para funcionalidad de botón "Confirmar" compra
        (evnt) => {
          
            this.OrderModel.confirm_order(this.OrderView.change_panel_order)
        },
       // Proceso de llamada para funcionalidad de botón "Borrar" compra        
        (evnt) => {
<<<<<<< HEAD
=======

>>>>>>> update
            this.OrderModel.delete_all_order(this.OrderView.change_panel_order)
        },
        // Proceso de llamada para funcionalidad de botón "Guardar" compra
        (evnt) => {
<<<<<<< HEAD
            this.OrderModel.save_order(this.OrderView.change_panel_order)
        },
        (item) => {
            this.OrderModel.delete_single_order(item, this.OrderView.delete_row_order)
=======

            this.OrderModel.save_order(this.OrderView.change_panel_order)
        },
        (row) => {
         
            this.OrderModel.delete_single_order(row, this.OrderView.delete_row_order)
            this.OrderView.change_panel_order(this.OrderModel.get_order_attr("length"))            
>>>>>>> update
        }       
        )
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