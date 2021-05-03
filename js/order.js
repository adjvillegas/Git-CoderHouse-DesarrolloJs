// Clase pedido. Es un objeto que cuenta con los procesos propios del pedido.
// Se instancia la clase catalogo, para realizar acciones en base a esta.
class order {
    constructor() {

        // var oContentCatalogo_ = new catalogo();
        var oOrder_ = [];
        // oContentCatalogo_.setProductToCatalogo(PRODUCTLIST);
        // this.oCatalogo = () => { return oContentCatalogo_ };
        this.oOrder = () => { return oOrder_ }
        // this.listDelete = () => { oPedido_ = []}
        // this.oStore = (o) => { oPedido_ = o }


    }


    // process_pedido = function (evnt) {

    //     // this.set_pedido(evnt.id);

    // };

    get_order = function() {

        return this.oOrder();

    };

    process_order = function (item) {
       
        // var catalogo = this.oCatalogo().getCatalogo()[indx];
        var myOrder;
        // var aReturn;

        if (this.oOrder().length > 0) {

                myOrder = this.search_order(item.id);

                if (myOrder < 0) {

                    this.oOrder().push(this.add_order(item));
        
                } else {
                    
                    this.change_order(item);
       
                }
             
        } else {

            this.oOrder().push(this.add_order(item));
        }

    };

    add_order = function (array) {
  
        let precio = parseFloat(array.precio.toFixed(2))
        let cantidadDesde = parseFloat(array.cantidadDesde)
        let cantidadInput = parseFloat(parseFloat($("#form-cantidad-input").val()).toFixed(2))
        let cantidad = parseFloat(cantidadInput * cantidadDesde)
        let subTotal = parseFloat((precio * cantidad).toFixed(2))
        let alicuotaIva = parseFloat(array.iva.toFixed(2))        
        let impuesto = parseFloat(((subTotal * alicuotaIva) - subTotal).toFixed(2))
        let pagoTotal = parseFloat((subTotal * alicuotaIva).toFixed(2))
        
        return {
            id: array.id,
            descripcion: array.descripcion,
            cantidad: cantidad,
            precio: precio,
            iva: alicuotaIva,
            subTotal: subTotal,
            Impuesto: impuesto,
            aPagar: pagoTotal
        }
    }

    change_order = function (array) {

        for (const order of this.oOrder()) {
            
            if (order.id == array.id) {
                
                let cantidadDesde = parseFloat(array.cantidadDesde)
                let cantidadInput = parseFloat(parseFloat($("#form-cantidad-input").val()).toFixed(2))
                let cantidad = parseFloat(cantidadInput * cantidadDesde)

                let subTotal = parseFloat((order.precio * cantidad).toFixed(2))                

                // order.cantidad = order.cantidad + parseInt(document.getElementById("form-cantidad-input").value);
                order.cantidad = order.cantidad + parseInt(cantidad);                
                // order.precio = parseFloat((order.precio + this.oCatalogo().get_precio_product(order.id)).toFixed(2));
                order.subTotal = order.subTotal + parseFloat(subTotal);
                order.Impuesto = parseFloat(((order.subTotal * order.iva) - order.subTotal).toFixed(2))
                //aca
                // order.aPagar = parseFloat((parseFloat(order.precio) + parseFloat(order.precio * order.iva)).toFixed(2)); 
                order.aPagar = parseFloat((order.subTotal + order.Impuesto).toFixed(2))             
  
            }

        }

    }

    change_label_header = function() {
       
        // var contadorAgregado = document.getElementById("labelSpanHeaderProduct"),
        //     labelAgregado = `Productos agregados a tu compra: ${this.get_pedido().length}`;
        //     contadorAgregado.innerHTML = labelAgregado;

        //     if (this.get_pedido().length == 1) {
        //         document.getElementById("showShellButton").classList.toggle("hide")
        //     }
    };
    
    delete_pedido = function () {
        // return this.listDelete();
    }

    search_order = function (indx) {

        return this.oOrder().findIndex( p => p.id == indx );

    }

}

