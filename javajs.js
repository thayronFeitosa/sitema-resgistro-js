/**
 * Pega os valores dos seus respectivos  valores do select e cria uma ocorrencia passando para dentro de um text area. Apos isso e usado o metodo copiar(); e é trasferido para a arear 
 * de trasnferencia do computador
 */

function verificar() {
    var sel = document.getElementsByName('sel');

    if (sel[0].checked) {
        removeTipoMidia();
        removeOption(); //remove todos os filhos anteriores
        optionA1(); //cria novos filhos


    } else if (sel[1].checked) {
        removeTipoMidia();
        tipoToken();
        removeOption(); //remove todos os filhos anteriores
        optionToken(); // cria novos filhos

    } else if (sel[2].checked) {
        removeTipoMidia();
        removeOption();
        optionCatao();
    } else if (sel[3].checked) {
        removeTipoMidia();
        removeOption();
        optionCatao();
    }

}

function Enviar() {
    var sel = document.getElementsByName('sel');
    var res = document.getElementById('res');
    var solicitacao = document.getElementById('solicitacaoid').value.toUpperCase();
    var texoArea = document.getElementById('textoid');
    var select = document.getElementById('select').value;
    console.log(solicitacao)
    var erro = `[ERRO]: AINDA ESTAMOS TRABALHANDO PARA IMPLEMENTAR ESSA OCORRÊNCIA POR FAVOR TENHA PACIÊNCIA`
    if (verificarSolicitacao(solicitacao) == true) {
        window.alert('A Solicitação deve conter 16 caracteres!');
    }

    if (sel[0].checked) {
        if (select == 1) {
            texoArea.value = this.a1.emitir + solicitacao;
            copiar();
        } else if (select == 2) {
            texoArea.value = this.a1.trocar_senha + solicitacao;
            copiar();
        }

    } else if (sel[1].checked) {

        if (select == 1) {
            texoArea.value = this.token.emitir + solicitacao;
            copiar();
        } else if (select == 2) {
            texoArea.value = this.token.driver + solicitacao;
            copiar();
        } else if (select == 3) {
            texoArea.value = this.token.trocarSenha + solicitacao;
            copiar();
        } else if (select == 4) {
            texoArea.value = this.token.midiaBoqueada + solicitacao;
            copiar();
        }

    } else if (sel[2].checked) {
        if (select == 1) {
            texoArea.value = this.cartao.emitir + solicitacao;
            copiar();
        } else if (select == 2) {
            texoArea.value = this.cartao.driver + solicitacao;
            copiar();
        } else if (select == 3) {
            texoArea.value = this.cartao.trocarSenha + solicitacao;
            copiar();
        } else if (select == 4) {
            texoArea.value = this.cartao.midiaBoqueada + solicitacao;
            copiar();
        }


    } else if (sel[3].checked) {
        console.log('entrou no birdid');
    }


}

function removeOption() {
    var list = document.getElementById("select");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }


}

function removeTipoMidia() {
    var list = document.getElementById("tipo-midia");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }


}

//Copia o o conteudo selecionado apra a area de tranferencia
function copiar() {
    new ClipboardJS('.btn', {
        text: function(trigger) {
            return trigger.getAttribute('aria-label');
        }
    });
}
//verifica que o solicitação tem todos os 16 caractestes
function verificarSolicitacao(solicitacao) {
    return solicitacao.length < 16 || solicitacao.length > 16 ? true : false;

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