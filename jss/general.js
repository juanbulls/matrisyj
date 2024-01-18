function abrirPagina(url){
    window.open(url,'_blank');
}

const secDummy = "La selva, brujas";

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

function expander(expandido){
    if (expandido) {
        
    } else {

    }
}