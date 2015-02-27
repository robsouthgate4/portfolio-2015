
window.onload = function () {

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        particles = [],
        numParticles = 80,
        mouse = utils.captureMouse(canvas),
        gravity = 0.5,
        ax = 0.05,
        ay = 0.05;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    for (var particle, i = 0; i < numParticles; i++) {

        particle = new Particle(2, "#ffffff");
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.vx = Math.random() * 2 - 1;
        particle.vy = Math.random() * 2 - 1;
        particles.push(particle);

    }

    function draw (particle) {

        particle.draw(ctx);

        particle.x += particle.vx;
        particle.y += particle.vy;

        if ( particle.x > canvas.width || particle.x < 0 ) {
            particle.vx *= -1;
        }
        if ( particle.y > canvas.height || particle.y < 0) {
            particle.vy *= -1;
        }

    }

    (function drawFrame () {

        window.requestAnimationFrame(drawFrame, canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function(element, i){

            draw(element);

            var dx = mouse.x - element.x,
                dy = mouse.y - element.y,
                dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 50) {
                    element.radius = 5;
                }

        });

    }());
};




