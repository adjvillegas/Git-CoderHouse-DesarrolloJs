class OrderView {
    //Clase para los elementos propios de la vista de Compra
    constructor(){

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

        this.bodyPrepare = () => bodyPrepare_
    }

    show_popup_orders (padre) {
        $(`#${padre}`).html(this.bodyPrepare)
    }

    change_panel_order (value) {
        document.getElementById("labelSpanHeaderProduct").innerText = `Productos agregados a tu compra: ${value}`
        
        if (value > 0) {
            $("#showShellButton").show()    
        } else {
            $("#showShellButton").hide()    
        }
 
    }
}