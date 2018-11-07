/ eslint-disable /

function validar (){
    
    var cedula, email, ncontrato, nombre, apellidos, telefono, direccion, ciudad;
    cedula = document.getElementById("cedula").value;
    email = document.getElementById("email").value;
    ncontrato = document.getElementById("ncontrato").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    telefono = document.getElementById("telefono").value;
    direccion = document.getElementById("direccion").value;
    ciudad = document.getElementById("ciudad").value;
    
    expresion =/\w+@\w+\.+[a-z]/;
    
   
if (cedula === "" ||email === "" ||ncontrato === "" || nombre === "" || apellidos === "" || telefono === "" || direccion === "" || ciudad === "" ){
    alert("el campo esta vacio");
   
    return false;
} else if (cedula.length>10) {
    alert("La cedula muy larga");
     return false;
    
} else if (isNaN(cedula)) {
    alert("La cedula ingresada no son numeros");
     return false;
    
} else if (email.length>100) {
    alert("El email es muy largo");
     return false;
    
}  else if (ncontrato.length>10) {
    alert("El numero de contrato es muy largo");
     return false;
    
}    else if (nombre.length>25) {
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
    
} else if (direccion.length>100) {
    alert("la  direccion no es valida");
     return false;
    
} else if(!expresion.test(email)){
    alert("El email no es valido");
     return false;
} else if (ciudad.length>10) {
    alert("La ciudad muy larga");
     return false;
    
}

}