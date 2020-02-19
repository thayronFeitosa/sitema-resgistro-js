function optionA1() {

    var selectid = document.getElementById('select');
    var opicao = document.createElement('option');
    var emitir = document.createElement('option');
    var senha = document.createElement('option');

    opicao.textContent = "--- Opções ---";
    emitir.textContent = "Emitir Certificado";
    senha.textContent = "Trocar a senha";

    opicao.value = 0;
    emitir.value = 1;
    senha.value = 2;

    selectid.appendChild(opicao);
    selectid.appendChild(emitir);
    selectid.appendChild(senha);

}

var espaco = '\n';

var a1 = {
    emitir: `A1${espaco}${espaco}CLIENTE COM DUVIDA NA EMISSÃO DO CERTIFICAO A1, FEITO ACESSO REMOTO ${espaco} REALIZADO A BAIXA INSTALADO O CERTIFICADO NA MAQUINA DEIXADO A OPÇÃO DE EXPORTAÇÃO DA CHAVE. ${espaco}ORIENTADO SOBRE O BACKUP ${espaco}TESTADO NO PORTAL DO E-CAC E TUDO OK ${espaco}${espaco}SOLICITAÇÃO: `,
    trocar_senha: `A1${espaco}${espaco}CLIENTE COM DUVIDAS NA ALTERAÇÃO DA SENHA DO CERTIFICADO.${espaco}CLIENTE TINHA O ARQUIVO .PEM${espaco}FOI REALIZADO O PROCESSO DE ALTERAÇÃO DA SENHA MEDIANTE O DOCUMENTO RESERVADO${espaco}FOI REALIZADO O TESTE NO PORTAL E-CAC E TUDO OK ${espaco}${espaco}SOLICITAÇÃO`
}