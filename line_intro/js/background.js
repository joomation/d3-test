function background(id) {
    this.background = {
        svg: Snap(id),
        backPath:'',
        play: function () {
            var backPath=this.svg.path(`M320,81c0,18.8-15.2,34-34,34c-9.3,0-17.7-3.7-23.9-9.8C255.9,99,252,90.5,252,81c0-9.4,3.8-17.9,10-24
            c6.2-6.2,14.7-10,24-10C304.8,47,320,62.2,320,81z`);
            var str_gradient = "l(1,0,0,1)#3c256c:20-#0e1961:80";
            var gradient = this.svg.gradient(str_gradient);
            backPath.attr({
                fill:gradient,
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
                },1500,mina.backout,()=>{
                    this.backPath=backPath;
                })
            })
            
        },
        extend:function(){
            this.svg.select('path').animate({
                d:`M426,124c-9,123.7,10.3,147-45.7,153c-30,7.3-288.7,5.3-385.3-10c-29.3-75.3-5.3-87.3-4.7-139
                C-16.7,89-32.1-6.4,9-7.7c65-2,293.3-2,353.3-2C418.3-9.7,426-8,426,124z`
            },1500,mina.backin)
        }
    }
}