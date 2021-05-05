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

    create_user(padre, fNotFound) {
        this.UserView.create_user(padre, (evt) => {

            var formsInputs = $(":input").not(":input[type=submit],:input[type=button]")

            this.UserModel.new_user(formsInputs, (evt) => {
                this.UserView.user_success(padre)
            },
            (evt) => {
                fNotFound(padre)
            },
            (evt) => {
                this.UserView.logon_error()
            })

        })
    }
}