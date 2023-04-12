
//atividade1
function validarDados(){
    //dados forms inputs

    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produtos = frmRegistro.inProd.value;
    let qtd = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    let divMensagem = document.getElementById('mensagem-erro');
    let mensagem = '';

    divMensagem.innerHTML ='';
    
    

    if(nome.length <5){
        mensagem="Necessarios 5 caracteres para nome";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    if(telefone.length <5){
        mensagem="Necessarios 5 caracteres para telefone";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    if(email.length <5){
        mensagem="Necessarios 5 caracteres para email";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    if(produtos.length <5){
        mensagem="Necessarios 5 caracteres para produtos";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    


    if (data.trim() == '') {
        frmRegistro.inCli.focus();
        mensagem="Este campo não pode estar vazio";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    if (nome.trim() == '') {
        frmRegistro.inCli.focus();
        mensagem="Este campo não pode estar vazio";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }


    if (telefone.trim() == '') {
        frmRegistro.inFone.focus();
        mensagem="Este campo não pode estar vazio";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }

    if (email.trim() == '') {
        frmRegistro.inMail.focus();
        mensagem="Este campo não pode estar vazio";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }

    if (produtos.trim() == '') {
        frmRegistro.inProd.focus();
        mensagem="Este campo não pode estar vazio";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }

    if (qtd.trim() == '') {
        frmRegistro.inQtd.focus();
        mensagem="Este campo não pode estar vazio";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        return false;
    }
    if (qtd < 0){
        mensagem="A quantidade não pode ser negativa";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmRegistro.inQtd.focus();
        return false;
    }

    if (valor.trim() == '') {
        frmRegistro.inVal.focus();
        return false;
    }
    if (valor < 0){
        mensagem="O valor não pode ser negativa";
        divMensagem.innerHTML = mensagem;
        divMensagem.style.display='block';
        frmRegistro.inVal.focus();
        return false;
    }    


}






//atividade 2

function muitasImagens(){

    let img = document.getElementById('canvas');
    img.innerHTML = '';

    let qtd = document.getElementById('inQtdImg').value;
    
    for (let i=0;i<qtd;i++){
        console.log(i);
        img.innerHTML += '<img src="img/logo.png" class="imagens" />'
    }
}





     



//atividade3

function acender() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

    if (arquivo == 'acesa.jpg' || arquivo == '')
        imagem.src = 'img/apagada.jpg';
    else
        imagem.src = 'img/acesa.jpg';
}




//atividade 4

document.getElementById("btnEnviar").addEventListener("click",function(){
    var valorPedido = parseFloat(document.getElementById("inValorPedido").value);

    var desconto1=0.005;
    var desconto2=0.008;
    var desconto3=0.010;
    var desconto4=0.015;

    var percentualDesconto, valorDesconto;
    if (valorPedido>=2000){
        percentualDesconto=desconto4;
    }
    else
        if (valorPedido>=1500){
            percentualDesconto=desconto3;
        }
    else
         if (valorPedido>=1000){
             percentualDesconto=desconto2;
         }
    else
        if (valorPedido>=500){
            percentualDesconto=desconto1;
        }
    else{
        percentualDesconto=0;
    }

    valorDesconto =valorPedido*percentualDesconto;

    var valorFinal = valorPedido-valorDesconto;

    document.getElementById('inPercDesc').value = percentualDesconto*100;
    document.getElementById('inValDesc').value = valorDesconto.toFixed(2);
    document.getElementById('inValFinal').value = valorFinal.toFixed(2);


})
