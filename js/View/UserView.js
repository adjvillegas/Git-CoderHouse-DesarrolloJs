class UserView {
    constructor() {
       
        const body_prepare_login_ = () => {
            return `<div class="container d-flex justify-content-center" id="login">
            <div class="row-7 mt-5">
              <div class="col-md-12 d-flex justify-content-center titleNewUser">
                <h4>INICIE SESIÓN</h4>
              </div>
              <div class="row-7 mt-3">
               <!-- <label for="inputUser" class="visually-hidden">Usuario</label> -->
                <div class="col-sm">
                  <input type="text" class="form-control form-control-lg" id="inputUser" placeholder="Usuario">
                </div>
              </div>
              <div class="row-7 mt-2">
                <label for="inputPassword" class="visually-hidden">Contraseña</label>
                <div class="col-sm">
                  <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="Contraseña">
                </div>
              </div>        
            <div class="col-12 d-flex justify-content-center buttonNewUser mt-4 mb-4">
              <button type="submit" class="btn btn-primary" id="btnLogUser">Iniciar</button>
            </div>

            <div class="col-12 d-flex justify-content-center buttonNewUser mt-4 mb-4">
              <a class="nav-link" href="#/newUser">Crear Usuario</a>
            </div>            
          </div>
      
          </div>
          
          <div class="row-7 text-center mb-4" id="textError" style="display: none;">
          <p>No encontratamos tu usuario</p>
          <p>Por favor revisa la contraseña o usuario ingresado</p>
        </div>`
        }

        const body_prepare_create_ = () => {
           return `<!--<div class="container-fluid" id="newUser">-->
           <div class="row dialogNewUser justify-content-center ">
             <div class="col-7 d-flex justify-content-center titleNewUser">
               <h3>Registración</p>
             </div>

             <form>

             <div class="row mt-2">
               <label for="inputNombre" class="col-2 col-form-label col-form-label-lg">Nombre</label>
               <!-- <div class="col-5"> -->
                 <input type="text" class="form-control form-control-lg" id="inputNombre" placeholder="Ingrese su Nombre y Apellido Aqui">
                 <!-- </div> -->
             </div>
             <div class="row mt-4">
               <label for="inputEmail" class="col2 col-form-label col-form-label-lg">Email</label>
               <div class="col-5">
                 <input type="email" class="form-control form-control-lg" id="inputEmail" placeholder="Ingrese su Email Aqui">
               </div>
             </div>        
     
             <div class="col-12 d-flex justify-content-center buttonNewUser">
             <button type="submit" class="btn btn-primary" onclick="createUser()">Crear</button>
             </div>
             
             </form>
          </div>
     
         <!--</div>-->`
       }

       this.body_prepare_login = () => body_prepare_login_()
       this.body_prepare_create = () => body_prepare_create_()

    }

    logon(padre, fLogon) {
        $(padre).html(this.body_prepare_login())
        $("#btnLogUser").on("click", fLogon)
    }

    create_user(padre) {
      $(padre).html(this.body_prepare_create())
    }

    logon_sucessfull (oInput, oEntity) {

      let myLink = $(".navbar-nav li:last-child a")

      for (let select of myLink) {

        select.innerText = `Bienvenido: ${oInput[0].value}`
        myLink.attr('href', '#/cambio')
      
      }
      
      oEntity.productoView.display_welcome()
    }

    logon_error () {
       $("#textError").show()
    }

    clear_input (oInput) {
      for (let sInput of oInput) { 
          sInput.value = ""
      } 
    }
}