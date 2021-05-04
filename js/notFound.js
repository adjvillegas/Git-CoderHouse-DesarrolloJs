class Errors {
    notFound (app) {
     
        $(app).html(`
               <div class="d-flex align-items-center text-danger" id="errorContainer">
                    <div class="container-fluid">
                        <div class="row-12 d-flex justify-content-center align-items-center">
                            <h2>Error 404</h2>
                            <h4 class="ms-2 me-2">-</h4>
                            <h4>Pagina no encontrada</h4>
                        </div>
                        <div class="row mt-5 align-items-center">
                            <div class="col-8">
                                <p class="text-center">¡Lo sentimos!</p>
                                <p class="text-center">Parece que nuestra impresora se quedo sin papel y no puede imprimir esta sección</p>
                                <p class="text-center">Por favor, te pedimos que explores otros link mientras arreglamos este detalle</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center"> 
                                <span style="font-size: 10em;">
                                    <i class="fas fa-print"></i> 
                                </span>
                            </div>
                        </div>                        
                    </div>

                    <!--  </div> -->
        `)
       
        $(`${app} #errorContainer`).addClass('card-body-error').animate({
            height: '80vh',
        }).slideDown('slow')
    }
}