$('#inputcep').mask('00000-000');

function limparCampos() {
  $("#inputcep").val("")
  $("#Estado").val("")
  $("#Cidade").val("")
  $("#Bairro").val("")
  $("#Rua").val("")
}

$("#inputcep").blur(function () {
  let CEP = $("#inputcep").val().replace("-", "")
  if (CEP.length === 8) {
    $.get(`https://viacep.com.br/ws/${CEP}/json`, function (JSON) {
      try {
        if (!("erro" in JSON)) {
          $("#Estado").val(JSON.uf)
          $("#Cidade").val(JSON.localidade)
          $("#Bairro").val(JSON.bairro)
          $("#Rua").val(JSON.logradouro)
        } else {
          throw new Error("CEP invalido")
        }
      } catch (e) {
        console.log(e.message)
        alert("Digite um CEP valido")
        limparCampos()
      }
    })
  } else if (CEP.length < 8 && CEP !== "") {
    alert("Digite um CEP valido")
    limparCampos()
  } else {
    alert("Digite um CEP")
    limparCampos()
  }
})