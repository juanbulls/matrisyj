function abrirPagina(url){
    window.open(url,'_blank');
}

const secDummy = " <p> <b>Indicaciones</b> </p> <p>" +
+ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
+ "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
+ "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
+ "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
+ "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla "
+ "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in "
+ "culpa qui officia deserunt mollit anim id est laborum."
+ "</p> <img src='mapaDummy.png'>";
function mapaEjecutor(event, clave){
    if (event.keyCode === 13) {
        event.preventDefault();
        mostrarMapa(clave)
    }
}
async function mostrarMapa(clave){
    if (local) {
        if (clave == "local") {
            id('secLugar').innerHTML = secDummy;
        } else { alert("Mala clave.")}
    } else {
        var respuesta = ajax('mapa.js', 'clave='+clave)
        id('secLugar').innerHTML =  respuesta;
    }
}