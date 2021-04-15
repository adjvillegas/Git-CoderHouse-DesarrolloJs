
// Objeto Producto
class product {

    constructor() {
        this.id = 0 //
        this.descripcion = "" //
        this.stock = 0 //
        this.precio = 0 //
        this.iva = 0 //
    
    }

    addProduct([pid,nombre, stock, precio, iva]) {
        this.id = pid
        this.descripcion = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva       
    }

}

