function validar(){
    //CAPTAR AS VARIAVEIS
    const idade = documento.getElementById( 'idade').valeu;
    const nivel =  documento.getElementById( 'nivel').valeu;
    const msg =  documento.getElementById( 'mensagem');

    if (idade >= 16 && nivel > 5){
        msg.innerText= "Inscrição aceita: Categoria PRO";
        msg.style.color = "green";
    } else if (idade >= 16 && nivel <= 5){
            msg.innerText = "Inscrição aceita: Categoria Iniciante";
            mgs.style.color = "blue";
    } else {
       mgs.innerText = "Inscrição recusada: idade minima 16 anos"
       mgs.style.color = "red"
    } 
       
    }
       
    function validarSenha() {
        const senha = document.getElementById('senha').value;
        const comfirmaSenha = document.getElementById('comfirma-Senha').value;
        const msgSenha = document.getElementById('msgSenha');

        if (senha === comfirmaSenha) {
            msgSenha.innerText = "Senhas coincidem";
            msgSenha.style.color = "green";
        } else {
            msgSenha.innerText = "Senhas não coincidem";
            msgSenha.style.color = "red";
        }
    }