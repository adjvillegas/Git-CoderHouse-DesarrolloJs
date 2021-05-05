class UserModel {
    constructor() {

    }

    check_logon(oInput) {

        var respon = false;
        var check = {
            "name": false,
            "password": false
        }
        const itemsLs = localStorage.getItem("users")
        const oObject = JSON.parse(itemsLs)

        for (let sArray of oObject) {

            for (let atributo in sArray) {
                var algo = oInput.map((prop) => {
                    if (oInput[prop].name == atributo) {
                        return oInput[prop].value
                    }
                })

                if (algo[algo.length - 1] == sArray[atributo]) {
                    check[atributo] = true
                }
            }

            if (check.name && check.password)
                respon = true

            check.name = false
            check.password = false

        }

        return respon
    }

    new_user(oInputs, fSucess, fError, fCheckError) {

        if (oInputs[2].value === oInputs[1].value) {

            var sArray = {
                "name": oInputs[0].value,
                "password": oInputs[1].value
            }

            const APIURL = 'https://reqres.in/api/users'
            const infoPost = {
                "come": sArray.name,
            }

            if (!localStorage.getItem("users")) {
                const myObject = []
                localStorage.setItem("users", JSON.stringify(myObject))
            }

            $.ajax({
                url: APIURL,
                type: "POST",
                data: infoPost,
                success: function (response) {

                    if (response.id > 0) {

                        let myObject = JSON.parse(localStorage.getItem("users"))

                        myObject.push(sArray)

                        localStorage.setItem("users", JSON.stringify(myObject))

                        fSucess(response)
                    }

                },
                error: function (response) {
                    fError()
                }
            });

        } else {

            fCheckError()

        }

    }
}