class dinamicdom {

  constructor() {

    this.myOutput = {
      descripcion: "Producto",
      cantidad: "Cantidad",
      iva: "Ali. Impuesto",
      precio: "Precio Uni."
    }

  }

  set_dom_layout = function () {

    let fila = ""
    let active = "show active"

    this.productList.innerHTML = ""

    if (PRODUCTLIST.length > 0) {

      for (let product of PRODUCTLIST) {

        fila = this.get_card(product, active)

        this.productList.innerHTML += fila

        active = ""
        
      }

    }

  }

  get_card = function (p, active) {

    let card = `<div class="tab-pane fade ${active}" id="list-${p.categoria}" role="tabpanel"
        aria-labelledby="list-${p.categoria}-list">

        <div class="row">
          <div class="col-11 col-md-4">
            <div class="shadow-lg p-3 mb-5 bg-white rounded neograf-product-card animate__animated animate__zoomIn">
              <div class="neograf-product-img-card col-12">
                <img src="img/${p.archive}" alt="${p.categoria}" class="neograf-imagen-responsive">
              </div>
              <h5>${p.descripcion}</h5>
              <div class="neograf-product-img-card-txt">
                <p class="neograf-fonts">${p.nota}</p>
              </div>
              <div class="neograf-product-img-price-txt">
                <span>Desde</span>
                <span class="neograf-product-price">$${p.precioDesde}</span>
                <span class="neograf-product-quantity"> + IVA</span>
                <span class="neograf-product-quantity"> /${p.cantidadDesde} ${p.medicionDesde}</span>
                <span>
                  <button class="neograf-button-span" type="button" onClick="add_quanty_product(${p.id})"><i
                      class="fas fa-shopping-cart"></i></button>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>`

    return card;
  }

  view_add_product = function (evnt) {

    this.windows_view_product()

    this.defineContent(evnt)

  }

  view_add_pedido = function (oObject) {

    // this.windows_view_product()

    this.resultContent(oObject)
  }

  windows_view_product = function () {
    
    // document.getElementById("neograf-compra").classList.toggle("hide")
    $("#neograf-compra").hide()
  }

  defineContent = function (indx) {

    this.productView.innerHTML = ""
    let r = PRODUCTLIST.find(c => c.id == indx)

    const content = `<div class="container-fluid neograf-fonts">
                      <h3 class="container product-add-title text-center">${r.descripcion}</h3>
                        <div class="row justify-content-center">
                        </div>
                      <div class="row justify-content-center" style="padding: 2%;text-align: center;">
                        <div class="col-4 d-flex align-items-center" id="div-product-nota">
                        </div>
                        <div class="col-6" id="div-product-image">
                        </div>
                      </div>
                      <div class="row justify-content-center" style="padding: 2%;text-align: center;">
                        <div class="col-2" id="form-cantidad-label">
                          <label for="form-cantidad-input" class="form-label">Cantidad</label>
                        </div>
                        <div class="col-4" id="div-cantidad-input">
                        </div>      
                        <div class="col-6" id="div-calculo-input">
                          <p>Cantidad total por cada Unidad: 0</p>
                        </div>                    
                      </div>
                      <div class="row-12 justify-content-center" id="divButton" style="padding: 2%;text-align: center;">      
                      </div>          
                    </div>
                    </div>`

    this.productView.innerHTML = content

    const divcantidad = document.getElementById("div-cantidad-input")
    const cantidadInput = document.createElement("input")
    cantidadInput.id = "form-cantidad-input"
    cantidadInput.type = "number"
    cantidadInput.classList.toggle("form-control")

    divcantidad.appendChild(cantidadInput)

    cantidadInput.addEventListener("change", () => capturoTecla(event))

    var capturoTecla = function (evnt) {

      let divCalculo = document.getElementById("div-calculo-input")
      let calculado = parseInt(parseInt(evnt.currentTarget.value) * parseInt(r.cantidadDesde))
      let textCalculo = `<p>Cantidad total por cada Unidad: ${calculado} ${r.medicionDesde}</p>`

      divCalculo.innerHTML = textCalculo

    }

    const divButton = document.getElementById("divButton")

    const buttonAcept = document.createElement("button")
    buttonAcept.id = "myButtonAccept"
    buttonAcept.innerText = "COMPRAR"
    buttonAcept.classList.toggle("btn") // Si existe agrega sino borra
    buttonAcept.classList.add("btn-primary")

    divButton.appendChild(buttonAcept)


    const buttonCancel = document.createElement("button")
    buttonCancel.id = "myButtonCancel"
    buttonCancel.innerText = "CERRAR"
    buttonCancel.classList.toggle("btn") // Si existe agrega sino borra
    buttonCancel.classList.add("btn-danger")

    divButton.appendChild(buttonCancel)

    buttonAcept.addEventListener("click",
      function (evnt) {
        // Verifica que existan algo ingresado en el input de cantidad
        if (cantidadInput.value.length > 0) {
          // Verifica que sea mayor que 0
          if (parseInt(cantidadInput.value) > 0) {
            cargar_producto(r)
          }

        }

      })

    // Funcionalidad de botón cancelar de pantalla de carga
    buttonCancel.onclick = this.windows_view_product

    // Muestra el texto de nota en la pantalla
    const divNota = document.getElementById("div-product-nota")
    const paragraph = `<p>${r.nota}</p>`

    divNota.innerHTML = paragraph

    // Muestra la imagen
    const divImg = document.getElementById("div-product-image")
    const sImg = `<img src="img/${r.archive}" alt="${r.descripcion}" style="height: 250px; width: 250px;">`

    divImg.innerHTML = sImg

  }

