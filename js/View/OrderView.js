class OrderView {
    //Clase para los elementos propios de la vista de Compra
    constructor() {

        const bodyPrepare_ = () => {
            return `<div class="modal-dialog modal-dialog-centered" role="document" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-content">
              <div class="modal-header" id="modalHeaderOrder">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <div class="modal-body" id="modalBodyOrder">
              </div>
              <div class="modal-footer" id="modalFooterOrder">
    
              </div>
            </div>
          </div>`
        }


        const show_my_order_ = (oData) => {
        
        // Generar Fecha y Hora
        let fullday = new Date()

            $("#modalHeaderOrder").prepend(`
                                <h4>Detalle del Pedido</h4>
                                            `)


            $("#modalBodyOrder").append(`
                                <div class="row row-cols-4" id="section-header-nc-notes">
                                    <p class="col">Fecha:</p>
                                    <p class="col-8">${fullday.toLocaleString()}</p>
                                </div>

                                <div class="container" id="section-body-nc">
                                <div class="row" id="section-body-nc-detail">
                                  <div class="col">
                                    <table class="table">
                                      <thead>
                                        <tr id="headerTable">
                                        </tr>
                                      </thead>
                                      <tbody>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>

                              <div class="container">
                              <div class="row">
                                <h5>Resumenes totales</h5>
                              </div>
                              <div class="row row-cols-4">
                                <p class="col" id="labelPrecio" style="font-weight: bold;">Precio:</p>
                                <p class="col-8" id="input-subTotal-Resumen">0</p>
                              </div>
                              <div class="row row-cols-4">
                                <p class="col" id="labelImpuesto" style="font-weight: bold;">Impuestos</p>
                                <p class="col-8" id="input-Impuesto-Resumen">0</p>
                              </div>
                              <div class="row row-cols-4 text-end">
                                <p class="col-8" id="labelTotal" style="font-weight: bold;">Total a Pagar</p>
                                <p class="col" id="input-aPagar-Resumen">0</p>
                              </div>
                            </div>                                                           
            `)

        // Armado de tabla de detalle
        // $("#headerTable th").remove()

        for (let property in MYOUTPUT) {
            // Cabecera -> Se toma un Json asociado a los campos que se presentaran en cabecera.
            $("#headerTable").append(`
                                    <th>
                                        ${MYOUTPUT[property]}
                                    </th>
            `)

        }
        
       // Items -> Se recorre los pedidos cargados para ser mostrados
    //    $("table tbody tr").remove()

       for (let i = 0; i < oData.length; i++) {

           $("table tbody").append(`
                                   <tr id="bodyTable_${i}">
                                   </tr>
                                   `)

           // Proceso de calculo sobre el pedido, Totales para Importe - IVA - Total a Pagar
           for (let property in oData[i]) {

               let calculate = document.getElementById(`input-${property}-Resumen`)

               if (calculate !== null) {

                   calculate.innerText = (parseFloat(calculate.innerText) + parseFloat(oData[i][property])).toFixed(2)

               }
               // Si estamos tratando un campo de pedido, que debe ser mostrado en la tabla se presenta.
               if (property in MYOUTPUT) {

                   $(`table tbody tr:nth-child(${i + 1})`).append(`
                                                           <td>
                                                               ${oData[i][property]}
                                                           </td>
                   `)

               }
           }
       }

            $("#modalFooterOrder").append(`
                    <button type="button" class="col-2 btn btn-outline-primary" id="myButtonConfirm">COMPRAR</button>
                    <button type="button" class="col-2 btn btn-outline-danger" id="myButtonDelete">BORRAR</button>
                    <button type="button" class="col-2 btn btn-outline-success" id="myButtonSave">GUARDAR</button>            
            `)

        }

        this.bodyPrepare = () => bodyPrepare_()

        this.show_my_order = (oData) => show_my_order_(oData)
    }

    show_popup_orders(padre, oData) {
        debugger
        $(`#${padre}`).html(this.bodyPrepare())

        this.show_my_order(oData)

        $(`#${padre}`).modal('show')
    }

    change_panel_order(value) {
        document.getElementById("labelSpanHeaderProduct").innerText = `Productos agregados a tu compra: ${value}`

        if (value > 0) {
            $("#showShellButton").show()
        } else {
            $("#showShellButton").hide()
        }

    }
}