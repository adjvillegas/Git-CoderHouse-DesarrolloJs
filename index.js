var oList
var PRODUCTLIST

//Iniciamos el proceso al detectar el DOM cargado Verifica existencia de Stores
// $(() => {



// })

// Si todos los elementos fueron cargados, procede a detectar si existe cargas guardadas e inicializar los eventos de Botones.
$(document).ready(() => {

    $("#neograf-compra").hide()
    $("#neograf-compra-prepare").hide()

    $.getJSON("model/productList.json", (response, status) => {

        if (status == "success") {

            PRODUCTLIST = response
            debugger
            if (PRODUCTLIST.length > 0) {
                // $("#nav-tabContent").append('')
                displayPopUp("navTabContent")

                oList = new pedido()

                checkLocalstorage()


            }
        }
    })

    //Evento de escucha del botón comprar general --> Dibujo la ventana ejecutable.
    $("#showShellButton").click(function (evn) {

        displayPopUp("dialogShell")

    })
})


const displayPopUp = (call) => {

    const findFunction = [{
        "navTabContent": navTabContent,
        "dialogShell": dialogShell
    }]

    let myCalled = findFunction[0]

    myCalled[call]()
}

const eventClickQuantityProduct = (product) => {

    let quantity = 0

    //Abrimos la ventana especial para la selección de cantidades.
    // $("#neograf-compra").show()
    // $("#neograf-compra").slideDown("slow")

    //Limpiamos el valor del Input
    $("#form-cantidad-input").val('')
    // Iniciamos el proceso de carga de datos.
    //Titulo
    $("#neograf-compra-title h3").remove()
    $("#neograf-compra-title").prepend(
        `<h3 class="container product-add-title text-center">
                                            ${product.descripcion}
                                            </h3>`
    )

    // Texto del contenido Descripción
    $("#div-product-nota p").remove()
    $("#div-product-nota").append(`
                                <p>${product.nota}</p>
                                `)

    // Insertao de Imagen
    $("#div-product-image img").remove()
    $("#div-product-image").append(`
                                <img 
                                src="img/${product.archive}" 
                                alt="${product.descripcion}" 
                                style="height: 250px; width: 250px;">
                                    `)

    // Agregado de Botones
    $('#divButton #myButtonAccept').remove()
    $('#divButton').append(`<Button id="myButtonAccept">COMPRAR</button>`)

    $('#neograf-compra #myButtonCancelCompra').remove()
    $('#neograf-compra').prepend(`<button id="myButtonCancelCompra" style="padding:2%" type="button" aria-label="Close"></button>`)


    //Agregado de Diseño en botones
    $('#myButtonAccept').toggleClass("btn btn-outline-primary")
    $('#myButtonCancelCompra').toggleClass("btn-close")

    // Eventos propios del procedimiento de PopUp de Ingreso de Cantidades
    // Activar botones de compra si se realiza un cambio en la cantidad
    $("#div-calculo-input p:last").change(function (e) {
        e.currentTarget.innerText = quantity

        if (quantity > 0) {
            $('#myButtonAccept').show()
        } else (
            $('#myButtonAccept').hide()
        )

    })

    // Actualización de cantidades por unidades Minimas
    $("#form-cantidad-input").change(function (e) {
        let input = document.getElementById(e.currentTarget.id)

        quantity = parseInt(parseInt(input.value) * parseInt(product.cantidadDesde))

        $("#div-calculo-input p").trigger("change");
    })

    // Proceso propio del botón comprar -  Genera el agregado del pedido a la lista
    $("#myButtonAccept").on('click', function (e) {

        cargar_producto(product)

        $("#neograf-compra").hide()
        $("#showShellButton").show()

    })

    // Proceso propio del botón de canelar -> Cierra la ventana
    $('#myButtonCancelCompra').on('click', function (e) {

        //Abrimos la ventana especial para la selección de cantidades.
        $("#neograf-compra").hide()

    })

    $('#myButtonAccept').hide()
    $("#neograf-compra").slideDown("slow")

}

const navTabContent = () => {

    let i = 0
    const iSelect = 0

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

            eventClickQuantityProduct(product)

        })
        i++

    }

}

