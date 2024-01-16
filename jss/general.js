function abrirPagina(url){
    window.open(url,'_blank');
}

const secDummy = " <p> <b>Indicaciones</b> </p> <p>"
+ "<br><b>Por la Calera</b> <ul>"
+ "<li>Luego del peaje de patios </li>"
+ "<li>Pasando la pradera de potosi </li>"
+ "<li>Antes de la rotonda que desvia a Guasca, a mano derecha es la misa en la capilla de la hacienda La Selva </li>"
+ "<li>Para la recepción siga manejando hacia Sopó </li>"
+ "<li>Luego de la rotonda que desvia a Guasca y antes de Sopo busque el restaurante XXX a mano derecha</li>"
+ "<li>Desviese a mano derecha, entre el restaurante y la cancha de la escuelita maneje derecho hasta el porton de brujas</li>"
+ "<li>Ya llegó, parquie frente a alguien si quiere irse temprano, si hay espacio y se quiere ir tarde, pegado al muro del este</li></ul>"
+ "<br><b>Por la Sopó</b> <ul>"
+ "<li>Luego del peaje de la autopista </li>"
+ "<li>Desviese hacia Sopó a mano derecha </li>"
+ "<li>En la rotonda de la Cabaña tome la primera salida hacia el sur </li>"
+ "<li>Despues de Castilac </li>"
+ "<li>Desviese a mano izquierda por entre la cancha de la escuelita y el restaurante XXX</li>"
+ "<li>Maneje derecho hasta el porton de brujas</li>"
+ "<li>Ya llegó, parquie frente a alguien si quiere irse temprano, si hay espacio y se quiere ir tarde, pegado al muro del este</li></ul>"
+ "</ul> <img src='mpim/mapa.jpg'>";
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
        try {
            const response = await ajax('mapa.php', 'clave=' + clave);
            if (response.trim() === "mala") {
                alert("Clave errada.");
            } else {
                id('secLugar').innerHTML = response;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

function asistentesEjecutor(event, asistentes){
    if (event.keyCode === 13) {
        event.preventDefault();
        enviarAsistentes(asistentes);
    }
}
async function enviarAsistentes(asistentes){
    if (local) {
        id('respuestaAsistentes').innerHTML = "Asistentes enviados correctamente";
        id('asistentes').value = '';
    } else {
        try {
            const response = await ajax('asistentes.php', 'nombre=' + asistentes);
            if (response.trim() === "error") {
                alert("Error enviando asistentes");
            } else { 
                id('respuestaAsistentes').innerHTML = "Asistentes enviados correctamente";
                id('asistentes').value = '';
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}