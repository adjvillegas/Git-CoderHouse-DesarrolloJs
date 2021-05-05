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
                  <input type="text" class="form-control form-control-lg" id="inputUser" placeholder="Usuario" name="name">
                </div>
              </div>
              <div class="row-7 mt-2">
                <label for="inputPassword" class="visually-hidden">Contraseña</label>
                <div class="col-sm">
                  <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="Contraseña" name="password">
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

        const body_prepare_create_ = (onclick) => {
           return `<div class="container">
           <div class="row justify-content-center ">
             <form>
             <div class="col-12 mb-3 mt-3 d-flex justify-content-center">
               <h3>Registración</p>
             </div>
             <div class="row mb-3 justify-content-center">
             <label for="inputCreateUser" class="col-sm-2 col-form-label">Usuario</label>
             <div class="col-sm-3">
               <input type="text" class="form-control" id="inputCreateUser">
             </div>
           </div>
           <div class="row mb-3 justify-content-center">
             <label for="inputCreatePassword" class="col-sm-2 col-form-label">Contraseña</label>
             <div class="col-sm-3">
               <input type="password" class="form-control" id="inputCreatePassword">
             </div>
           </div>
           <div class="row mb-3 justify-content-center">
             <label for="inputRepetPassword" class="col-sm-2 col-form-label">Repite Contraseña</label>
             <div class="col-sm-3">
               <input type="password" class="form-control" id="inputRepetPassword">
             </div>
           </div>           
           <div class="col-12 d-flex justify-content-center buttonNewUser">
             <button type="submit" id="btnNewUser" class="btn btn-primary mb-4 mt-4">Crear</button>
             </div>  
             </form>
             <div class="row-12 text-center mb-4" id="textError" style="display: none;">
             <p>No Coinciden las contraseñas</p>
           </div>             
             </div> 
         </div>`
       }

       const body_display_create_ = () => {
         
          return `<div>
                    <h2>Bienvenido a la Imprenta Neograf<h2>
                    <p>Se genero tu usuario para hacer uso de la plataforma</p>
                    <p>Por favor recuerda tu id de creación, con el mismo podrás gestionar tus datos de la cuenta</p>
                  </div>`
       }

       this.body_prepare_login = () => body_prepare_login_()
       this.body_prepare_create = () => body_prepare_create_()
       this.body_display_create = () => body_display_create_()
    }

    logon(padre, fLogon) {
        $(padre).html(this.body_prepare_login())
        $("#btnLogUser").on("click", fLogon)
    }

    create_user(padre, onclick) {
      $(padre).html(this.body_prepare_create())

      $("#btnNewUser").on('click', onclick)
      
    }

    user_success(padre, onclick) {
      $(padre).html(this.body_display_create())
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