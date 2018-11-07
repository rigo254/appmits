<?php
$conexion = mysqli_connect("localhost", "root", "", "mitstelecodb");
//recibir los datos y almacenarlos en variables
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$select = $_POST["select"];
$ciudad = $_POST["ciudad"];
//consulta para insertar
$insertar = "INSERT INTO usuario(Cedula, Nombre, Apellidos, Telefono, Email, Cargo, Ciudad) VALUES ( '$id', '$nombre', '$apellidos',
'$telefono', '$email', '$select', '$ciudad')";
//mcomparar datos iguales
$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuario WHERE Email = '$email'");
if(mysqli_num_rows($verificar_usuario) > 0){
    echo '<script>
             alert("El usuario ya esta registrado");
             window.history.go(-1);
             </script>';
    exit;
}
//ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);
if(!$resultado){
    echo 'error al registarse';
} else{
    
    echo '<script>
             alert("Usuario registrdo exitosamente");
             window.history.go(-1);
             </script>';
}
//cerrar conexion
mysqli_close($conexion);
    