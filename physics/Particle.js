function Particle(radius, color) {

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = utils.parseColor(color);
    this.opacity = 1;

}
Particle.prototype.draw = function(ctx) {

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

};

Particle.prototype.getBounds = function() {

    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2
    };

};