  deleteAllrow(child) {

    while (child.childElementCount > 0) {
      try {
        child.deleteRow(child.childElementCount - 1)
      } catch (error) {
        child.innerHTML = ""
      }

    }

  }

  resultContent = function (oObject) {

    let myContent = document.getElementById("neograf-compra")

    myContent.innerHTML = ""

    //Definición del contexto
    const content = `
    <div class="container">
    <div class="row">
      <div class="col">
    <h3>Detalle del Pedido</h3>
      </div>
    </div>
    <div class="row row-cols-4">
      <p class="col">Fecha:</p>
      <p class="col-8">27/03/2019 14:08</p>      
    </div>
    <div class="row"> 
    <div class="col">
  <table class="table">
    <thead id="headerTable">
    </thead>
    <tbody id="bodyTable">
    </tbody>
  </table>
  </div>
  </div>
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
    <div class="row justify-content-end" id="divButtonPedido" style="padding: 2%;text-align: center;">      
    </div>               
  </div>`

    //Agregado de Tablas

    myContent.innerHTML = content


    let myBodyTable = document.getElementById("bodyTable")
    let myheaderTable = document.getElementById("headerTable")

    let myproducts = this.myOutput
    let i = 0

    this.deleteAllrow(myBodyTable);
    this.deleteAllrow(myheaderTable);

    let hhilera = document.createElement("tr");
 
    for (let property in myproducts) {

      let helement = "th";
      let hcelda = document.createElement(helement)
      let hTextoCelda = document.createTextNode(myproducts[property])   
      hcelda.appendChild(hTextoCelda)
      hhilera.appendChild(hcelda)      

    }

    myheaderTable.appendChild(hhilera)

    for (let object of oObject) {

      let hilera = document.createElement("tr");

      for (let property in object) {

        let calculate = document.getElementById(`input-${property}-Resumen`)

        if (calculate !== null ) {

          calculate.innerText = (parseFloat(calculate.innerText) + parseFloat(object[property])).toFixed(2)
        }

        if (property in myproducts) {

          let element = "td";

          if (i == 0) {
            element = "th";
          }

          let celda = document.createElement(element)     
          let textoCelda = document.createTextNode(object[property])


          celda.appendChild(textoCelda);
          hilera.appendChild(celda);          
          i++

        }

      }

      i = 0
  
      myBodyTable.appendChild(hilera);

    }


    // Agregado de Botones
    const divButton = document.getElementById("divButtonPedido")

    const buttonConfirm = document.createElement("button")
    buttonConfirm.id = "myButtonConfirm"
    buttonConfirm.innerText = "COMPRAR"
    buttonConfirm.classList.add("col-2")
    buttonConfirm.classList.add("btn")
    buttonConfirm.classList.add("btn-primary")
  
    const buttonBack = document.createElement("button")
    buttonBack.id = "myButtonBack"
    buttonBack.innerText = "VOLVER"
    buttonBack.classList.add("col-2")
    buttonBack.classList.add("btn")
    buttonBack.classList.add("btn-secondary")    

    const buttonDelete = document.createElement("button")
    buttonDelete.id = "myButtonConfirm"
    buttonDelete.innerText = "BORRAR"
    buttonDelete.classList.add("col-2")
    buttonDelete.classList.add("btn")
    buttonDelete.classList.add("btn-danger")

    const buttonSave = document.createElement("button")
    buttonSave.id = "myButtonSave"
    buttonSave.innerText = "GUARDAR"
    buttonSave.classList.add("col-2")
    buttonSave.classList.add("btn")
    buttonSave.classList.add("btn-success")

    divButton.appendChild(buttonConfirm)
    divButton.appendChild(buttonDelete)
    divButton.appendChild(buttonSave)  
    divButton.appendChild(buttonBack)
    
    buttonConfirm.addEventListener("click",
    function (evnt) {
 
      alert("¡Felicidades a adquirido correctamente los productos!")
      evnt.view.oList.delete_pedido()
      document.getElementById("neograf-compra").classList.toggle("hide")
      document.getElementById("labelSpanHeaderProduct").innerText = "Productos agregados a tu compra: 0"
      document.getElementById("showShellButton").classList.toggle("hide")

    })

    buttonDelete.addEventListener("click",
    function (evnt) {

      let opt = confirm("¿Esta seguro de Eliminar esta compra?. Su pedido se borrara completamente del sistema")

      if (opt) {
        evnt.view.oList.delete_pedido()
        document.getElementById("neograf-compra").classList.toggle("hide")    
        document.getElementById("labelSpanHeaderProduct").innerText = "Productos agregados a tu compra: 0"  
        document.getElementById("showShellButton").classList.toggle("hide")                  
      }
    })
    
    buttonBack.addEventListener("click",
    function (evnt) {

        document.getElementById("neograf-compra").classList.toggle("hide")    
               
    })

    buttonSave.addEventListener("click",
    function (evnt) {

        let ls = localStorage
        let store = JSON.stringify(evnt.view.oList.get_pedido())

        ls.setItem("pedido", store)  
        document.getElementById("neograf-compra").classList.toggle("hide")    
               
    })

  }

}