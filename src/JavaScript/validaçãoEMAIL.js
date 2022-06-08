//função para validar dominio
function validarDominio(dominio) {
    let tamanhoDominio = dominio.length
    for (let i = 0; i < tamanhoDominio; i++) {
        console.log(dominio[i])
        if (dominio[i] === ".") {
            if (dominio[dominio.indexOf(dominio[i]) - 1] !== undefined && dominio[dominio.indexOf(dominio[i]) + 1] !== undefined) {
                dominio = dominio.replace(dominio[i], "")
                tamanhoDominio-=1
                i-=1
            } else {
                return false
            }
        }
    }
    return true
}

// função para validar email
$("#InputEmail").blur(function () {
    let EMAIL = $("#InputEmail").val()
    if (!(EMAIL.includes(" "))) {
        if (EMAIL.includes("@")) {
            if (EMAIL[EMAIL.indexOf("@") - 1] !== undefined && EMAIL[EMAIL.indexOf("@") + 1] !== undefined) {
                if (EMAIL.split("@")[1].includes(".") && EMAIL.split("@")[1].includes("@") === false) {
                    if (validarDominio(EMAIL.split("@")[1])) {
                        alert("email valido")
                    } else {
                        alert("digite um e-mail valido") 
                    }
                } else {
                    alert("digite um e-mail valido")
                }
            } else {
                alert("digite um e-mail valido")
            }
        } else {
            alert("digite um e-mail valido")
        }  
    } else {
        alert("digite um e-mail valido")
    }
})

$("#InputRecuperaSenha").blur(function () {
    let EMAIL = $("#InputRecuperaSenha").val()
    if (!(EMAIL.includes(" "))) {
        if (EMAIL.includes("@")) {
            if (EMAIL[EMAIL.indexOf("@") - 1] !== undefined && EMAIL[EMAIL.indexOf("@") + 1] !== undefined) {
                if (EMAIL.split("@")[1].includes(".") && EMAIL.split("@")[1].includes("@") === false) {
                    if (validarDominio(EMAIL.split("@")[1])) {
                        alert("email valido")
                    } else {
                        alert("digite um e-mail valido")
                    }
                } else {
                    alert("digite um e-mail valido")
                }
            } else {
                alert("digite um e-mail valido")
            }
        } else {
            alert("digite um e-mail valido")
        }
    } else {
        alert("digite um e-mail valido")
    }
})