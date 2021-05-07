  
class OrderModel {
    constructor() {
        var oOrder_ = [];
        var oOrderList_ = [];
        this.oOrder = () => oOrder_
        this.oOrderList = () => oOrderList_
        this.deleteAll = () => oOrder_ = []

    }
    // Función dinamica para obtener información de la compra
    get_order_attr (atribute) {

        let atributes = {
             'length': () => this.oOrder().length,
             'data': () => this.oOrder(),
             'list': () => this.oOrderList()
         }
 
         return atributes[atribute]()
     }

    search_order = function (indx) {
        // Verifica que exista el producto en la compra
        return this.oOrder().findIndex( p => p.id == indx );

    }    
    // Proceso de carga del producto a la compra
    process_order = function (item, fChanceView) {
      
        var myOrder;
        // Verifica si existen productos cargados a la compra
        if (this.oOrder().length > 0) {
        // Busca si el producto a comprar ya fue cargado anteriormente
                myOrder = this.search_order(item.id);
        
                if (myOrder < 0) {
        // Si Existen registros pero el producto nunca fue comprado, se carga una nueva posición a la compra
                    this.oOrder().push(this.add_order(item));
        
                } else {
        // Si ya fue comprado, se actualiza los datos de la compra            
                    this.change_order(item);
       
                }
             
        } else {
            // Si es la primera compra
            this.oOrder().push(this.add_order(item));
        }
        // Función de modificado de datos propios de la compra para la vista
        fChanceView()

    }

    add_order = function (array) {
        // Agregar producto a la Orden de Compra
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
            // Solo se modifica y recalcula para la posición que coincida con el item a comprar
            if (order.id == array.id) {
                
                let cantidadDesde = parseFloat(array.cantidadDesde)
                let cantidadInput = parseFloat(parseFloat($("#form-cantidad-input").val()).toFixed(2))
                let cantidad = parseFloat(cantidadInput * cantidadDesde)

                let subTotal = parseFloat((order.precio * cantidad).toFixed(2))                

                // Calculo de total de Cantidades para el acumulado del mismo producto
                order.cantidad = order.cantidad + parseInt(cantidad);                
                // Calculo de total de Precio Neto para el acumulado del mismo producto
                order.subTotal = order.subTotal + parseFloat(subTotal);
                // Calculo de total de Impuesto para el acumulado del mismo producto
                order.Impuesto = parseFloat(((order.subTotal * order.iva) - order.subTotal).toFixed(2))
                // Calculo de total a Pagar para el acumulado del mismo producto
                order.aPagar = parseFloat((order.subTotal + order.Impuesto).toFixed(2))             
  
            }

        }

    }

    confirm_order = function(fViewPanelOrder) {
        
        alert("¡Felicidades a adquirido correctamente los productos!")

        this.deleteAll()

        fViewPanelOrder(this.get_order_attr('length'))
    
    }

    save_order = function(fViewPanelOrder) {
       
        let ls = localStorage
        let oLsOrder
        let lsOrders = ls.getItem('lsOrders')
        let currentOrder = this.get_order_attr('data')
        let store
        
        if (lsOrders == undefined) { 
            oLsOrder = [] 
        } else {
             oLsOrder = JSON.parse(lsOrders)
            }
            
        oLsOrder.push(currentOrder)
        this.get_order_attr('list').push(this.get_order_attr('list').length)

        store = JSON.stringify(oLsOrder)
  
        ls.setItem("lsOrders", store)
        
        this.deleteAll()

        fViewPanelOrder(this.get_order_attr('length'), this.get_order_attr('list').length)

    }

    delete_single_order = function(row, fViewDeleteSelect) {
      
        let id = row.slice(row.length - 1)

        if (this.get_order_attr('length') > 1) {
        
            let oDelete = this.get_order_attr('data').splice(id, 1)
            fViewDeleteSelect(row, oDelete)
        }

    }

    delete_all_order = function(fViewPanelOrder) {

        let opt = confirm("¿Esta seguro de Eliminar esta compra?. Su pedido se borrara completamente del sistema")

        if (opt) {

            this.deleteAll()
            // Ocultamos o Mostramos el popup especial para comunicación con el usuario        
            fViewPanelOrder(this.get_order_attr('length'), this.get_order_attr('list').length)

        }
    }

    charge_order_list_available = function() {
       
        let ls = localStorage
        let lsOrders = ls.getItem('lsOrders')
        
        if (lsOrders) {
            let oObject = JSON.parse(lsOrders)

            for (let i = 0; i < oObject.length; i++) {
                
                this.oOrderList().push(i)
                
            }
          
        }

    }
}