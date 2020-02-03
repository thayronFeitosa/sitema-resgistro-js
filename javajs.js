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
            texoArea.value = `CLIENTE ${nome} INFORMA QUE ESTA COM A MÍDIA BLOQUEADA, QUESTIONADO SE TINHA SENHA O ADMINISTRADOR (CAIXA DE CD), CLIENTE AFIRMA QUE SIM, FEITO ACESSO REMOTO.

            REALIZADO O PROCEDIMENTO DE DESBLOQUEIO COM A SENHA INFORMADO PELO O CLIENTE
            
            FEITO O TESTE NO PORTAL E-ECAC TUDO NORMAL
            
            SOLICITAÇÃO: ${solicitacao}
            `
            copiar();

            res.innerHTML = `NUNCA FORNEÇA A SENHA DO ADMINISTRADOR PARA O CLIENTE`;

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
        }


    } else if (sel[2].checked) {

        if (select == 1) {
            texoArea.value = `CLIENTE ${nome} ENTROU EM CONTATO PEDINDO AUXILIO PARA A INSTALAÇÃO DOS DRIVERS`
        }
        console.log('entrou no cartão')
        res.innerHTML = "entrou no cartão"

    } else if (sel[3].checked) {
        console.log('entrou no birdid')
        res.innerHTML = "entrou no birdid"

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