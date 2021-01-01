/*
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-firestore.js"></script>
    <script src="./js/firebase/init.js"></script>
*/


window.onload = function() {
	var inputEmailReg = document.getElementById('user');
    var inputSenhaReg = document.getElementById('password');
    var inputSenhaRegConfirma = document.getElementById('password-confirm');
    var btnRegistrar = document.getElementById('signup');

    btnRegistrar.addEventListener('click', function(){

        if(inputSenhaReg.value === inputSenhaRegConfirma.value){
            firebase.auth().createUserWithEmailAndPassword(inputEmailReg.value, inputSenhaReg.value).then(function(user) {
                alert("Usuário criado com sucesso!");
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
        
                alert(errorMessage);    
            });
        } else {
            alert("Senhas não coincidem!");
        }

    });
};