class OrderView {
  //Clase para los elementos propios de la vista de Compra
  constructor() {

    const bodyPrepare_ = () => {
      return `<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
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

    const show_my_order_ = (oData, fbuttonConfirm, fbuttonDelete, fbutttonSave, fdeleteRow) => {

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

      for (let property in MYOUTPUT) {
        // Cabecera -> Se toma un Json asociado a los campos que se presentaran en cabecera.
        $("#headerTable").append(`
                                    <th>
                                        ${MYOUTPUT[property]}
                                    </th>
            `)

      }

      // Items -> Se recorre los pedidos cargados para ser mostrados

      for (let i = 0; i < oData.length; i++) {

        $("table tbody").append(`
                                   <tr id="bodyTable_${i}">
                                   </tr>
                                   `)

        // Proceso de calculo sobre el pedido, Totales para Importe - IVA - Total a Pagar
        for (let property in oData[i]) {

          let labelResumen = document.getElementById(`input-${property}-Resumen`)

          if (labelResumen !== null) {
    
            labelResumen.innerText = (parseFloat(labelResumen.innerText) + parseFloat(oData[i][property])).toFixed(2)
    
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

        $(`table tbody tr:nth-child(${i + 1})`).append(`
          <td>
          <button id="deleteRow_${i}" type="button" class="btn btn-danger btn-lg"><i class="fas fa-trash-alt"></i></button>
          </td>
                      `)

        $(`#deleteRow_${i}`).on("click", (event) => {
      
          fdeleteRow(event.currentTarget.parentElement.parentElement.id)
          // fdeleteRow(oData[i].id)
        })
        // }        
        // eliminarFilaYproducto('${fid}', ${producto.pid})
      }

      $("#modalFooterOrder").append(`
                    <button type="button" class="col-2 btn btn-outline-primary" id="ButtonConfirmOrder" data-bs-dismiss="modal">COMPRAR</button>
                    <button type="button" class="col-2 btn btn-outline-danger" id="ButtonDeleteOrder" data-bs-dismiss="modal">BORRAR</button>
                    <button type="button" class="col-2 btn btn-outline-success" id="ButtonSaveOrder" data-bs-dismiss="modal">GUARDAR</button>            
            `)

      //función de procesamiento para el botón confirmar dentro de popup correspondiente a la compra
      $("#ButtonConfirmOrder").on("click", (event) => {
        fbuttonConfirm(event)
      })

      //Función de procesamiento para el boton borrar dentro de popup correspondiente a la compra
      $("#ButtonDeleteOrder").on("click", (event) => {
        fbuttonDelete(event)
      })

      //Función de procesamiento para el boton guardar dentro de popup correspondiente a la compra
      $("#ButtonSaveOrder").on("click", (event) => {
        fbutttonSave(event)
      })

    }

    this.bodyPrepare = () => bodyPrepare_()

    this.show_my_order = (oData, fbuttonConfirm, fbuttonDelete, fbutttonSave, fdeleteRow) => show_my_order_(oData, fbuttonConfirm, fbuttonDelete, fbutttonSave, fdeleteRow)

  }

  show_popup_orders(padre, oData, fbuttonConfirm, fbuttonDelete, fbutttonSave, fdeleteRow) {

    $(`#${padre}`).html(this.bodyPrepare())

    this.show_my_order(oData, fbuttonConfirm, fbuttonDelete, fbutttonSave, fdeleteRow)

    $(`#${padre}`).modal('show')
  }

  change_panel_order(valueButton, valueSelect) {
    document.getElementById("labelSpanHeaderProduct").innerText = `Productos agregados a tu compra: ${valueButton}`

    if (valueButton > 0) {
      $("#showShellButton").show()
    } else {
      $("#showShellButton").hide()
    }

    if (valueSelect > 0) {
      // $("select").show()
    } else {
      // $("select").hide()
    }

  }

  delete_row_order(row, oDelete) {

    for (let item of oDelete) {

      for (let property in item) {

        let labelResumen = document.getElementById(`input-${property}-Resumen`)

        if (labelResumen !== null) {

          let itemValue = (parseFloat(labelResumen.innerText) - parseFloat(item[property])).toFixed(2)
   
          $({ Counter: $(`#input-${property}-Resumen`).text()}).animate({
            Counter: parseFloat(parseFloat(itemValue).toFixed(2))
          }, {
            duration: 1000,
            easing: 'swing',
            step: function() {
              $(`#input-${property}-Resumen`).text(parseFloat(Math.ceil(this.Counter) - 1));
            }
          });
        }        

      }

      $(`#${row}`).hide(2000, (oData)=> {
        $(`#${row}`).remove()
    })

    }

  }

}