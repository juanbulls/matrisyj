function id(elementId){
    return document.getElementById(elementId);
}

// Ajax
function ajax(archivo, variables=null){
    return new Promise(function(resolve) {
        var req = new XMLHttpRequest();
        var url = variables != null ? "../phps/" + archivo + "?" + variables : "../phps/" + archivo
        req.open("GET", url);
        req.onload = function (){
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.response);
            }
        };
        req.send();
    });
}

var local = false; if (window.location.protocol == 'file:') { local = true; }