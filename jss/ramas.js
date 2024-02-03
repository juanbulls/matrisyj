r = id("ramas");
l = id("lienzo");

alto = window.innerHeight;
ancho = 400;
r.style.height = alto+'px';

l.width = ancho;
l.height = alto;

var ctx = l.getContext("2d");

function rama(xi, yi, nodos){
    var trazo = 100;
    nodos.forEach(n => {
        var pos = {x:xi-n[0], y:yi-n[1]};
        if (n.length != 2) { // es rama
            ctx.beginPath();
            ctx.moveTo(xi, yi);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            rama(pos.x, pos.y, n[2]);
        } else { // es hoja
            ctx.beginPath();
            ctx.moveTo(xi, yi);
            ctx.lineTo(xi-n[0], yi-n[1]);
            ctx.stroke();
        }
        /*
        pos.x -= n[0]; pos.y -= n[1];
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = 'rgba(58 88 153 / ' + trazo + '%)';
        trazo /= 1.5;
        ctx.stroke();
        */
    });
}
rama(ancho, alto, [
    [70, 110, [
        [80, 80, [
            [50, 40, [[5, 50],
                [20, 25, [[10, 20], [-8, 5]
                ]]
            ]]
        ]]
    ]]
]);
rama(ancho, alto-20, [
    [120, 230, [
        [60, 90, [
            [50, 30, [
                [25, 25, [[15, 20]
                ]]
            ]]
        ]]
    ]]
]);