const dialogShell = () => {

    if (oList) {

        // Obtengo los datos procesados de la lista de "Deseados"
        const PEDIDO = oList.get_pedido()

        // Generar Fecha y Hora
        let fullday = new Date()

        // Ocultamos o Mostramos el popup especial para comunicación con el usuario        
        // $("#neograf-compra-prepare").show()


        $("#section-header-nc-notes p:nth-child(2)").remove()
        $("#section-header-nc-notes").append(`
                                        <p class="col-8">${fullday.toLocaleString()}</p>   
                                            `)

        // Armado de tabla de detalle
        $("#headerTable th").remove()

        for (let property in MYOUTPUT) {
            // Cabecera -> Se toma un Json asociado a los campos que se presentaran en cabecera.
            $("#headerTable").append(`
                                    <th>
                                        ${MYOUTPUT[property]}
                                    </th>
            `)

        }
        // Items -> Se recorre los pedidos cargados para ser mostrados
        $("table tbody tr").remove()

        for (let i = 0; i < PEDIDO.length; i++) {

            $("table tbody").append(`
                                    <tr id="bodyTable_${i}">
                                    </tr>
                                    `)

            // Proceso de calculo sobre el pedido, Totales para Importe - IVA - Total a Pagar
            for (let property in PEDIDO[i]) {

                let calculate = document.getElementById(`input-${property}-Resumen`)

                if (calculate !== null) {

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

        //Llamada a evento de la botonera.
        const BUTTON = $("#neograf-compra-prepare button")
        let myFunctions = {
            "myButtonCancelPedido": function (evnt) {
                $("#neograf-compra-prepare").hide()
            },
            "myButtonConfirm": function (evnt) {

                alert("¡Felicidades a adquirido correctamente los productos!")
                //Borramos la lista de pedidos
                evnt.view.oList.delete_pedido()

                // Ocultamos o Mostramos el popup especial para comunicación con el usuario        
                $("#neograf-compra-prepare").hide()
                document.getElementById("labelSpanHeaderProduct").innerText = "Productos agregados a tu compra: 0"
                // document.getElementById("showShellButton").classList.toggle("hide")
                $("#showShellButton").hide()

            },
            "myButtonDelete": function (evnt) {
                let opt = confirm("¿Esta seguro de Eliminar esta compra?. Su pedido se borrara completamente del sistema")

                if (opt) {
                    evnt.view.oList.delete_pedido()

                    // Ocultamos o Mostramos el popup especial para comunicación con el usuario        
                    $("#neograf-compra-prepare").hide()
                    document.getElementById("labelSpanHeaderProduct").innerText = "Productos agregados a tu compra: 0"
                    $("#showShellButton").hide()
                }
            },
            "myButtonSave": function (evnt) {
                debugger
                let ls = localStorage
                let store = JSON.stringify(evnt.view.oList.get_pedido())

                ls.setItem(`pedido_${localStorage.length + 1}`, store)
                // Ocultamos o Mostramos el popup especial para comunicación con el usuario        
                $("#neograf-compra-prepare").hide()
            }
        }

        BUTTON.click((evnt) => {
            if (evnt.view.oList.get_pedido().length > 0 ) 
                myFunctions[evnt.currentTarget.id](evnt)
        })
        
        $("#neograf-compra-prepare").slideDown("slow")

    }

}

const checkLocalstorage = () => {

    let store
    let i

    if (localStorage.length > 0) {

        setTimeout(() => {
            let opt = confirm("Existe un pedido guardado. ¿Desea seguir su tratamiento?")

            if (opt) {
                debugger
                i = 0

                while (!store) {

                    store = localStorage.getItem(`pedido_${localStorage.length}`)

                    i++
                }

                let oObject = JSON.parse(store)
                oList.oStore(oObject)
                document.getElementById("labelSpanHeaderProduct").innerText = `Productos agregados a tu compra: ${oList.get_pedido().length}`
                $("#showShellButton").show()
            }
        }, 1000);


    }

}

const cargar_producto = function (evnt) {

    oList.process_pedido(evnt);
    oList.change_label_header();

}