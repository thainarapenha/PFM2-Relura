$("#Início").click(() => {
    $("#HomePage").attr('style', '');
    $("#SobreNós").attr('style', 'display: none');
    $("#Login").attr('style', 'display: none');
    $("#Serviços").attr('style', 'display: none');
    $("#RecuperaçãoDeSenha").attr('style', 'display: none');
})

$("#Sobre").click(() => {
    $("#SobreNós").attr('style', '');
    $("#HomePage").attr('style', 'display: none');
    $("#Login").attr('style', 'display: none');
    $("#Serviços").attr('style', 'display: none');
    $("#RecuperaçãoDeSenha").attr('style', 'display: none');
})

$("#Planos").click(() => {
    $("#Serviços").attr('style', '');
    $("#SobreNós").attr('style', 'display: none');
    $("#Login").attr('style', 'display: none');
    $("#HomePage").attr('style', 'display: none');
    $("#RecuperaçãoDeSenha").attr('style', 'display: none');
})

$("#Entrar").click(() => {
    $("#Login").attr('style', '');
    $("#SobreNós").attr('style', 'display: none');
    $("#HomePage").attr('style', 'display: none');
    $("#Serviços").attr('style', 'display: none');
    $("#RecuperaçãoDeSenha").attr('style', 'display: none');
})

$("#EsqueciSenha").click(() => {
    $("#RecuperaçãoDeSenha").attr('style', '');
    $("#SobreNós").attr('style', 'display: none');
    $("#HomePage").attr('style', 'display: none');
    $("#Serviços").attr('style', 'display: none');
    $("#Login").attr('style', 'display: none'); 
})

$("#Cadastre-se").click(() => {
    $("#Cadastro").attr('style', '');
    $("#SobreNós").attr('style', 'display: none');
    $("#HomePage").attr('style', 'display: none');
    $("#Serviços").attr('style', 'display: none');
    $("#Login").attr('style', 'display: none');
})
