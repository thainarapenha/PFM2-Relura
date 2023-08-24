function validarDominio(dominio) {
  let tamanhoDominio = dominio.length
  for (let i = 0; i < tamanhoDominio; i++) {
    console.log(dominio[i])
    if (dominio[i] === ".") {
      if (dominio[dominio.indexOf(dominio[i]) - 1] !== undefined && dominio[dominio.indexOf(dominio[i]) + 1] !== undefined) {
        dominio = dominio.replace(dominio[i], "")
        tamanhoDominio -= 1
        i -= 1
      } else {
        return false
      }
    }
  }
  return true
}

$("#InputEmail").blur(function () {
  let EMAIL = $("#InputEmail").val()
  if (!(EMAIL.includes(" "))) {
    if (EMAIL.includes("@")) {
      if (EMAIL[EMAIL.indexOf("@") - 1] !== undefined && EMAIL[EMAIL.indexOf("@") + 1] !== undefined) {
        if (EMAIL.split("@")[1].includes(".") && EMAIL.split("@")[1].includes("@") === false) {
          if (validarDominio(EMAIL.split("@")[1])) {
            //pass
          } else {
            alert("digite um e-mail valido")
            $("#InputEmail").val("")
          }
        } else {
          alert("digite um e-mail valido")
          $("#InputEmail").val("")
        }
      } else {
        alert("digite um e-mail valido")
        $("#InputEmail").val("")
      }
    } else {
      alert("digite um e-mail valido")
      $("#InputEmail").val("")
    }
  } else {
    alert("digite um e-mail valido")
    $("#InputEmail").val("")
  }
})

$("#InputRecuperaSenha").blur(function () {
  let EMAIL = $("#InputRecuperaSenha").val()
  if (!(EMAIL.includes(" "))) {
    if (EMAIL.includes("@")) {
      if (EMAIL[EMAIL.indexOf("@") - 1] !== undefined && EMAIL[EMAIL.indexOf("@") + 1] !== undefined) {
        if (EMAIL.split("@")[1].includes(".") && EMAIL.split("@")[1].includes("@") === false) {
          if (validarDominio(EMAIL.split("@")[1])) {
            //pass
          } else {
            alert("digite um e-mail valido")
            $("#InputRecuperaSenha").val("")
          }
        } else {
          alert("digite um e-mail valido")
          $("#InputRecuperaSenha").val("")
        }
      } else {
        alert("digite um e-mail valido")
        $("#InputRecuperaSenha").val("")
      }
    } else {
      alert("digite um e-mail valido")
      $("#InputRecuperaSenha").val("")
    }
  } else {
    alert("digite um e-mail valido")
    $("#InputRecuperaSenha").val("")
  }
})

$("#InputCadastro").blur(function () {
  let EMAIL = $("#InputCadastro").val()
  if (!(EMAIL.includes(" "))) {
    if (EMAIL.includes("@")) {
      if (EMAIL[EMAIL.indexOf("@") - 1] !== undefined && EMAIL[EMAIL.indexOf("@") + 1] !== undefined) {
        if (EMAIL.split("@")[1].includes(".") && EMAIL.split("@")[1].includes("@") === false) {
          if (validarDominio(EMAIL.split("@")[1])) {
            //pass
          } else {
            alert("digite um e-mail valido")
            $("#InputCadastro").val("")
          }
        } else {
          alert("digite um e-mail valido")
          $("#InputCadastro").val("")
        }
      } else {
        alert("digite um e-mail valido")
        $("#InputCadastro").val("")
      }
    } else {
      alert("digite um e-mail valido")
      $("#InputCadastro").val("")
    }
  } else {
    alert("digite um e-mail valido")
    $("#InputCadastro").val("")
  }
})