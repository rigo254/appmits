<?php
$conexion = mysqli_connect("localhost", "root", "", "mitistelebd");
//recibir los datos y almacenarlos en variables
$cedula= $_POST["cedula"];
$email = $_POST["email"];
$ncontrato = $_POST["ncontrato"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$telefono = $_POST["telefono"];
$direccion = $_POST["direccion"];
$ciudad = $_POST["ciudad"];
//consulta para insertar
$insertar = "INSERT INTO cliente(Cedula, Email, NContrato, Nombres, Apellidos, Telefono, Direccion, Ciudad) VALUES ( '$cedula','$email', '$ncontrato', '$nombre', '$apellidos', '$telefono', '$direccion', '$ciudad')";
//mcomparar datos iguales
$verificar_cliente = mysqli_query($conexion, "SELECT * FROM cliente WHERE Email = '$email'");
if(mysqli_num_rows($verificar_cliente) > 0){
    echo '<script>
             alert("El cliente ya esta registrado");
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
             alert("Cliente registrdo exitosamente");
             window.history.go(-1);
             </script>';
}
//cerrar conexion
mysqli_close($conexion);