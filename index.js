var oDom = new dinamicdom
var oList


const cargar_producto = function (evnt) {

    oList.process_pedido(evnt);
    oList.change_label_header();

    oDom.windows_view_product();

}
const show_pedido = function () {

    // let pedido = oList.get_pedido();

    // oDom.view_add_pedido(pedido);

}

//Iniciamos el proceso al detectar el DOM cargado Verifica existencia de Stores
$(() => {

    let i = 0
    const iSelect = 0
    // const navTabContent = 

    if (PRODUCTLIST.length > 0) {

        $("#nav-tabContent").append('')

        for (let product of PRODUCTLIST) {


            if (i == iSelect) {
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
                                            <button class="neograf-button-span" type="button" id="add_quanty_product_${product.id}">

                                                <i class="fas fa-shopping-cart"></i>
                                            </button>
                                            </span>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>`)

            //Evento de Click para seleccionar las cantidades.
            $(`#add_quanty_product_${product.id}`).on("click", function () {

                let quantity = 0

                //Abrimos la ventana especial para la selección de cantidades.
                $("#neograf-compra").show()

                //Limpiamos la ventana
                // document.getElementById("neograf-compra").innerHTML = ""

                // Iniciamos el proceso de carga de datos.
                //Titulo
                $("#neograf-compra #neograf-compra-title").prepend(
                                                        `<h3 class="container product-add-title text-center">
                                                        ${product.descripcion}
                                                        </h3>`
                                                        )

                // Texto del contenido Descripción                                                
                $("#div-product-nota").append(`
                                            <p>${product.nota}</p>
                                            `)

                // Insertao de Imagen
                $("#div-product-image").append(`
                                            <img 
                                            src="img/${product.archive}" 
                                            alt="${product.descripcion}" 
                                            style="height: 250px; width: 250px;">
                                                `)

                // Agregado de Botones
                $('#divButton').append(`<Button id="myButtonAccept">COMPRAR</button>`)
                $('#neograf-compra').prepend(`<button id="myButtonCancel" style="padding:2%" type="button" aria-label="Close"></button>`)


                //Agregado de Diseño en botones
                $('#myButtonAccept').toggleClass("btn btn-outline-primary")
                $('#myButtonCancel').toggleClass("btn-close")

                $('#myButtonAccept').hide()


                // Eventos propios del procedimiento
                $("#form-cantidad-input").change(function (e) {
                    let input = document.getElementById(e.currentTarget.id)

                    quantity = parseInt(parseInt(input.value) * parseInt(product.cantidadDesde))

                    $("#div-calculo-input p").trigger("change");
                })

                $("#div-calculo-input p:last").change(function (e) {
                    e.currentTarget.innerText = quantity

                    if (quantity > 0) {
                        $('#myButtonAccept').show()
                    } else (
                        $('#myButtonAccept').hide()
                    )

                })

                $("#myButtonAccept").on('click', function (e) {

                    cargar_producto(product)

                })

                $('#myButtonCancel').on('click', function (e) {

                    //Abrimos la ventana especial para la selección de cantidades.
                    $("#neograf-compra").toggleClass("hide")

                })
            })
            i++


        }

    }
})


