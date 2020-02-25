var selectid = document.getElementById('select');

function optionBirdid() {
    // criando as opções do Bird id
    var select = document.querySelector('#select');
    var option = document.createElement('option');
    var emitir = document.createElement('option');
    var sincronisar = document.createElement('option');
    var instalarUtilitario = document.createElement('option');
    var esqueceuSenha = document.createElement('option');
    var psbio = document.createElement("option");

    // adicionando o textContent
    option.textContent = '--- Opções ---';
    emitir.textContent = 'Emitir';
    sincronisar.textContent = 'Sincronizar';
    instalarUtilitario.textContent = 'Instalar Utilitário';
    esqueceuSenha.textContent = 'Esquecimento da senha';
    psbio.textContent = 'PSBIO';


    //colocando os valores das opçoes

    option.value = 0;
    emitir.value = 1;
    sincronisar.value = 2;
    instalarUtilitario.value = 3;
    esqueceuSenha.value = 4;
    psbio.value = 5;


    // adicionando os filhos ao pai select

    select.appendChild(option);
    select.appendChild(emitir);
    select.appendChild(sincronisar);
    select.appendChild(instalarUtilitario);
    select.appendChild(esqueceuSenha);
    select.appendChild(psbio);

}

var espaco = '\n\n';

birdid = {
    emitir: `BIRD ID: ${espaco}CLIENTE COM DÚVIDA PARA EMITIR O CERTIFICADO.${espaco}FOI FEITO O ACESSO REMOTO.${espaco}FOI REALIZADA A SINCRONIZAÇÃO DO DISPOSITIVO.${espaco}CERTIFICADO EMITIDO COM ÊXITO.${espaco}INFORMADO SOBRE A IMPORTANCIA DA SENHA DE ACESSO AO PORTAL.${espaco}TESTADO NO ECAC COM ÊXITO NA OPÇÃO EM NUVEM.${espaco}SOLICITAÇÃO: `,
    sincronisar: `BIRD ID: ${espaco}CLIENTE COM DÚVIDA PARA SINCRONIZAR O DISPOSITIVO.${espaco}FOI FEITO O ACESSO REMOTO.${espaco}REALIZADO O ACESSO AO PORTAL PELO SMS/E-MAIL.${espaco}FOI REALIZADA A SINCRONIZAÇÃO DO DISPOSITIVO.${espaco}TESTADO NO ECAC COM ÊXITO NA OPÇÃO EM NUVEM.${espaco}SOLICITAÇÃO: `,
    instalarUtilitario: `BIRD ID:${espaco}CLIENTE COM DÚVIDA NA INSTALAÇÃO DO UTILITÁRIO DESKTOP.${espaco}FOI FEITO O ACESSO REMOTO.${espaco}DOWNLOAD E INSTALAÇÃO DO UTILITÁRIO COM ÊXITO.${espaco}REALIZADA A CONFIGURAÇÃO PARA O FUNCIONAMENTO DO UTILITÁRIO.${espaco}ADICIONADO O USUÁRIO DO CLIENTE NO UTILITÁRIO.${espaco}TESTADO NO ECAC COM ÊXITO.${espaco}SOLICITAÇÃO: `,
    esqueceuSenha: `BIRD ID${espaco}CLIENTE COM DÚVIDA PARA SINCRONIZAR O DISPOSITIVO.${espaco}FOI FEITO O ACESSO REMOTO.${espaco}VERIFICADO QUE O MESMO NÃO LEMBRA A SENHA DE ACESSO AO PORTAL.${espaco}ORIENTADO O MESMO REALIZAR ALGUMAS TENTATIVAS, POIS NÃO TEM BLOQUEIO.${espaco}O MESMO NÃO LEMBRA.${espaco}INFORMADO QUE NESTE CASO NÃO É POSSÍVEL RECUPERAR A SENHA, É NECESSÁRIO ADQUIRIR UM NOVO CERTIFICADO.${espaco}SOLICITAÇÃO: `,
    psbio: `BIRD ID: ${espaco}CLIENTE QUERIA EMITIR O CERTIFICADO.${espaco}FOI VERIFICADO QUE O CERTIFICADO ESTAVA EM PROCESSAMENTO DE PSBIO.${espaco}INFORMADO QUE ESSA LIBERAÇÃO É FEITA AUTOMATICAMENTE E QUE TEM QUE AGUARDAR A LIBERAÇÃO.${espaco}SOLICITAÇÃO: `

}