r = id("ramas");
l = id("lienzo");

alto = window.innerHeight;
ancho = 400;
r.style.height = alto+'px';

l.width = ancho;
l.height = alto;

var ctx = l.getContext("2d");
ctx.strokeStyle = 'rgba(58 88 110)';

var trazo = 100;
function rama(xi, yi, nodos){
    nodos.forEach(n => {
        var pos = {x:xi-n[0], y:yi-n[1]};
        ctx.beginPath();
        ctx.moveTo(xi, yi);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        if (n.length != 2) { // es rama
            rama(pos.x, pos.y, n[2]);
        }
    });
}
rama(ancho, alto-10, [
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
]);
rama(ancho, alto-20, [
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
]);
rama(ancho, alto-30, [
    [90, 230, [[-10, 20],
        [110, 120, [
            [30, 45], [-5, 20]
        ]]
    ]]
]);