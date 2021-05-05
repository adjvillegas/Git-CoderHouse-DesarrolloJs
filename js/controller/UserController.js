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
                this.UserView.logon_sucessfull(myInput, oEntity)
            } else {
                this.UserView.logon_error()
            }
            this.UserView.clear_input(myInput)
        })
    }

    create_user(padre) {
        this.UserView.create_user(padre)
    }
}