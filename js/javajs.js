/*verifica e um dos métodos principais,ele cria e remove os elementos do select 
dependendo doque o usuário escolher no radio
 */
function verificar() {
    var sel = document.getElementsByName('sel');

    if (sel[0].checked) {
        removeTipoMidia();
        javaA1();
        removeOption(); //remove todos os filhos anteriores
        optionA1(); //cria novos filhos


    } else if (sel[1].checked) {
        removeTipoMidia();
        tipoToken();
        removeOption(); //remove todos os filhos anteriores
        optionToken(); // cria novos filhos

    } else if (sel[2].checked) {
        removeTipoMidia();
        tipoCartao();
        removeOption();
        optionCatao();
    } else if (sel[3].checked) {
        removeTipoMidia();
        removeOption();
        optionBirdid();
    }

}

// verifica oque o usuário escolheu e envia para o text area a ocorrncia pronta 
function Enviar() {
    var sel = document.getElementsByName('sel');
    var res = document.getElementById('res');
    var solicitacao = document.getElementById('solicitacaoid').value.toUpperCase().trim();
    var texoArea = document.getElementById('textoid');
    var select = document.getElementById('select').value;
    console.log(solicitacao)
    var erro = `[ERRO]: AINDA ESTAMOS TRABALHANDO PARA IMPLEMENTAR ESSA OCORRÊNCIA POR FAVOR TENHA PACIÊNCIA`
    if (verificarSolicitacao(solicitacao) == true) {
        window.alert('A Solicitação deve conter 16 caracteres!');
        return;
    }

    if (sel[0].checked) {
        var escolha = escolhaJava();
        if (select == 1) {
            removeTipoMidia();
            javaA1();

            if (escolha == 1) {
                texoArea.value = this.a1.emitirIntalarJava + solicitacao;
                copiar();
                return;
            } else if (escolha == 2) {

                texoArea.value = this.a1.emitiConfigurarJava + solicitacao;
                copiar();
                return;
            } else {
                texoArea.value = this.a1.emitir + solicitacao;
                copiar();
            }
        } else if (select == 2) {
            texoArea.value = this.a1.trocar_senha + solicitacao;
            copiar();
        } else if (select == 3) {
            texoArea.value = this.a1.instalar + solicitacao;
            copiar();
        }

    } else if (sel[1].checked) {
        var escolha = escolhaToken();
        if (escolha == null) {
            window.alert('E obrigaotio ecolher o token!');
            return;
        }
        if (select == 1) {
            texoArea.value = escolha + this.token.emitir + solicitacao;
            copiar();
        } else if (select == 2) {
            texoArea.value = escolha + this.token.driver + solicitacao;
            copiar();
        } else if (select == 3) {
            texoArea.value = escolha + this.token.trocarSenha + solicitacao;
            copiar();
        } else if (select == 4) {
            texoArea.value = escolha + this.token.midiaBoqueada + solicitacao;
            copiar();
        }

    } else if (sel[2].checked) {
        var escolha = escolherCartao();
        if (escolha == null) {
            window.alert('E obrigatório escolher o cartão!');
            return;
        }
        if (select == 1) {
            texoArea.value = escolha + this.cartao.emitir + solicitacao;
            copiar();
        } else if (select == 2) {
            texoArea.value = escolha + this.cartao.driver + solicitacao;
            copiar();
        } else if (select == 3) {
            texoArea.value = escolha + this.cartao.senha + solicitacao;
            copiar();
        } else if (select == 4) {
            texoArea.value = escolha + this.cartao.midiaBoqueada + solicitacao;
            copiar();
        }


    } else if (sel[3].checked) {

        if (select == 1) {
            texoArea.value = this.birdid.emitir + solicitacao;
            copiar();
        } else if (select == 2) {
            texoArea.value = this.birdid.sincronisar + solicitacao;
            copiar();
        } else if (select == 3) {
            texoArea.value = this.birdid.instalarUtilitario + solicitacao;
            copiar();
        } else if (select == 4) {
            texoArea.value = this.birdid.esqueceuSenha + solicitacao;
            copiar();
        } else if (select == 5) {
            texoArea.value = this.birdid.psbio + solicitacao;

        }
    }


}
// remove os filhos anteriores id select
function removeOption() {
    var list = document.getElementById("select");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }


}
// remove os filhos anteriores do id tipo de midia 
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