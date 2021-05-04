class UserModel {
    constructor() {
        
    }

    checkLogon (oInput) {
        
        var respon
        const pass = localStorage.getItem(oInput[0].value)

        if (pass == oInput[1].value) {
            respon = true
        } else {
            respon = false
        }
        
        return respon
    }
}