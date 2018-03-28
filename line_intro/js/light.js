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
            light.attr({
                fill:'#6acee5',
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
        motion: function (svgPath1, svgPath2) {
            
        }
    }
}