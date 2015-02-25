
window.onload = function(){

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        ship = new Ship(),
        vr = 0,
        vx = 0,
        vy = 0,
        thrust = 0;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ship.x = canvas.width / 2;
        ship.y = canvas.height / 2;

        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 37: //left
                    vr = -3;
                    break;
                case 39: //right
                    vr = 3;
                    break;
                case 38: //up
                    thrust = 0.05;
                    ship.showFlame = true;
                    break;
            }
        }, false);

        window.addEventListener('keyup', function (event) {
            vr = 0;
            thrust = 0;
            ship.showFlame = false;
        }, false);

    (function drawFrame() {

        window.requestAnimationFrame(drawFrame, canvas);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ship.rotation += vr * Math.PI / 180;
            var angle = ship.rotation,
                ax = Math.cos(angle) * thrust,
                ay = Math.sin(angle) * thrust;

            vx += ax;
            vy += ay;

            ship.x += vx;
            ship.y += vy;

        ship.draw(ctx);


    })();


};




