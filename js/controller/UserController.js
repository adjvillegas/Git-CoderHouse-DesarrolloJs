class UserController {
    constructor (Model, View) {
        this.UserModel = Model
        this.UserView = View
        this.response
    }

    logon(padre, oEntity) {

        this.UserView.logon(padre, (evnt) => {
            var myInput = $(":input").not(":input[type=submit],:input[type=button]")
            if (this.UserModel.check_logon(myInput)) {
                this.UserView.logon_sucessfull(myInput[0].value, oEntity)
            } else {
                this.UserView.logon_error("No encontratamos tu usuario<br>Por favor revisa la contraseña o usuario ingresado")
            }
            this.UserView.clear_input(myInput)
        })
    }

    create_user(padre, fNotFound) {
        this.UserView.create_user(padre, (evt) => {

            var formsInputs = $(":input").not(":input[type=submit],:input[type=button]")

            this.UserModel.new_user(formsInputs, (response) => {
               
                this.UserView.user_success(padre, response)
                this.UserView.logon_sucessfull(response.name, undefined)
            },
            (evt) => {
                fNotFound(padre)
            },
            (msg) => {
                this.UserView.logon_error(msg)
            })

        })
    }
}