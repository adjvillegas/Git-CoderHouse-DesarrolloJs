class ProductoView {

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

    show_products(padre) {
        var algo = app.getProducts()
        debugger
        
        // $.getJSON("model/productList.json", (response, status) => {
        //     debugger
        //     if (status == "success") {
    
        //         PRODUCTLIST = response
        //         debugger
        //         if (PRODUCTLIST.length > 0) {
        //             // $("#nav-tabContent").append('')
        //             // displayPopUp("navTabContent")
    
        //             // oList = new pedido()
    
        //             // checkLocalstorage()
    
    
        //         }
        //     }
        // })



        // $(padre).html(
        //     `<div class="container-fluid head-div-product">
        //     <div class="row justify-content-end" style="width: 100%;">
        //       <div class="col-10">
        //         <span class="neograf-fonts labelSpanHeaderProduct" id="labelSpanHeaderProduct">Productos agregados a tu compra: 0</span>
        //       </div>
        //       <div class="col-2">
        //       <button id="showShellButton" type="button" class="btn btn-primary" style="display: none;">Comprar</button>
        //     </div>                 
        //     </div>
        //   </div>
      
        //   <section class="row row-cols-2">
        //     <aside class="col col-md-2 list-aside-product">
        //       <div class="shadow-lg p-3 mb-5 bg-white rounded list-group group-aside-product" id="list-tab" role="tablist">
      
        //       </div>
        //     </aside>
      
        //     <article class="col col-md-10 list-article-product neograf-fonts">
        //       <div class="tab-content" id="nav-tabContent"></div>
        //     </article>
      
        //   </section>`
        // )
    }

    listar_productos(padre,data, callback){
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
