function mainTree(id) {
    this.mainTree = {
        svg: Snap(id),
        play: function () {
            var treePath=this.svg.polygon(`215,500 197.8,500 124.1,500 124.1,0 198.1,0 215,0`);
            var treeStem=this.svg.path(`M135.4,120.6H18.8L7.3,109 M89,120.6L71.6,138 M18.8,120.6l-8.7,8.7 M26.2,93.4l27.2,27.2`);
            treeStem.attr({
                fill:'none',
                stroke:'#fff',
                strokeWidth:3,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
        },
        motion: function () {
            
        }
    }
}