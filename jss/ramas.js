r = id("ramas");
l1 = id("lienzo");
l2 = id("lienzo2");

alto = window.innerHeight;
ancho = 400;
r.style.height = alto+'px';

l1.width = ancho;
l1.height = alto;
l2.width = ancho;
l2.height = alto;

var ctx = l1.getContext("2d");
var ct2 = l2.getContext("2d");
ctx.strokeStyle = 'rgba(58 88 110)'; //descomentar
ct2.strokeStyle = 'rgba(58 88 110)'; //descomentar
ct2.shadowColor = 'rgba(250 250 250)';
ct2.shadowBlur = 5;
ct2.shadowOffsetX = 2;
ct2.shadowOffsetY = 2;

function lineaCapullo(l, x, y, bx, by, xf, yf){
    /* Juan Wills animation, see other canvas efects
    on jcwills.com ⛵ */
    l.moveTo(x, y);
    l.quadraticCurveTo(bx, by, xf, yf);
}
var desvX = (Math.random() * 20) - 10;
var desv2X = (Math.random() * 10) - 5;
function flor(l, x, y){
    var altura = 20;
    l.beginPath();
    lineaCapullo(l, x, y, x-altura/2, y-altura/2, x+desvX, y-altura);
    lineaCapullo(l, x, y, x+altura/2, y-altura/2, x+desvX, y-altura);
    lineaCapullo(l, x, y, x-altura/2, y-altura/2, x+desv2X, y-altura);
    lineaCapullo(l, x, y, x+altura/2, y-altura/2, x+desv2X, y-altura);
    l.stroke();
}

function rama(l, xi, yi, nodos){
    /* Juan Wills animation, see other canvas efects
    on jcwills.com ⛵ */
    nodos.forEach(n => {
        //l.strokeStyle = 'rgba(58 88 110)'; //quitar
        var pos = {x:xi-n[0], y:yi-n[1]};
        l.beginPath();
        l.moveTo(xi, yi);
        l.lineTo(pos.x, pos.y);
        l.stroke();
        if (n.length != 2) { // es rama
            rama(l, pos.x, pos.y, n[2]);
        } else { // es flor
            flor(l, pos.x, pos.y);
        }
    });
}

var ramas = []
// ramas que nacen de abajo (orden de abajo hacia arriba)
ramas.push([ctx, ancho, alto-10, [
    [30, 65, [
        [45, 20, [
            [20, -5], [15,8]
        ]],
            [40, 40, [[5, 30], [20,3],
                [50, 35, [[5, 20],
                    [20, 25, [[10, 20], [-8, 5]
                    ]]
                ]]
            ]
        ]
    ]]
]]);
ramas.push([ctx, ancho, alto-20, [
    [100, 200, [
        [70, 40, [[20, -10], [23, 30],
            [60, 28, [[10, -5], [11, 15],
                [30, 10]
            ]]
    ]
    ], [15, 80, [
            [10, 20], [-8, 5]
        ]],
            [100, 110, [[35, 5], 
                [80, 120, [[40, 45], [-10, 45],
                    [20, 60, [[25, 30],
                        [-5, 50, [[12, 15], [-25, 20],
                            [-10, 45]
                        ]]
                    ]]
                ]
            ],
                [50, 30, [[25, 5], [10, 30],
                    [25, 25, [[15, 20], [15, 0]
                    ]]
                ]]
            ]]
        ]]
]]);
ramas.push([ctx, ancho, alto-30, [
    [90, 230, [[-10, 20],
        [110, 120, [
            [30, 45], [-5, 20]
        ]]
    ]]
]]);

// Ramas que nacen del medio hacia arriba
ramas.push([ct2, ancho, alto-350, [
    [70, 200, [[50, 20, [
        [30, 2], [25, 25],
    ]], [5, 80, [
        [30, 30], [-10, 40],
    ]],
        [60, 100, [[45, -10], [20, 30],
            [50, 30, [[22, -5], [10, 15],
                [65, 10, [
                    [30, -10], [5, 8]
                ]]
            ]]
        ]]
    ]]
]]);
ramas.push([ct2, ancho, alto-320, [
    [35, 150, [[40, 25], [5, 65],
        [40, 55, [
            [40, 5], [25, 50]
        ]]
    ]]
]]);

ramas.forEach(r => { rama(r[0], r[1], r[2], r[3]) });
// Animando
function animar(){
    /* Juan Wills animation, see other canvas efects
    on jcwills.com ⛵ */
    var diff = (new Date().getTime()-ahora)/(1000);
    console.log(Math.sin(diff));
    desvX += Math.sin(diff)/50;
    desv2X -= Math.sin(diff)/50;
    ctx.clearRect(0,0, ancho, alto);
    ct2.clearRect(0,0, ancho, alto);
    ramas.forEach(r => { rama(r[0], r[1], r[2], r[3]) });
}
var ahora = new Date().getTime();
setInterval(animar, 1000/60);