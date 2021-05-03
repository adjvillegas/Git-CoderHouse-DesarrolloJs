class UserController {
    constructor (Model, View) {
        this.UserModel = Model
        this.UserView = View
    }

    logon(padre) {
        this.UserView.logon(padre)
    }
}