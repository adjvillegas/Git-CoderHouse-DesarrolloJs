class ProductoView {

  constructor() {


    const bodyPrepare_ = () => {

      return `<div class="container-fluid head-div-product">
                <div class="row justify-content-end" style="width: 100%;">
                  <div class="col-10 align-self-center">
                    <span class="neograf-fonts labelSpanHeaderProduct" id="labelSpanHeaderProduct">Productos agregados a tu compra: 0</span>
                  </div>
                  <div class="col-2 d-flex justify-content-end">
                    <button id="showShellButton" type="button" class="btn btn-primary" style="display: none;">Comprar</button>
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

              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"></div>`
    }

    const bodyPreparePurchases_ = () => {
      // <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
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
          // Genera el primer iTem como vacío para las CARD de productos.                
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
                                    <button class="neograf-button-span" type="button" id="add_quanty_product_${product.id}" data-toggle="modal" data-target="exampleModalCenter">
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

      // Actualización de cantidades por unidades Minimas
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

    this.bodyPrepare = () => bodyPrepare_()
    this.bodyPreparePurchases = () => bodyPreparePurchases_()

    this.showNavProduct = (items, process) => showNavProduct_(items, process)
    this.showPurchaseProduct = (item, fCharge) => showPurchaseProduct_(item, fCharge)

  }

  display_welcome(padre) {
    $(padre).html(
      ` <div class="container">
                <div class="row d-flex row-title-card neograf-fonts">
                    <h2 class="text-center"> Bienvenido a la Imprenta Neograf </div>
                </div>

            <div class="container-fluid w-100">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
              <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="img/imagen1-header.jpg" class="d-block w-100"
                  alt="Imagen_carousel1_notfound">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="card-style-font">Trabajo Garantizado</h5>
                  <p class="card-style-font">Les brindamos el mejor servicio a través de las nuevas tecnologias, mejorando el
                    precio y calidad</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="img/imagen2-header.jpg" class="d-block w-100"
                  alt="Imagen_carousel2_notfound">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="card-style-font">Colores reales</h5>
                  <p class="card-style-font">Nuestras tintas son garantia de calidad, importadas para brindarle el servicio que
                    se merece</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="img/imagen3-header.jpg" class="d-block w-100"
                  alt="Imagen_carousel3_notfound">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Terminaciones detalladas</h5>
                  <p>Para nosotros los detalles son lo mas importante, demostrandolo por mas de 10 años</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
          </div>
          </div>

          <div class="container-article">
          <div class="row">
            <p class="col-12 text-center"> Bienvenidos al portal de Productos de Neograf</p>
            <p class="col-12 text-center"> En esta web podras Gestionar tus compras de nuestros productos </p>
          </div>
          <div class="row-12 d-flex justify-content-center neograf-bottom-view">
            <a href="#producto">Comprar</a> 
          </div>
          </div>`
    )
  }

  show_products(padre, oProduct, process) {


    $(padre).html(this.bodyPrepare())
    
    if (CATEGORIA !== undefined && oProduct !== undefined) {

      this.showNavProduct(oProduct, process)

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

  listar_productos(padre, data, callback) {
    // let html = '';
    // for (const producto of data) {
    //      html+=`<div>
    //                 <input value="${producto.id}" type="hidden">
    //                 <h4>  Producto: ${producto.nombre}</h4>
    //                 <b> $ ${producto.precio}</b>
    //                 <button class="btnComprar">Comprar</button>
    //             </div>`;
    // }
    // $(padre).html(html);
    // $(".btnComprar").click(callback);
  }
}