// Si todos los elementos fueron cargados, procede a detectar si existe cargas guardadas e inicializar los eventos de Botones.
window.addEventListener('load', function () {

    let store = localStorage.getItem("pedido")

    if (!oList) {
        oList = new pedido()
    }

    if (store !== null) {
        if (store.length > 0) {

            let opt = confirm("Existe un pedido guardado. ¿Desea seguir su tratamiento?")

            if (opt) {

                let oObject = JSON.parse(store)
                oList.oStore(oObject)
                document.getElementById("labelSpanHeaderProduct").innerText = `Productos agregados a tu compra: ${oList.get_pedido().length}`
                document.getElementById("showShellButton").classList.toggle("hide")
            }
        }
    }

    //Evento de escucha del botón comprar general --> Dibujo la ventana ejecutable.

    $("#showShellButton").click(function (evn) {

          // Verificamos si se encuentra instanciado el objeto Lista
        if (oList) {

            // Obtengo los datos procesados de la lista de "Deseados"
            const PEDIDO = oList.get_pedido();
            const POPUP = document.getElementById("neograf-compra");

            // Generar Fecha y Hora
            let fullday = new Date();
            
            // Ocultamos o Mostramos el popup especial para comunicación con el usuario
            POPUP.classList.toggle("hide")

            // Limpiamos la pantalla para refrescar todos los procesos.
            POPUP.innerHTML = ""

            // Estructura general - Esqueleto - De pantalla de presentación de la compra
            $("#neograf-compra").append(`
                                        <div class="container" id="section-header-nc">
                                            <div class="row" id="section-header-nc-title"></div>
                                            <div class="row row-cols-4" id="section-header-nc-notes"></div>
                                        </div>
                                        <div class="container" id="section-body-nc">   
                                            <div class="row" id="section-body-nc-detail"></div>
                                        </div>
                                        <div class="container">
                                            <div class="row">
                                                <h4>Resumenes totales</h4>
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
                                        <div class="container">    
                                            <div class="row justify-content-end" id="divButtonPedido" style="padding: 2%;text-align: center;">      
                                            </div>               
                                        </div>
                                        `)
            
            // Sección Cabecera - Muestro el Titulo.
            $("#section-header-nc-title").append(`
                                                <div class="col">
                                                    <h3>Detalle del Pedido</h3>
                                                </div>
                                                `)
            
            // Sección Cabecera - Muestro datos generales.
            $("#section-header-nc-notes").append(`
                                                <p class="col">Fecha:</p>
                                                <p class="col-8">${fullday.toLocaleString()}</p>    
                                                `)
            
            // Sección de Detalle - Muestro una tabla con el detalle de las compras Realizadas.    
            $("#section-body-nc-detail").append(`
                                                <div class="col">
                                                    <table class="table">
                                                        <thead>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                 </div>  
                                                `)

            $("table thead").append(`
                                      <tr id="headerTable">
                                      </tr>
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
              for (let i = 0; i < PEDIDO.length; i++) {

                $("table tbody").append(`
                                        <tr id="bodyTable_${i}">
                                        </tr>
                                        `)
                
                // Proceso de calculo sobre el pedido, Totales para Importe - IVA - Total a Pagar
                for (let property in PEDIDO[i]) {

                    let calculate = document.getElementById(`input-${property}-Resumen`)

                    if (calculate !== null ) {
            
                      calculate.innerText = (parseFloat(calculate.innerText) + parseFloat(PEDIDO[i][property])).toFixed(2)
                    
                    }
                    // Si estamos tratando un campo de pedido, que debe ser mostrado en la tabla se presenta.
                    if (property in MYOUTPUT) {
             
                        $(`table tbody tr:nth-child(${i + 1})`).append(`
                                                                <td>
                                                                    ${PEDIDO[i][property]}
                                                                </td>
                        `)

                    }
                }
              }

              //Carga de Botonera:          
                //Boton Confirmar
              $("#divButtonPedido").append(`
                                        <button type="button" class="col-2 btn btn-outline-primary" id="myButtonConfirm">COMPRAR</button>
                                         `)
               //Boton volver

               // Boton Borrar
               $("#divButtonPedido").append(`
                                        <button type="button" class="col-2 btn btn-outline-danger" id="myButtonDelete">BORRAR</button>
                                            `)

               // Boton Guardar
               $("#divButtonPedido").append(`
                                        <button type="button" class="col-2 btn btn-outline-success" id="myButtonSave">GUARDAR</button>
                                            `)

                //Llamada a evento de la botonera.
                const BUTTON = $("#neograf-compra button")
                let myFunctions = {
                    "myButtonConfirm": function(evnt) {

                        alert("¡Felicidades a adquirido correctamente los productos!")
                        //Borramos la lista de pedidos
                        evnt.view.oList.delete_pedido()

                        POPUP.classList.toggle("hide")
                        document.getElementById("labelSpanHeaderProduct").innerText = "Productos agregados a tu compra: 0"
                        document.getElementById("showShellButton").classList.toggle("hide")

                    },
                    "myButtonDelete": function(evnt) {
                        let opt = confirm("¿Esta seguro de Eliminar esta compra?. Su pedido se borrara completamente del sistema")

                        if (opt) {
                            evnt.view.oList.delete_pedido()

                            POPUP.classList.toggle("hide")   
                            document.getElementById("labelSpanHeaderProduct").innerText = "Productos agregados a tu compra: 0"  
                            document.getElementById("showShellButton").classList.toggle("hide")                  
                        }
                    },
                    "myButtonSave": function(evnt) {

                        let ls = localStorage
                        let store = JSON.stringify(evnt.view.oList.get_pedido())
                
                        ls.setItem($("#section-header-nc-notes p:nth-child(2)")[0].innerText, store)  
                        POPUP.classList.toggle("hide")     
                    }
                }

                BUTTON.click((evnt) => {debugger; myFunctions[evnt.currentTarget.id](evnt)})
                //   if ()
            // PEDIDO
            // oDom.view_add_pedido(pedido);

        }
    })

})







