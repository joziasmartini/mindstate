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

/*  
    Necessita inclusão de:
    <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
*/

var firebaseConfig = {
    apiKey: "AIzaSyCxXoFsahAlxzSptugROXlX2jBrfzCrXgU",
    authDomain: "mytimely.firebaseapp.com",
    databaseURL: "https://mytimely.firebaseio.com",
    projectId: "mytimely",
    storageBucket: "mytimely.appspot.com",
    messagingSenderId: "448474687169",
    appId: "1:448474687169:web:85c462dc9cb5db3e7cd640"
  };
  
firebase.initializeApp(firebaseConfig);
