/**
 * copia oque está o text area e copia para area de transferencia
 */
function copiar() {
    new ClipboardJS('.btn', {
        text: function(trigger) {
            return trigger.getAttribute('aria-label');
        }
    });
}


/**
 * Pega os valores dos seus respectivos  valores do select e cria uma ocorrencia passando para dentro de um text area. Apos isso e usado o metodo copiar(); e é trasferido para a arear 
 * de trasnferencia do computador
 */
function Enviar() {
    var res = document.getElementById('res');
    var nome = document.getElementById('nomeid').value;
    var solicitacao = document.getElementById('solicitacaoid').value;
    var texoArea = document.getElementById('textoid');
    var select = document.getElementById('select').value;
    console.log(nome)
    console.log(solicitacao)
    var resposta = nome;
    var erro = `[ERRO]: AINDA ESTAMOS TRABALHANDO PARA IMPLEMENTAR ESSA OCORRÊNCIA POR FAVOR TENHA PACIÊNCIA`

    var sel = document.getElementsByName('sel');

    if (sel[0].checked) {
        if (select == 1) {
            texoArea.value = `CLIENTE ${nome} COM DUVIDA NA EMISSÃO DO CERTIFICADO A1, FEITO ACESSO REMOTO

REALIZADO A BAIXA
INSTALADO CERTIFICADO NA MAQUINA DEIXANDO A OPÇÃO DE EXPORTAÇÃO DA CHAVE.
ORIENTADO SOBRE O BACKUP
            
TESTADO NO PORTAL E-CAC TUDO OK
            
SOLICITAÇÃO: ${solicitacao}
            `
            copiar();
            res.innerHTML = "NÃO SE ESQUEÃO DE FALAR SOBRE A INPORTANCIA DO BACKUP"

        } else if (select == 2) {
            texoArea.value = ""
            res.innerHTML = erro
        } else if (select == 3) {
            texoArea.value = `CLIENTE ${nome} COM DUVIDA NA ALTERAÇÃO DA SENHA DE SUA MÍDIA, FEITO ACESSO REMOTO

REALIZADO O PROCEDIMENTO DE ALTERAÇÃO DA SENHA
            
FEITO O TESTE NO PORTAL E-CAC TUDO OK
            
SOLICITAÇÃO: ${solicitacao}
            `
            copiar();
            res.value = "NUNCA FORNEÇA A SENHA DO ADMINISTRADOR PARA O CLIENTE"
        } else if (select == 4) {
            texoArea.value = ``
            copiar();

            res.innerHTML = erro;

        } else if (select == 5) {

            texoArea.value = ""
            res.innerHTML = erro
        }
    } else if (sel[1].checked) {

        if (select == 1) {
            texoArea.value = `CLIENTE ${nome} COM DUVIDA NA EMISSÃO DO CERTIFICADO A3, FEITO ACESSO REMOTO

INSTALA O DRIVER
REALIZADO A BAIXA DO CERTIFICADO
            .
TESTADO NO PORTAL E-CAC TUDO OK
            
SOLICITAÇÃO: ${solicitacao}`;
            copiar();
            res.innerHTML = "SEMPRE REALISE O TENTE DO CERTIFICADO"
        } else if (select == 2) {

            texoArea.value = `CLIENTE ${nome} COM DUVIDA NA INSTALAÇÃO DO DRIVER, FEITO ACESSO REMOTO

INSTADO DRIVER
            
CONFIGURADO DLL NO MOZILLA
            
TESTADO NO PORTAL E-CAC TUDO OK
            
SOLICITAÇÃO: ${solicitacao}
            `
        } else if (select == 3) {
            texoArea.value = `CLIENTE ${nome} ENTROU EM CONTATO COM DUVIDA NA ALTERAÇÃO DA SENHA DE SUA MÍDIA, FEITO ACESSO REMOTO.
            
FOI REALIZADO O PROCEDIMENTO DE ALTERAÇÃO DA SENHA.

FOI FEITO O TESTE NO PORTAL E-CAC E TUDO OK.

SOLICITAÇÃO: ${solicitacao}
            `
        } else if (select == 4) {
            texoArea.value = `CLIENTE ${nome} INFORMA QUE ESTAVA COM SUA MÍDIA BLOQUEADA, QUESTIONADO SE TINHA A SENHA DO ADMINISTRADOR (CAIXA DE CD), CLIENTE ${nome} AFIRMA QUE SIM, FEITO  O ACESSO REMOTO.
            
REALIZADO O PROCEDIMENTO DE DESBLOQUEIO COM A SENHA INFORMADO PELO CLIENTE.

FOI FEITO O TESTE NO PORTAL DO E-CAC E TUDO OK.

SOLICITAÇÃO: ${solicitacao}
            `
            copiar();

            res.innerHTML = "NUNCA FORNEÇA A SENHA DO ADMINISTRADOR PARA O CLIENTE"

        } else if (select == 5) {
            texoArea.value = "";
            copiar();
            res.innerHTML = erro;

        }


    } else if (sel[2].checked) {
        if (select == 1) {
            texoArea.value = `CLIENTE ${nome} COM DUVIDA NA EMISSÃO DO CERTIFICADO A3, FEITO ACESSO REMOTO

INSTALA O DRIVER
REALIZADO A BAIXA DO CERTIFICADO
            .
TESTADO NO PORTAL E-CAC TUDO OK
            
SOLICITAÇÃO: ${solicitacao}`;
            copiar();
            res.innerHTML = "SEMPRE REALISE O TENTE DO CERTIFICADO"
        } else if (select == 2) {

            texoArea.value = `CLIENTE ${nome} COM DUVIDA NA INSTALAÇÃO DO DRIVER, FEITO ACESSO REMOTO

INSTADO DRIVER
            
CONFIGURADO DLL NO MOZILLA
            
TESTADO NO PORTAL E-CAC TUDO OK
            
SOLICITAÇÃO: ${solicitacao}
            `
        } else if (select == 3) {
            texoArea.value = `CLIENTE ${nome} ENTROU EM CONTATO COM DUVIDA NA ALTERAÇÃO DA SENHA DE SUA MÍDIA, FEITO ACESSO REMOTO.
            
FOI REALIZADO O PROCEDIMENTO DE ALTERAÇÃO DA SENHA.

FOI FEITO O TESTE NO PORTAL E-CAC E TUDO OK.

SOLICITAÇÃO: ${solicitacao}
            `
        } else if (select == 4) {
            texoArea.value = `CLIENTE ${nome} INFORMA QUE ESTAVA COM SUA MÍDIA BLOQUEADA, QUESTIONADO SE TINHA A SENHA DO ADMINISTRADOR (CAIXA DE CD), CLIENTE ${nome} AFIRMA QUE SIM, FEITO  O ACESSO REMOTO.
            
REALIZADO O PROCEDIMENTO DE DESBLOQUEIO COM A SENHA INFORMADO PELO CLIENTE.

FOI FEITO O TESTE NO PORTAL DO E-CAC E TUDO OK.

SOLICITAÇÃO: ${solicitacao}
            `
            copiar();

            res.innerHTML = "NUNCA FORNEÇA A SENHA DO ADMINISTRADOR PARA O CLIENTE"

        } else if (select == 5) {
            texoArea.value = "";
            copiar();
            res.innerHTML = erro;

        }


    } else if (sel[3].checked) {

        if (select == 1) {
            texoArea.value = `CLIENTE ${nome} ENTROU EM CONTATO PEDINDO AUXILIO PARA EMITIR O CERTIFICADO, CLIENTE FOI ORIENTADO NO PROCESSO.
            
 CLIENTE FOI ORIENTADO SOBRE A IMPORTANCIA DA SENHA DO PORTAL.

 FOI SINCRONIZADO O CELULAR, 

 FOI EMITIDO SEM ERROS, TESTADO NO PORTAL E-CAC E TUOD OK.

 SOLICITAÇÃO: ${solicitacao}

                `
            copiar();

            res.innerHTML = "SEMPRE INFORME O CLIENTE SOBRE A IMPORTANCIA DA SENHA DO PORTAL"
        } else if (select == 2) {
            texoArea.value = `CLINETE ${nome} ENTROU EM CONTATO PEDINDO AUXILIO PARA INSTALAR O BIRDID DESKTOP.
FOI INSTALADO O DRIVE, SINCRONIZADO O USUARIO.

FOI TESTADO O CERTIFICADO NO PORTAL E-CAC E TUDO OK.

SOLICITAÇÃO: ${solicitacao}
`
            copiar();
            res.innerHTML = "SEMPRE FAÇA O TESTE DO CERTIFICADO"
        } else if (select == 3) {
            texoArea.value = `CLIENTE ${nome} ENTROU EM CONTATO ALEGANDO QUE NÃO SABIA A SENHA DO PORTAL E QUERIA TROCAR A SENHA.
            
CLIENTE ORIENTADO QUE ESSA SENHA ERA INPOSSIVEL DE RECUPERAR POIS ERA CRIADO POR QUEM EMITIU O CERTIFICADO.

CLIENTE ORIENADO QUE NESSE CASO E SOMENTE ADQUIRINDO OUTRO CERIFICADO.

CLIENTE ORIENTADO QUE ASSIM QUE TIVER UMA NOVA SOLICITAÇÃO O MESMO TERIA QUE ENTRAR EM CONTATO COM O SUPORTE PARA QUE FOSSE APAGADO A CONTA ANTERIOR PARA EVITAR QUE FOSSE EMITIDO O CERTIFICADO NA CONTATO QUE O MESMO NÃO POSSIA A SENHA DE ACESSO AO PORTAL

SOLICITAÇÃO: ${solicitacao}
`

            copiar();
            res.innerHTML = "SEMPRE INFORME O CLIENTE SOBRE A IMPORTANCIA DA SENHA DO PORTAL"
        } else if (select == 4) {
            texoArea.value = ""
            copiar();
            res.innerHTML = erro;
        } else if (select == 5) {
            texoArea.value = "";
            copiar();
            res.innerHTML = erro;
        }

    }

    /*   if (select == 1) {
        console.log("entrou 1 " + nome)
        texoArea.value = `Cliente ${nome} entrou em contato solicitando auxilio para emitir o certificado. Cliente foi orientado sobre a importância da senha do portal. Foi sincronizado o celular, testado no ecac e tudo ok. Solicitação: ${solicitacao}`;

        res.innerHTML = `Cliente ${nome} entrou em contato solicitando auxilio para emitir o certificado. <br> Cliente foi orientado sobre a importância da senha do portal. <br> Foi sincronizado o celular, testado no ecac e tudo ok.
        
        Solicitação: ${solicitacao}`
        copiar();
    } else if (select == 2) {
        console.log("entrou 2" + nome)

        res.innerHTML = `Cliente  ${nome} entrou em contato solicitando auxilio para sincronixar o celular <br>Foi feito a sincronisação no portal, mandado o codigo de verificação por emial<br>Foi sincronizado o celular no portal, feito o teste no Portal ecat e tudo ok <br><br>Solicitação: ${solicitacao}`;
    } else if (select == 3) {
        console.log('entrou 3')
        texoArea.value = `Cliente ${nome} entrou em contato alegando que não estava conseguindo utilizar o certificado, foi verificado que o certiifcado estava emitido mas não constava no portal <br>Cliente orientado que teriamos que abrir um chamado e assim que for solucionado entraremos em contato. <br>Solicitaçao: ${solicitacao}`
        copiar();
    }

*/


}
// apaga oque está no text area
function Apagar() {
    var texoArea = document.getElementById('textoid');
    var res = document.getElementById('res');
    texoArea.value = " ";

}
// torna tudo que está dentro do text area em maiusculo 
function uppcase() {
    var valor = document.getElementById('textoid').value.toUpperCase();
    document.getElementById('textoid').value = "";
    document.getElementById('textoid').value = valor;
}
// torna tudo que está dentro do text area em minusculo
function lowercase() {
    var valor = document.getElementById('textoid').value.toLowerCase();
    document.getElementById('textoid').value = "";
    document.getElementById('textoid').value = valor;
}