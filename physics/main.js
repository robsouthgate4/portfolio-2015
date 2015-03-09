
window.onload = function () {

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        particles = [],
        mouse = utils.captureMouse(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for ( var i = 0; i < projectData.length; i++ ) {

        console.log(projectData[i]);

        var particle = new Particle(20, '#6a6a6a');
        particle.x = randomIntFromInterval(0, canvas.width - particle.radius * 2);
        particle.y = randomIntFromInterval(0, canvas.height - particle.radius * 2);
        particles.push(particle);

    }

    function draw(element) {

        element.draw(ctx);

    }


    function randomIntFromInterval( min, max ) {
        return Math.floor(Math.random()*( max - min + 1 )+ min );
    }

    (function drawFrame() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        window.requestAnimationFrame(drawFrame, canvas);

        particles.forEach(function(particle, i){
            particle.draw(ctx);

            window.addEventListener("mousedown", function(event){

                console.log(mouse.x);
                console.log(mouse.y);

            })

        });


    })();

};




