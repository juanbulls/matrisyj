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
. "</ul> <img src='mpim/mapa.jpg'>"
. " <p> <b>Indicaciones</b> </p>"
. "<br>"
. "<b>Por la Calera</b> <ul>"
. "<li>Luego del peaje de patios </li>"
. "<li>Pasando la pradera de potosi </li>"
. "<li>Antes de la rotonda que desvia a Guasca, a mano derecha es la misa en la capilla de la hacienda La Selva </li>"
. "<li>Para la recepción siga manejando hacia Sopó </li>"
. "<li>Luego de la rotonda que desvia a Guasca y antes de Sopo busque el restaurante XXX a mano derecha</li>"
. "<li>Desviese a mano derecha, entre el restaurante y la cancha de la escuelita maneje derecho hasta el porton de brujas</li>"
. "<li>Ya llegó, parquie frente a alguien si quiere irse temprano, si hay espacio y se quiere ir tarde, pegado al muro del este</li></ul>"
. "<br>"
. "<b>Por Sopó</b> <ul>"
. "<li>Luego del peaje de la autopista </li>"
. "<li>Desviese hacia Sopó a mano derecha </li>"
. "<li>En la rotonda de la Cabaña tome la primera salida hacia el sur </li>"
. "<li>Despues de Castilac </li>"
. "<li>Desviese a mano izquierda por entre la cancha de la escuelita y el restaurante XXX</li>"
. "<li>Maneje derecho hasta el porton de brujas</li>"
. "<li>Ya llegó, parquie frente a alguien si quiere irse temprano, si hay espacio y se quiere ir tarde, pegado al muro del este</li></ul>";


if (in_array(strtolower($clave), $permitidas)) {
    echo $secMapa;
} else {
    echo "mala";
}
?>
