function subTrees(id) {
    this.subTrees = {
        svg: Snap(id),
        play: function () {
            var thirdTree=this.svg.polygon(`502,509.1 497.3,509.1 464,509.1 464,-10 497.6,-10 502,-10`);
            var thirdStem=this.svg.path(`M502,269.7l56.3-56.3 M531.7,240.1h27.6 M517.8,253.9v-32.1`);
            var secondTree=this.svg.polygon(`115,509.1 105.4,509.1 64.6,509.1 64.6,-10 105.8,-10 115,-10`);
            var secondStem=this.svg.path(`M16.2,68.3l48.4,48.4 M50.6,102.7H18.8 M189.6,191.2h-15.7l-69.3,70.4 M144.8,221.4h32.7 M126,240.1v-43.4`);
            var frontTree=this.svg.polygon(`393.8,510 372.4,510 337.3,510 337.3,-10 372.8,-10 393.8,-10`);
            var frontStem=this.svg.path(`M337.3,122l-60.7-60.7v-28 M309.7,94.4h-30.6 M276.6,61.3h-15.3 M475.6,152.6h-13.1l-68.7,68.7 M431.6,183.5
            h31.8 M413.9,201.1v-40.8 M347.1,304.1l-76.3-76.3 M296.1,253.2v-32 M316.9,273.9h-33.5`);
            thirdTree.attr({
                fill:'none',
                stroke:'#fff',
                strokeWidth:3,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
            secondTree.attr({
                fill:'none',
                stroke:'#fff',
                strokeWidth:3,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
            frontTree.attr({
                fill:'none',
                stroke:'#fff',
                strokeWidth:3,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
            thirdStem.attr({
                fill:'none',
                stroke:'#fff',
                strokeWidth:3,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
            secondStem.attr({
                fill:'none',
                stroke:'#fff',
                strokeWidth:3,
                strokeLinecap:'round',
                strokeLinejoin:'round',
                strokeMiterlimit:10
            })
            frontStem.attr({
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