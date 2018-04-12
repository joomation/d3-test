function light(id) {
    
    this.light = {
        svg: Snap(id),
        left: 0,
        right: 0,
        min: 0,
        winW:0,
        winH:0,
        play: function () {
            this.winW=document.documentElement.clientWidth
            this.winH=document.documentElement.clientHeight
            var light=this.svg.polyline(`${this.right},${this.winH} ${this.left},${this.winH} ${this.winW-150},-1 ${this.winW-150},-1`);
            var str_gradient = "l(0,0,0,1)rgba(106, 206, 229,0):0-#6acee5:30";
            var gradient = this.svg.gradient(str_gradient);
            light.attr({
                fill:gradient,
            });
            
            document.addEventListener('click',this.appear.bind(this,light))
            window.addEventListener('resize',this.resize.bind(this,light))
        },
        resize:function(light,e){
            this.winW=document.documentElement.clientWidth
            this.winH=document.documentElement.clientHeight
           
        },
        appear:function(light,e){
            
            this.left=e.screenX-(this.winW/1);
            this.right=e.screenX-(this.winW/10)
            light.animate({
                points:`${this.right},${this.winH} ${this.left},${this.winH} ${this.winW-150},-1 ${this.winW-50},-1`
            },500,mina.bounce,()=>{
                    document.addEventListener('mousemove',this.move.bind(this,light));
            })
        },
        move: function (light,e) {
            this.left=e.screenX-(this.winW/1);
            this.right=e.screenX-(this.winW/10)
            light.attr({
                points:`${this.right},${this.winH} ${this.left},${this.winH} ${this.winW-150},-1 ${this.winW-50},-1`
            })


        },
        remove: function () {
            this.svg.remove()
        }
    }
}