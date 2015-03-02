
window.onload = function () {

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        particles = [],
        numParticles = 300,
        mouse = utils.captureMouse(canvas),
        force = 0.0005,
        ax = 0,
        ay = 0,
        maxV = 2;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    for (var particle, i = 0; i < numParticles; i++) {

        particle = new Particle(5, "#898585");
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

            for( var j = i + 1; j < particles.length; j++ ) {

                var p2 = particles[j];
                distance( element, p2 );

            }

            function distance(p1, p2) {

                var dx = p1.x - p2.x,
                    dy = p1.y - p2.y,
                    dist = Math.sqrt(dx * dx + dy * dy),
                    angle = Math.atan2(dx, dy),
                    acceleration = angle * force;


                if( dist <= 100 ) {

                    // Draws the line
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle= "#898585";
                    ctx.stroke();

                    p1.vx += acceleration;
                    p1.vy += acceleration;
                    p2.vx += acceleration;
                    p2.vy += acceleration;

                    if ( p1.vx >=  maxV ) {
                        p1.vx = maxV;
                    }
                    if ( p1.vy >=  maxV ) {
                        p1.vy = maxV;
                    }
                    if ( p2.vx >=  maxV ) {
                        p2.vx = maxV;
                    }
                    if ( p2.vy >=  maxV ) {
                        p1.vy = maxV;
                    }


                    p1.x += p1.vx;
                    p2.y += p1.vy;

                }

            }

        });

    }());
};




