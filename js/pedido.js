// Clase pedido. Es un objeto que cuenta con los procesos propios del pedido.
// Se instancia la clase catalogo, para realizar acciones en base a esta.
class pedido {
    constructor() {

        var oContentCatalogo_ = new catalogo();
        var oPedido_ = [];
        oContentCatalogo_.setProductToCatalogo(PRODUCTLIST);

        this.oCatalogo = () => { return oContentCatalogo_ };
        this.oPedido = () => { return oPedido_ }
        this.listDelete = () => { oPedido_ = []}
        this.oStore = (o) => { oPedido_ = o }


    };

    process_pedido = function (evnt) {

        this.set_pedido(evnt.id);

    };

    get_pedido = function() {

        return this.oPedido();

    };

    set_pedido = function (indx) {
       
        var catalogo = this.oCatalogo().getCatalogo()[indx];
        var indexSearch;
        var aReturn;

        if (this.oPedido().length > 0) {

            
                indexSearch = this.search_indix(catalogo.id);

                if (indexSearch < 0) {

                    this.oPedido().push(this.add_pedido(catalogo));

                } else {
                    
                    this.change_pedido(catalogo);

                }
          

        } else {
            this.oPedido().push(this.add_pedido(catalogo));
        }

    };

    add_pedido = function (array) {
        let precio = parseFloat(array.precio.toFixed(2))
        let cantidadDesde = parseFloat(parseFloat((PRODUCTLIST.find(c => c.id == array.id)).cantidadDesde).toFixed(2))
        let cantidadInput = parseFloat(parseFloat((((document.getElementById("form-cantidad-input").value)))).toFixed(2))
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

    change_pedido = function (array) {

        for (const pedido of this.oPedido()) {
            
            if (pedido.id == array.id) {
                
                pedido.cantidad = pedido.cantidad + parseInt(document.getElementById("form-cantidad-input").value);
                pedido.precio = parseFloat((pedido.precio + this.oCatalogo().get_precio_product(pedido.id)).toFixed(2));
                pedido.subTotal = parseFloat((pedido.precio * pedido.iva).toFixed(2));
                pedido.aPagar = parseFloat((parseFloat(pedido.precio) + parseFloat(pedido.precio * pedido.iva)).toFixed(2));              

  
            }

        }

    }

    change_label_header = function() {
       
        var contadorAgregado = document.getElementById("labelSpanHeaderProduct"),
            labelAgregado = `Productos agregados a tu compra: ${this.get_pedido().length}`;
            contadorAgregado.innerHTML = labelAgregado;

            if (this.get_pedido().length == 1) {
                document.getElementById("showShellButton").classList.toggle("hide")
            }
    };
    
    delete_pedido = function () {
        return this.listDelete();
    }

    search_indix = function (indx) {

        return this.oPedido().findIndex( p => p.id == indx );

    }

}

