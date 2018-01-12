
 /*Registro de nuevos usuarios*/
function registrar(){
    //console.log('diste click en Ingresar');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //console.log(email);
    //console.log(password);
     if (email ==="" || password==="" ) {
      alert('Debe Ingresar datos');
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (){
        //verificarEmail()
      })
      .catch(function(error) { //promesa catch, si la autentificacion no ocurre catch ejecuta una funcion con parametro e, donde e guardo 2 errores en variables
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
       });
    } 
   

  }

/*Ingreso usuarios o logueo*/
function ingresar(){
    console.log('diste click en Ingresar');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    //console.log(email);
    //console.log(password); 
   if (email === "" || password === "" ) {
      alert('Debe Ingresar datos');
    }
    else{
         firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        // ...
    });
}


}

/*función que observa la sesion activa de un usuario*/
function observador(){
  //Siexiste un cambio de usuario, se ejecuta un if y caso contrario ejecuta un else
  firebase.auth()
  .onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    aparece(user); // se envia el parametro user a la funcion aparece
    console.log('Existe usuario activo');
    var displayName = user.displayName;
    var email = user.email;
    console.log('Correo verificado: ' + user.emailVerified); 
    var emailVerified = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
  } else {
    // No user is signed in.
    console.log('No existe usuario activo');
  }
});
}
observador(); //se ejecutacuando se carga la practica

/*Contenido para usuarios logueados*/
function aparece(user){ //parametro user recibido desde el observador
  var user = user;
  var contenido = document.getElementById('contenido');
    if (user.emailVerified) {
        /*Comillas especiales nos permiten hacer template donde podemos escribir codigo html en el codigo javascript*/
      contenido.innerHTML = `
      <p>Bienvenido</p>  
      <button onclick="cerrar()">Cerrar sesión</button>
      `;
    }
  //contenido.innerHTML = 'prueba del perfil usuario';

}
/*Funcion para desloguearse Pendiente de terminar*/
function cerrar(){
    firebase.auth().signOut() // Cierra sesion desde firebase, toma 2 parametros then y catch
    .then(function() { // (respuesta positiva)
    // Sign-out successful.
        //console.log('Sesión cerrada');
        alert('Su sesion ha cerrado');

     }).catch(function(error) {//(respuesta negativa)/error : parametro
    // An error happened.
    console.log(error);
    });
}

/*Envía un mensaje de verificación al usuario*/
function verificarEmail(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification()
  .then(function() { // (respuesta positiva)
  // Email sent.
  alert('Enviando confirmacion a tu correo...');
  console.log("Correo enviado con éxito"); //muestra un mensaje que 
  }).catch(function(error) {//(respuesta negativa)
  // An error happened.
  console.log(error); //pinta error de verificacion
  });
}

/*
No se implementa
//Funcion que verifica que el email tenga el formato correcto
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " es válido :)");
    $("#result").css("color", "green");
  } else {
    $("#result").text(email + " no es válido :(");
    $("#result").css("color", "red");
  }
  return false;
}
*/