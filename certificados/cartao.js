function optionCatao() {
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

// função e responsavel por informar quais são os cartãos que a empresa trabalha

function tipoCartao() {
    var cartao = document.getElementById('tipo-midia');

    // criando os radios 
    var obertur = document.createElement('INPUT');
    obertur.setAttribute('type', 'radio');
    obertur.name = 'cartao';
    obertur.id = 'oberturid';

    var idemia = document.createElement('INPUT');
    idemia.setAttribute('type', 'radio');
    idemia.name = 'cartao';
    idemia.id = 'idemiaid';

    var gemalto = document.createElement('INPUT');
    gemalto.setAttribute('type', 'radio');
    gemalto.name = 'cartao';
    gemalto.id = 'gemaltoid';

    var safesing = document.createElement('INPUT');
    safesing.setAttribute('type', 'radio');
    safesing.name = 'cartao';
    safesing.id = 'safesingid';

    //lables do cartão

    var oberturLabel = document.createElement("label");
    oberturLabel.innerHTML = 'Obertur';

    var idemiaLabel = document.createElement('lable');
    idemiaLabel.innerHTML = 'Idemia 2'

    var gemaltoLabel = document.createElement('label');
    gemaltoLabel.innerHTML = 'Gemalto';

    var safesingLable = document.createElement('label');
    safesingLable.innerHTML = 'Safesing';

    // adicionando os filhos na div tipo de midia

    cartao.appendChild(obertur);
    cartao.appendChild(oberturLabel);
    cartao.appendChild(idemia);
    cartao.appendChild(idemiaLabel);
    cartao.appendChild(gemalto);
    cartao.appendChild(gemaltoLabel);
    cartao.appendChild(safesing);
    cartao.appendChild(safesingLable);


    //cria os novos elementos depois da div radio
    var divAtual = document.getElementById('radio');
    divAtual.after(cartao);
}

function escolherCartao() {

    var cartao = document.getElementsByName('cartao');

    if (cartao[0].checked) {
        return 'A3 (OBERTUR)';
    } else if (cartao[1].checked) {
        return 'A3 (IDEMIA 2)';
    } else if (cartao[2].checked) {
        return 'A3 (GMALTO)';
    } else if (cartao[3].checked) {
        return 'A3 (SAFESING)';
    } else {
        return null;
    }

}

var espaco = '\n\n';

var cartao = {
    emitir: `${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDAS NA EMISSÃO DO CERTIFICADO A3, FEITO O ACESSO REMOTO${espaco}INSTALADO O DRIVER${espaco}REALIZADO A BAIXA DO CERTIFICADO${espaco}TESTADO NO PORTAL E-CAC E TUDO OK.${espaco}$SOLICITAÇÃO`,
    senha: `${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDA NA ALTERAÇÃO DA SENHA DA SUA MÍDIA, FEITO ACESSO REMOTO${espaco}FOI REALIZADO O PROCEDIMENTO DE ALTERAÇÃO DA SENHA.${espaco}FOI FEITO O TESTE NO PORTAL E-CAC E TUDO OK.${espaco}SOLICITAÇÃO`,
    driver: `${espaco}CLIENTE ENTROU EM CONTATO COM DUVIDA NA INSTALAÇÃO DO DRIVER, FEITO ACESSO REMOTO${espaco}INSTALADO O DRIVER${espaco}CONFIGURADO DLL NO MOZILA${espaco}TESTADO NO PORTAL E-CAC E TUDO OK.${espaco}SOLICITAÇÃO:`,
    midiaBoqueada: `${espaco}CLIENTE ENTROU EM CONTATO E INFORMA QUE SUA MÍDIA ESTAVA BLOQUEADA,${espaco}QUESTIONADO SE TINHA A SENHA DO ADMINISTADOR (CAIXA DE CD), O MESMO ALEGOU QUE SIM${espaco}FOI FEITO ACESSO REMOTO${espaco}FOI REALIZADO O PROCEDIMENTO DE DESBLOQUEIO COM A SENHA INFORMADO PELO CLIENTE${espaco}FOI FEITO O TESTE NO PORTAL DO E-CAC E TUDO OK.${espaco}SOLICITAÇÃO:`
}