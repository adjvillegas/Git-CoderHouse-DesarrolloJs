  class myPage {

  delay(padre) {

      $(padre).html(`
      <div class="container-fluid d-flex justify-content-center align-items-center" id="delay" style="height:80vh;">
          <div class="spinner-grow m-3 text-primary" role="status" style="width: 2rem; height: 2rem;">
              <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow m-3 text-primary" role="status"  style="width: 3rem; height: 3rem;">
              <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow m-3 text-primary" role="status"  style="width: 4rem; height: 4rem;">
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>
      `)
      
  }

    welcome(padre) {
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
                  <a href="#/product">Comprar</a> 
                </div>
                </div>`)
    }
}