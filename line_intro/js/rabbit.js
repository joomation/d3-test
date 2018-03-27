var rabbit = {
    svg: Snap('#rabbit'),
    x: 40,
    r: 0,
    play: function () {
        this.svg.attr({
            transform: this.initialMatrix
        })
        var svgPath = this.svg.path(
            "M292.5,292.5h-125c0,0,0-29.7,0-61.8c0-37.9,0-63.2,0-63.2h125c0,0,0,25.2,0,62.5C292.5,262.5,292.5,292.5,292.5,292.5z"
        );
        var svgFlowPath1 = this.svg.path(
            `M379.6,434.8c-47.7,0-97.8-21-137.4-57.6`
        );
        var svgFlowPath2 = this.svg.path(`M379.6,348.8c-27.1,0-58.3-14.4-82-37.5`);
        var svgFlowGroup = this.svg.group(svgFlowPath1, svgFlowPath2);

        svgFlowGroup.attr({
            fill: 'none',
            stroke: '#000',
            strokeWidth: 3,
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeDasharray: 535,
            strokeDashoffset: 800
        })
        this.move();
        this.bounce(svgPath, svgFlowGroup);
    },
    move: function () {
        this.r = 90;
        var startMatrix = new Snap.Matrix();
        startMatrix.translate(this.x, -150);
        startMatrix.rotate(this.r);
        var finishMatrix = new Snap.Matrix();
        finishMatrix.translate(this.x + 40, 0);
        finishMatrix.rotate(this.r + 90);
        this.svg.animate({
            transform: startMatrix
        }, 1000, mina.backin, function () {
            rabbit.svg.animate({
                transform: finishMatrix

            }, 1000, mina.bounce, function () {
                var finishMatrix = new Snap.Matrix();
                finishMatrix.translate(rabbit.x + 40, 0)
                finishMatrix.rotate(0);
                rabbit.svg.attr({
                    transform: finishMatrix
                })
                rabbit.x += 80;
                rabbit.move()

            })
        })
    },
    bounce: function (svgPath, svgFlowGroup) {
        svgFlowGroup.animate({
            strokeDasharray: 535,
            strokeDashoffset: 1100
        }, 1000, mina.backin, function () {
            svgFlowGroup.animate({
                strokeDasharray: 535,
                strokeDashoffset: 800
            }, 500, mina.linear, function () {

            })
        })
        svgPath.animate({
            d: `M289.5,291.6l-70.2,71.2c0,0-49.1-56.5-49.1-132.5c0-80.7,49.3-133.2,49.3-133.2l70.2,69.8c0,0-21.4,25.4-21.4,62.8
        C268.4,262.1,289.5,291.6,289.5,291.6z`,
        }, 1000, mina.backin, function () {
            svgPath.animate({
                d: `M292.5,292.5h-125c0,0,0-29.7,0-61.8c0-37.9,0-63.2,0-63.2h125c0,0,0,25.2,0,62.5C292.5,262.5,292.5,292.5,292.5,292.5z`,
            }, 1000, mina.bounce, function () {
                return rabbit.bounce(svgPath, svgFlowGroup)
            })
        });
    }
}