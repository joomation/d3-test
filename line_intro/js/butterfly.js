function butterfly(id) {
    
    this.butterfly = {
        svg: Snap(id),
        x: 0,
        y: 0,
        min: 0,
        max: document.documentElement.clientWidth - 150,
        play: function () {
            var svgPath1 = this.svg.path(`M20,0v30L0.1,15L20,0z`);
            var svgPath2 = this.svg.path(`M20,0v30L0.1,15L20,0z`);
            svgPath1.attr({
                opacity: 0.5,
            })
            var svgGroup = this.svg.group(svgPath1, svgPath2);
            svgGroup.attr({
                transform: 'rotate(-125deg) translate(-15,0)'
            })
            var moveWing = new Snap.Matrix();
            this.x=this.x-this.min;
            moveWing.translate(-this.x, 0);
            this.svg.attr({
                transform: moveWing,
                fill:mainColor
            })
            this.move();
            this.motion(svgPath1, svgPath2);
        },
        move: function () {
            this.max=document.documentElement.clientWidth - 150;
            if (Math.abs(this.x) > this.max) {
                    var moveWing = new Snap.Matrix();
                    this.x=0;
                    moveWing.translate(this.x, 0);
                    this.svg.attr({
                        transform: moveWing
                    })                
            }
                
                this.x -= Math.floor(Math.random() * (20 - 0)) + 0;
                var moveWing = new Snap.Matrix();
                this.y = Math.random() * (50 - (-50)) + (-50);
                moveWing.translate(-(this.x), this.y);
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