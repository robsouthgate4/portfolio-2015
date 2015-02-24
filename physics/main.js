
window.onload = function(){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var particles = [];
    var speed = 0.1;
    var radius = 100;
    var range = 100;
    var angle = 0;
    var centerY = canvas.height / 2;


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for ( var i = 0; i < 70; i++ ) {
        var radius = Math.floor((Math.random() * 4) + 2);
        var particle = new Particle(radius, '#6a6a6a');
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.width;
        particles.push(particle);

    }


    (function drawFrame() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        angle += speed;

        for ( var i = 0; i < particles.length; i++  ) {
            particles[i].draw(ctx);
        }

        document.addEventListener("mousemove", function(event){

            var mouseX = event.clientX;
            var mouseY = event.clientY;

        }, true);

        requestAnimationFrame(drawFrame);

    })();

    console.log(particles);

};




