/*
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-firestore.js"></script>
    <script src="./js/firebase/init.js"></script>
*/


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