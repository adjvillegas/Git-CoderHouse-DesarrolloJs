class UserController {
    constructor (Model, View) {
        this.UserModel = Model
        this.UserView = View
    }

    logon(padre) {
        this.UserView.logon(padre, (evnt) => {
            var myInput = $(":input").not(":input[type=submit],:input[type=button]")
            if (this.UserModel.checkLogon(myInput)) {
                debugger
            } else {
                this.UserView.logonError()
            }
            this.UserView.clearInput(myInput)
        })
    }
}