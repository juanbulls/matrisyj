<?php
$clave = isset($_REQUEST["clave"]) ? $_REQUEST["clave"] : (isset($argv[1]) ? $argv[1] : null);
$permitidas = array("nana", "mona", "prado", "sumo", "prado sumo", "toyota prado");

$secMapa = "<button class='botonEmail'"
. "onclick=\"abrirPagina('https://waze.com/ul/hd2g7m7u38')\">"
. "Waze: La Selva </button>"
. "<button class='botonEmail'"
. "onclick=\"abrirPagina('https://waze.com/ul/hd2g7v3qg0')\">"
. "Waze: Hacienda Brujas </button>"
. "<br>"
. "<button class='botonEmail'"
. "onclick=\"abrirPagina('https://maps.app.goo.gl/BUHDbV8rMrLZ1ff69')\">"
. "Google Maps: La Selva </button>"
. "<button class='botonEmail'"
. "onclick=\"abrirPagina('https://maps.app.goo.gl/cAXDch5cvm3yCERr8')\">"
. "Google Maps: Hacienda Brujas </button>"
. "<br>"
. "</ul> <img id=\"imgMapa\" src='mpim/mapa.jpg'>"
. " <p> <b>Indicaciones</b> </p>"
. "<br>"
. "<br>"
. "<b>Por la Calera</b> <ul>"
. "<li>Luego del peaje de patios </li>"
. "<li>Pasando la pradera de Potosí </li>"
. "<li>Antes de la rotonda que desvía a Guasca a mano derecha es la misa. En la capilla de la hacienda La Selva </li>"
. "<li>Para la recepción siga manejando hacia Sopó </li>"
. "<li>Luego de la rotonda que desvía a Guasca y antes del pueblo de Sopo, busque el restaurante My Food a mano derecha</li>"
. "<li>Salga de la carretera manejando por entre el restaurante y la cancha de la escuelita, maneje derecho hasta el portón de brujas</li>"
. "<li>Ya llegó, parquee frente a alguien si quiere irse temprano, si planea quedarse hasta tarde, trate de parquear sin bloquear a los que salen temprano, para eso parquee contra el muro norte.li></ul>"
. "<br>"
. "<b>Por Sopó</b> <ul>"
. "<li>Luego del peaje de la autopista </li>"
. "<li>Desvíese hacia Sopó a mano derecha </li>"
. "<li>En la rotonda de la Cabaña tome la primera salida hacia el sur </li>"
. "<li>Despues de Castilac maneje hasta el restaurante My Food </li>"
. "<li> Salga de la carretera manejando por entre el restaurante y la cancha de la escuelita, maneje derecho hasta el portón de brujas </li>"
. "<li>Maneje derecho hasta el portón de brujas</li>"
. "<li> Ya llegó, parquee frente a alguien si quiere irse temprano, si planea quedarse hasta tarde, trate de parquear sin bloquear a los que salen temprano, para eso parquee contra el muro norte.</li></ul>";



if (in_array(strtolower($clave), $permitidas)) {
    echo $secMapa;
} else {
    echo "mala";
}
?>
