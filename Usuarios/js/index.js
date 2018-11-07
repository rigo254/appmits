/* eslint-disable */

function validar (){
    
    var id, nombre, apellidos, telefono, email, select, ciudad, expresion;
    id = document.getElementById("id").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    select = document.getElementById("select").value;
    ciudad = document.getElementById("ciudad").value;
    
    expresion =/\w+@\w+\.+[a-z]/;
    
   
if (id === "" || nombre === "" || apellidos === "" || telefono === "" || email === "" || select === "" || ciudad === "" ){
    alert("el campo esta vacio");
   
    return false;
} else if (id.length>10) {
    alert("La cedula muy larga");
     return false;
    
} else if (isNaN(id)) {
    alert("La cedula ingresada no son numeros");
     return false;
    
}else if (nombre.length>25) {
    alert("El nombre es muy larga");
     return false;
    
} else if (apellidos.length>25) {
    alert("Los apellidos son muy largos");
     return false;
    
} else if (telefono.length>10) {
    alert("El telefono es muy largo");
     return false;
    
} else if (isNaN(telefono)) {
    alert("El telefono ingresado no son numeros");
     return false;
    
} else if (email.length>100) {
    alert("El email es muy largo");
     return false;
    
} else if(!expresion.test(email)){
    alert("El email no es valido");
     return false;
} else if (ciudad.length>10) {
    alert("La ciudad muy larga");
     return false;
    
}
    $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

} 


