window.onload = function() {
	  var inputEmail = document.getElementById('user');
    var inputSenha = document.getElementById('password');
    var btnEntrar = document.getElementById('signin');

    btnEntrar.addEventListener('click', function(){
        firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputSenha.value).then(function(user) {
            alert("Usuário logado com sucesso!");
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
    
            alert(errorMessage);
        });
    });
};

