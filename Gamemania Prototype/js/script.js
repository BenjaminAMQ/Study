//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )    
}

//Validação de Login

function login() {
    var logged = 0;
    var user = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;

    if (user == 'admin' && password == 123456) {
        window.location = "index.html";
        logged = 1;
    }

    if (logged == 0) {
        
        alert('acesso negado. dados incorretos');

    }
    
} 

//Ativar alert no botão cadastrar

function cadastro() {
    alert('Cadastrado com sucesso!');
    window.location.href = "index.html";
    logged = 1
}
