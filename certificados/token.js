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

var espaco = '\n';

var token = {
    emitir: `A3 (): ${espaco}${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDAS NA EMISSÃO DO CERTIFICADO A3, FEITO O ACESSO REMOTO${espaco}INSTALADO O DRIVER${espaco}REALIZADO A BAIXA DO CERTIFICADO${espaco}TESTADO NO PORTAL E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO`,
    driver: `A3():${espaco}${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDA NA INSTALAÇÃO DO DRIVER, FEITO ACESSO REMOTO${espaco}INSTALADO O DRIVER${espaco}CONFIGURADO DLL NO MOZILA${espaco}TESTADO NO PORTAL E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO:`,
    trocarSenha: `A3():${espaco}${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDA NA ALTERAÇÃO DA SENHA DA SUA MÍDIA, FEITO ACESSO REMOTO${espaco}FOI REALIZADO O PROCEDIMENTO DE ALTERAÇÃO DA SENHA.${espaco}FOI FEITO O TESTE NO PORTAL E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO`,
    midiaBoqueada: `A3(): ${espaco}${espaco}CLIENTE ENTROU EM CONTATO E INFORMA QUE SUA MÍDIA ESTAVA BLOQUEADA,${espaco}QUESTIONADO SE TINHA A SENHA DO ADMINISTADOR (CAIXA DE CD), O MESMO ALEGOU QUE SIM${espaco}FOI FEITO ACESSO REMOTO${espaco}FOI REALIZADO O PROCEDIMENTO DE DESBLOQUEIO COM A SENHA INFORMADO PELO CLIENTE${espaco}FOI FEITO O TESTE NO PORTAL DO E-CAC E TUDO OK.${espaco}${espaco}SOLICITAÇÃO:`
}