<?php
$clave = $_REQUEST["puntos"] ?? $argv[1] ?? null;
$permitidas = array("nana", "mona", "prado", "sumo", "prado sumo");

$secMapa = " <p> <b>Indicaciones</b> </p> <p>" +
+ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
+ "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
+ "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
+ "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
+ "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
+ "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
+ "culpa qui officia deserunt mollit anim id est laborum."
+ "</p> <img src='mapaDummy.png'>";

if (in_array(strtolower($clave), $permitidas)) {
    return $secMapa;
} else {
    return "mala";
}
?>