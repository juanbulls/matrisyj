<?php
include('marlene.php');
$nombre = isset($_REQUEST["nombre"]) ? $_REQUEST["nombre"] : (isset($argv[1]) ? $argv[1] : null);

q("INSERT INTO matri.arbol (nombre) VALUES ('$nombre');");
?>