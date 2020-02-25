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

function javaA1() {

    var a1 = document.querySelector('#tipo-midia');

    var instalacaoJava = document.createElement('INPUT');
    instalacaoJava.setAttribute('type', 'radio');
    instalacaoJava.name = 'javaA1';
    instalacaoJava.id = "instalar-java";

    var configurarJava = document.createElement('INPUT');
    configurarJava.setAttribute('type', 'radio');
    configurarJava.name = 'javaA1';
    configurarJava.id = 'configurar-java';


    var instalacaoJavaLabel = document.createElement('label');
    instalacaoJavaLabel.innerHTML = 'Instalar Java';
    var configurarJavaLabel = document.createElement('label');
    configurarJavaLabel.innerHTML = 'Configurar Java';

    a1.appendChild(instalacaoJava);
    a1.appendChild(instalacaoJavaLabel);
    a1.appendChild(configurarJava);
    a1.appendChild(configurarJavaLabel);


    var divAtual = document.getElementById('radio');
    divAtual.after(a1);

}

function escolhaJava() {
    var java = document.getElementsByName('javaA1');

    if (java[0].checked) {
        return 1;
    } else if (java[1].checked) {
        return 2
    } else {
        3
    }
}

var espaco = '\n\n';

var a1 = {
    emitir: `A1${espaco}CLIENTE COM DUVIDA NA EMISSÃO DO CERTIFICAO A1, FEITO ACESSO REMOTO ${espaco} REALIZADO A BAIXA INSTALADO O CERTIFICADO NA MAQUINA DEIXADO A OPÇÃO DE EXPORTAÇÃO DA CHAVE. ${espaco}ORIENTADO SOBRE O BACKUP ${espaco}TESTADO NO PORTAL DO E-CAC E TUDO OK ${espaco}SOLICITAÇÃO: `,
    emitirIntalarJava: `A1${espaco}CLIENTE COM DÚVIDA PARA EMITIR O CERTIFICADO.${espaco}FOI FEITO O ACESSO REMOTO.${espaco}DOWNLOAD DO EMISSOR.${espaco}REALIZADO O DOWNLOAD E INSTALAÇÃO DO JAVA.${espaco}CERTIFICADO EMITIDO COM ÊXITO.${espaco}CLIENTE INFORMADO DA CÓPIA OU BACKUP.${espaco}CERTIFICADO IMPORTADO COM ÊXITO.${espaco}TESTADO NO PORTAL ECAC COM SUCESSO.${espaco}SOLICITAÇÃO: `,
    emitiConfigurarJava: `A1${espaco}CLIENTE COM DÚVIDA PARA EMITIR O CERTIFICADO.${espaco}FOI FEITO O ACESSO REMOTO.${espaco}DOWNLOAD DO EMISSOR.${espaco}REALIZADA A CONFIGURAÇÃO DO JAVA PARA ABRIR O EMISSOR.${espaco}CERTIFICADO EMITIDO COM ÊXITO.${espaco}CLIENTE INFORMADO DA CÓPIA OU BACKUP.${espaco}CERTIFICADO IMPORTADO COM ÊXITO.${espaco}TESTADO NO PORTAL ECAC COM SUCESSO.${espaco}SOLICITAÇÃO: `,
    trocar_senha: `A1${espaco}CLIENTE COM DUVIDAS NA ALTERAÇÃO DA SENHA DO CERTIFICADO.${espaco}CLIENTE TINHA O ARQUIVO .PEM${espaco}FOI REALIZADO O PROCESSO DE ALTERAÇÃO DA SENHA MEDIANTE O DOCUMENTO RESERVADO${espaco}FOI REALIZADO O TESTE NO PORTAL E-CAC E TUDO OK ${espaco}SOLICITAÇÃO: `
}