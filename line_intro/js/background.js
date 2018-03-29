function background(id) {
    this.background = {
        svg: Snap(id),
        play: function () {
            var backPath=this.svg.path(`M330,81c0,18.8-15.2,34-34,34c-9.3,0-17.7-3.7-23.9-9.8C265.9,99,262,90.5,262,81c0-9.4,3.8-17.9,10-24
            c6.2-6.2,14.7-10,24-10C314.8,47,330,62.2,330,81z`)
            backPath.attr({
                fill:mainBack
            })

            backPath.attr({
                transform: 's0,0'
            })
            this.motion(backPath);
            
        },
        motion: function (backPath) {
           
            backPath.animate({
                transform: 's1,1'
            },1000,mina.bounce,()=>{
                backPath.animate({
                    d:`M426,124c-48,214-198,182-234,172c-12.4-3.4-79-32-78-76c0.9-41.7,41.8-39.8,34-83c-7-39,21.9-90.7,63-92
                    c65-2,68-42,128-42C395,3,442.4,50.8,426,124z`,
                },1500,mina.backout)
            })
            
        }
    }
}