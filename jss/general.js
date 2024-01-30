function abrirPagina(url){
    window.open(url,'_blank');
}

const secDummy = "<a href=\"https://maps.app.goo.gl/\" target=\"_blank\""
+ "<button class='botonEmail'>"
+ "<br>"
+ "</ul> <img id=\"imgMapa\" src=''>"
+ " <p> <b>Indicaciones</b> </p>"
+ "<br>"
+ "<br>"
+ "<b>Por la Calera</b> <ul>"
+ "<li>Luego del peaje de patios </li>"
+ "<li>Por ahi </li>";

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

var countDownDate = new Date("Mar 16, 2024 15:30:00").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Va tarde, apúrele...";
    } else {
      var d = Math.floor(distance / (1000 * 60 * 60 * 24));
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("timer").innerHTML = d + " dias " + h + " horas " + m + " minutos " + s + " segundos ";
    }
  }, 1000);