function optionToken() {
    var opicao = document.createElement('option');
    var selectid = document.getElementById('select');
    var emitir = document.createElement('option');
    var senha = document.createElement('option');
    var drive = document.createElement('option');
    var midiaBoqueada = document.createElement('option');
    var erroNaBaixa = document.createElement('option');

    opicao.textContent = "--- Opções ---"
    emitir.textContent = "Emitir Certificado";
    drive.textContent = "Instalar Driver";
    senha.textContent = "Trocar a Senha";
    midiaBoqueada.textContent = "Midia Bloqueada"
    erroNaBaixa.textContent = "Erro na Baixa"

    opicao.value = 0;
    emitir.value = 1;
    drive.value = 2;
    senha.value = 3;
    midiaBoqueada.value = 4;
    erroNaBaixa.value = 5;

    selectid.appendChild(opicao);
    selectid.appendChild(emitir);
    selectid.appendChild(drive);
    selectid.appendChild(senha);
    selectid.appendChild(midiaBoqueada);
    selectid.appendChild(erroNaBaixa);

}

// função e responsavel por informar quais são os token que a empresa trabalha
function tipoToken() {

    var token = document.getElementById('tipo-midia');

    //e criado o radio button
    var safenet = document.createElement('INPUT');
    safenet.setAttribute('type', 'radio');
    safenet.name = 'token';
    safenet.id = 'safenetid';

    var epass2003 = document.createElement('INPUT');
    epass2003.setAttribute('type', 'radio');
    epass2003.name = 'token';
    epass2003.id = 'epass2003id';

    var gd = document.createElement('INPUT');
    gd.setAttribute("type", 'radio');
    gd.name = 'token';
    gd.id = 'gdid';

    //criando os labels para os tokens
    var safenetLabel = document.createElement('label');
    safenetLabel.innerHTML = 'Safenet  ';

    var epass2003Label = document.createElement('label');
    epass2003Label.innerHTML = 'Epass 2003  ';

    var gdLabel = document.createElement('label');
    gdLabel.innerHTML = "GD  "

    // adicionando os filhos a div 
    token.appendChild(safenet);
    token.appendChild(safenetLabel);
    token.appendChild(epass2003);
    token.appendChild(epass2003Label);
    token.appendChild(gd);
    token.appendChild(gdLabel);


    // adiciona o novo elemento criado e seu conteúdo ao DOM 
    var divAtual = document.getElementById("radio");
    divAtual.after(token);


}


var espaco = '\n';

var token = {
    emitir: `A3 (): ${espaco}${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDAS NA EMISSÃO DO CERTIFICADO A3, FEITO O ACESSO REMOTO${espaco}INSTALADO O DRIVER${espaco}REALIZADO A BAIXA DO CERTIFICADO${espaco}TESTADO NO PORTAL E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO`,
    driver: `A3():${espaco}${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDA NA INSTALAÇÃO DO DRIVER, FEITO ACESSO REMOTO${espaco}INSTALADO O DRIVER${espaco}CONFIGURADO DLL NO MOZILA${espaco}TESTADO NO PORTAL E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO:`,
    trocarSenha: `A3():${espaco}${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDA NA ALTERAÇÃO DA SENHA DA SUA MÍDIA, FEITO ACESSO REMOTO${espaco}FOI REALIZADO O PROCEDIMENTO DE ALTERAÇÃO DA SENHA.${espaco}FOI FEITO O TESTE NO PORTAL E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO`,
    midiaBoqueada: `A3(): ${espaco}${espaco}CLIENTE ENTROU EM CONTATO E INFORMA QUE SUA MÍDIA ESTAVA BLOQUEADA,${espaco}QUESTIONADO SE TINHA A SENHA DO ADMINISTADOR (CAIXA DE CD), O MESMO ALEGOU QUE SIM${espaco}FOI FEITO ACESSO REMOTO${espaco}FOI REALIZADO O PROCEDIMENTO DE DESBLOQUEIO COM A SENHA INFORMADO PELO CLIENTE${espaco}FOI FEITO O TESTE NO PORTAL DO E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO:`
}