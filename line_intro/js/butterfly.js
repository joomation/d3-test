function butterfly() {
    
    this.butterfly = {
        svg: Snap('#butterfly'),
        x: 0,
        y: 0,
        min: 0,
        max: document.documentElement.clientWidth - 50,
        play: function () {
            var svgPath1 = this.svg.path(`M20,0v30L0.1,15L20,0z`);
            var svgPath2 = this.svg.path(`M20,0v30L0.1,15L20,0z`);
            var svgGroup = this.svg.group(svgPath1, svgPath2);
            svgGroup.attr({
                transform: 'rotate(-125deg) translate(-15,0)'
            })
            var moveWing = new Snap.Matrix();

            moveWing.translate(this.min, 0);
            this.svg.attr({
                transform: moveWing
            })
            this.move();
            this.motion(svgPath1, svgPath2);
        },
        move: function () {
            if (Math.abs(this.x-this.min) > this.max) {
                setTimeout(()=>{
                    var moveWing = new Snap.Matrix();
                    this.x=0;
                    moveWing.translate(this.x, 0);
                    this.svg.attr({
                        transform: moveWing
                    })
                    return this.move();
                })
                
            }
                this.x -= Math.floor(Math.random() * (20 - 0)) + 0;
                var moveWing = new Snap.Matrix();
                this.y = Math.random() * (50 - (-50)) + (-50);
                moveWing.translate(-(this.x-this.min), this.y);
                this.svg.animate({
                    transform: moveWing
                }, 1000, mina.linear, ()=> {

                    this.move()
                })



        },
        motion: function (svgPath1, svgPath2) {
            var leftWing = new Snap.Matrix();
            leftWing.scale(0.4, 1);
            svgPath1.animate({
                transform: leftWing
            }, 200, mina.linear,  ()=> {
                var leftWing = new Snap.Matrix();
                leftWing.scale(1, 1);
                svgPath1.animate({
                    transform: leftWing
                }, 400, mina.linear,  () =>{
                    this.motion(svgPath1, svgPath2)
                })
            })
        }
    }
}