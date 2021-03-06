class ProductoView {

  constructor() {


    const bodyPrepare_ = () => {

      return `<div class="container-fluid head-div-product">
      <div class="row justify-content-end" style="width: 100%;">
        <div class="col-10 align-self-center">
          <span class="neograf-fonts labelSpanHeaderProduct" id="labelSpanHeaderProduct">Productos agregados a tu compra: 0</span>
        </div>
        <div class="col-2 d-flex justify-content-end align-item-center">
       <button id="showShellButton" type="button" class="btn btn-primary me-2" style="display: none;" data-toggle="modal" data-target="ModalOrder">Comprar</button>
       <select class="form-select form-select-sm" style="display: none;" aria-label=".form-select-sm example">
       <option selected>Mi Lista</option>
      </select>            
       </div>                 
      </div>
    </div>

    <section class="row row-cols-2">
      <aside class="col col-md-2 list-aside-product">
        <div class="shadow-lg p-3 mb-5 bg-white rounded list-group group-aside-product" id="list-tab" role="tablist">

        </div>
      </aside>

      <article class="col col-md-10 list-article-product neograf-fonts">
        <div class="tab-content" id="nav-tabContent"></div>
      </article>

    </section>
    <div class="modal fade" id="ModalPurchase" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"></div>
    <div class="modal fade" id="ModalOrder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"></div>`              
}

    const bodyPreparePurchases_ = () => {

      return `<div class="modal-dialog modal-dialog-centered" role="document" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-content">
          <div class="modal-header" id="modalHeader">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body" id="modalBody">
          </div>
          <div class="modal-footer" id="modalFooter">

          </div>
        </div>
      </div>`
      // <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      // <button type="button" class="btn btn-primary">Save changes</button>
    }

    const showNavProduct_ = (items, process) => {

      let i = 0

      for (let product of items) {

        if (i == 0) {
          // Genera el primer item de la lista como activo
          $("aside #list-tab:first-child").append(`<a class="list-group-item list-group-item-action active" id="list-${CATEGORIA.find((e) => e.id === product.categoria).value}-list" data-bs-toggle="list"
        href="#list-${CATEGORIA.find((e) => e.id === product.categoria).value}" role="tab" aria-controls="list-${CATEGORIA.find((e) => e.id === product.categoria).value}-list">${CATEGORIA.find((e) => e.id === product.categoria).descripcion}</a>`)
          // Genera el primer iTem como vac??o para las CARD de productos.                
          $("#nav-tabContent").append(`<div class="tab-pane fade show active" id="list-${CATEGORIA.find((e) => e.id === product.categoria).value}" role="tabpanel"
        aria-labelledby="list-${CATEGORIA.find((e) => e.id === product.categoria).value}-list">`)
        } else {
          $("aside #list-tab:first-child").append(`<a class="list-group-item list-group-item-action" id="list-${CATEGORIA.find((e) => e.id === product.categoria).value}-list" data-bs-toggle="list"
        href="#list-${CATEGORIA.find((e) => e.id === product.categoria).value}" role="tab" aria-controls="list-${CATEGORIA.find((e) => e.id === product.categoria).value}-list">${CATEGORIA.find((e) => e.id === product.categoria).descripcion}</a>`)
          // Genera Cards ocultos    
          $("#nav-tabContent").append(`<div class="tab-pane fade" id="list-${CATEGORIA.find((e) => e.id === product.categoria).value}" role="tabpanel"
        aria-labelledby="list-${CATEGORIA.find((e) => e.id === product.categoria).value}-list">`)
        }
        $(`#nav-tabContent #list-${CATEGORIA.find((e) => e.id === product.categoria).value}`).append(`<div class="row">
                                <div class="col-11 col-md-4">
                                <div class="shadow-lg p-3 mb-5 bg-white rounded neograf-product-card animate__animated animate__zoomIn">
                                <div class="neograf-product-img-card col-12">
                                    <img src="img/${product.archive}" alt="${CATEGORIA.find((e) => e.id === product.categoria).descripcion}" class="neograf-imagen-responsive">
                                </div>
                                <h5>${product.descripcion}</h5>
                                <div class="neograf-product-img-card-txt">
                                    <p class="neograf-fonts">${product.nota}</p>
                                </div>
                                <div class="neograf-product-img-price-txt">
                                    <span>Desde</span>
                                    <span class="neograf-product-price">$${product.precioDesde}</span>
                                    <span class="neograf-product-quantity"> + IVA</span>
                                    <span class="neograf-product-quantity"> /${product.cantidadDesde} ${product.medicionDesde}</span>
                                    <span>
                                    <button class="neograf-button-span" type="button" id="add_quanty_product_${product.id}" data-toggle="modal" data-target="ModalPurchase">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                    </span>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>`)

        //Evento de Click para seleccionar las cantidades.
        $(`#add_quanty_product_${product.id}`).on("click", process)

        i++

      }
    }

    const showPurchaseProduct_ = (item, fCharge) => {

      var quantity

      $("#modalHeader").prepend(`
                <h5 class="modal-title" id="exampleModalLongTitle">${item.descripcion}</h5> 
        `)

      $("#modalBody").append(`
        <div class="row justify-content-center">
          <div class="col-4 d-flex align-items-center" id="div-product-nota">
            <p>${item.nota}</p>
          </div>
          <div class="col-6" id="div-product-image">
            <img src="img/${item.archive}" alt="${item.descripcion}" style="height: 250px; width: 250px;">          
          </div>
        </div>        

        <div class="row justify-content-center" style="padding: 2%;text-align: center;">
          <div class="col-2" id="form-cantidad-label">
            <label for="form-cantidad-input" class="form-label">
              Cantidad
            </label>
          </div>
          <div class="col-4" id="div-cantidad-input">
            <input id="form-cantidad-input" type="number" class="form-control"></input>
          </div>
          <div class="col-12" id="div-calculo-input">
            <p>Cantidad total por cada Unidad :</p>
            <p>0</p>
          </div>
        </div>        
                    
        `)

      // Actualizaci??n de cantidades por unidades Minimas
      $("#form-cantidad-input").change(function (e) {

        let input = $(`#${e.currentTarget.id}`)

        quantity = parseInt(parseInt(input.val()) * parseInt(item.cantidadDesde))

        $("#div-calculo-input p:last").trigger("change");

      })

      // Activar botones de compra si se realiza un cambio en la cantidad
      $("#div-calculo-input p:last").change(function (e) {
        e.currentTarget.innerText = quantity
      })

      $("#modalFooter").append(`
                <Button id="myButtonAccept" class="btn btn-outline-primary" data-bs-dismiss="modal">COMPRAR</button>
        `)

      $("#myButtonAccept").on("click", fCharge)

    }

    const chargeListOrder_ = (oObject) => {
      
      let oSelected = $("select")

      for (let i = 0; i < oObject.length; i++) {

        let opt = document.createElement("option")
        let opt_txt = document.createTextNode(oObject[i].toLocaleString())
        opt.appendChild (opt_txt);

        oSelected.append(opt)

      }

      // oSelected.show()

  }    

    this.bodyPrepare = () => bodyPrepare_()
    this.bodyPreparePurchases = () => bodyPreparePurchases_()

    this.showNavProduct = (items, process) => showNavProduct_(items, process)
    this.showPurchaseProduct = (item, fCharge) => showPurchaseProduct_(item, fCharge)
    this.chargeListOrder = (oObject) => chargeListOrder_(oObject)    

  }


  show_products(padre, oProduct, oOrderList, fOrderView, fButtonPurchase) {


    $(padre).html(this.bodyPrepare())

    if (CATEGORIA !== undefined && oProduct !== undefined) {

      this.showNavProduct(oProduct, fButtonPurchase)

    }

    $("#showShellButton").on('click', (evnt) => {

      fOrderView(evnt)
      
    })

    if (oOrderList().length > 0) {
      this.chargeListOrder(oOrderList())
    }    

  }

  display_purchase_product(padre, product, fCharge) {

    $(`#${padre}`).html(this.bodyPreparePurchases())

    this.showPurchaseProduct(product, fCharge)

    $(`#${padre}`).modal('show')

  }

  change_panel_order(orderLength) {

    document.getElementById("labelSpanHeaderProduct").innerText = `Productos agregados a tu compra: ${orderLength}`
    $("#showShellButton").show()

  }

  refreshList(oObject) {
    this.chargeListOrder(oObject)
  }

}