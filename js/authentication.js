var anthEmailPassButton = document.getElementById('anthEmailPassButton')
var createUserButton = document.getElementById('createUserButton')
var authGithHubButton = document.getElementById('authGithHubButton')
var authFacebookButton = document.getElementById('authFacebookButton')
var authTwitterButtonn = document.getElementById('authTwitterButton')
var authGoogleButton = document.getElementById('authGoogleButton')
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton')
var emailInput = document.getElementById('emailInput')
var passwordInput = document.getElementById('passwordInput')
var logOutButton = document.getElementById('logOutButton')
var displayName = document.getElementById('displayName')

createUserButton.addEventListener('click', function(){
    firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function(){
        alert('Bem Vindo' + emailInput.value)
    })
    .cath(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('falha ao cadastrar')
    });
});
anthEmailPassButton.addEventListener('click', function(){
    firebase
    .auth()
    .sighInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function(){
        alert('Bem Vindo' + emailInput.value)
    })
    .cath(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('falha ao cadastrar')
    });
});
logOutButton.addEventListener('click', function(){
    firebase
    .auth()
    .sighOut()
    .then(function(){
        displayName.innerText = 'voce nao esta autenticado';
        alert('go out')
    })
    .cath(function(error){
        console.error(error);
        
    });
});
authGithHubButton.addEventListener('click',function(){
    var provider = new firebase.auth.GithubAuthProvider();
    sighIn(provider);

})
authGoogleButton.addEventListener('click',function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    sighIn(provider);

})
authTwitterButtonn.addEventListener('click',function(){
    var provider = new firebase.auth.TwiterAuthProvider();
    sighIn(provider);

})
authFacebookButton.addEventListener('click',function(){
    var provider = new firebase.auth.FacebookAuthProvider();
    sighIn(provider);

})
function sighIn(provider) {
    firebase.auth()
    .sighInWithPopup(provider)
    .then(function (result) {
        console.log(result)
        var token= result.credential.accessToken;
        displayName.innerText= 'Bem vindo '+result.user.displayName
        
    }).cath(function(error){
        console.log(error)
    })
    
}