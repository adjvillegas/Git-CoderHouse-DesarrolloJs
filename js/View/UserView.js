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
              <button type="submit" class="btn btn-primary" onclick="createUser()">Iniciar</button>
            </div>

            <div class="col-12 d-flex justify-content-center buttonNewUser mt-4 mb-4">
              <a>Crear Usuario</a>
            </div>            
          </div>
      
          </div>`
        }

        const body_prepare_create = () => {
           return `<div class="container-fluid" id="newUser">
           <div class="row dialogNewUser">
             <div class="col-md-12 d-flex justify-content-center titleNewUser">
               <h3>HOLA NUEVO USUARIO</p>
             </div>
             <div class="row">
               <label for="inputNombre" class="col-sm-2 col-form-label col-form-label-lg">Nombre</label>
               <div class="col-sm-10">
                 <input type="text" class="form-control form-control-lg" id="inputNombre" placeholder="Ingrese su Nombre y Apellido Aqui">
               </div>
             </div>
             <div class="row">
               <label for="inputEmail" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
               <div class="col-sm-10">
                 <input type="email" class="form-control form-control-lg" id="inputEmail" placeholder="Ingrese su Email Aqui">
               </div>
             </div>        
     
           <div class="col-12 d-flex justify-content-center buttonNewUser">
             <button type="submit" class="btn btn-primary" onclick="createUser()">Crear</button>
           </div>
         </div>
     
         </div>`
       }

       this.body_prepare_login = () => body_prepare_login_() 
    }

    logon(padre) {
        $(padre).html(this.body_prepare_login())
    }
}