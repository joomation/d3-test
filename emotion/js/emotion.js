var svg = d3.select("svg");
var emotionPath, facePath;
var leftEye, rightEye, mouth;
facePath = d3.select("#face")
svg.attr("width", document.documentElement.clientWidth);
svg.attr("height", document.documentElement.clientHeight);
var angles = d3.range(0, 2 * Math.PI, Math.PI / 100);
//color definition
//svg gradient
var graenjoy = 'url(#enjoy)';
var graangry = 'url(#angry)';
var grasad = 'url(#sad)';
var grafear = 'url(#fear)';
var gradisgust = 'url(#disgust)';
window.addEventListener('resize', function () {
    svg.attr("width", document.documentElement.clientWidth);
    svg.attr("height", document.documentElement.clientHeight);
    emotionPath._parents[0].parentNode.attributes.transform.value = "translate(" + document.documentElement.clientWidth /
        2 + "," + document.documentElement.clientHeight / 2 + ")";
});
var emotion = ["rgba(244, 67, 54,1)", "rgba(255, 166, 33,1)", "rgba(33, 150, 243,1)", "rgba(193, 69, 214,1)"]
var emotionGra = [grafear, grasad, graenjoy, graangry]
var defaultColor = "rgba(255, 255, 255,1)";
var transparent = "rgba(255, 255, 255,0)";
//wave
setStyles('emotionPath', emotion, 0, 'multiply');
setFace();
faceSleep();
setTimeout(function(){
    faceSmile();
},2000)

function volumeTrigger() {
    volume('emotionPath', 40);
}

function scaleTrigger(target) {
    target.classList.toggle('active')
    scale('emotionPath', emotion);
}

function setFace() {
    leftEye = facePath.append("g").attr("id", "eyes").append('path')
        .attr("d", ["M8.4,12.8L8.4,12.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v0C10.3,11.9,9.4,12.8,8.4,12.8z"])
    rightEye = facePath.select('#eyes')
        .append('path')
        .attr("d", ["M21.6,12.8L21.6,12.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v0C23.4,11.9,22.6,12.8,21.6,12.8z"])
    mouth = facePath.append("g").attr("id", "mouth").append('path')
        .attr("d", ["M15.2,22.7h-0.4c-0.5,0-0.9-0.4-0.9-0.9v-1.9h2.2v1.9C16.1,22.3,15.7,22.7,15.2,22.7z"])
        .attr("stroke-width",2)
        .attr("stroke-linecap","round")
        .attr("stroke-linejoin","round")
        .attr("stroke-miterlimit",20)
}

function faceSleep() {
    leftEye.transition()
        .duration(1000)
        .attr("d", ["M8.4,11.8L8.4,11.8c-1,0-1.9,0-1.9-0.9v0c0-1,0.8-1,1.9-1h0c1,0,1.9,0,1.9,1v0C10.3,11.8,9.4,11.8,8.4,11.8z"])
        .attr("transform", "translate(0,3)")
        .transition()
        .delay(500)
        .duration(1000)
        .attr("d", ["M8.4,12.8L8.4,12.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v0C10.3,11.9,9.4,12.8,8.4,12.8z"])
        .attr("transform", "translate(0,0)")
    rightEye.transition()
        .duration(1000)
        .attr("d", ["M21.6,11.8L21.6,11.8c-1,0-1.9,0-1.9-0.9v0c0-1,0.8-1,1.9-1h0c1,0,1.9,0,1.9,1v0C23.4,11.8,22.6,11.8,21.6,11.8z"])
        .attr("transform", "translate(0,3)")
        .transition()
        .delay(500)
        .duration(1000)
        .attr("d", ["M21.6,12.8L21.6,12.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v0C23.4,11.9,22.6,12.8,21.6,12.8z"])
        .attr("transform", "translate(0,0)")
    mouth.transition()
        .duration(1000)
        .attr("d", ["M17.7,21.8h-5.3c-0.5,0-0.9-0.4-0.9-0.9v0h7.1v0C18.6,21.4,18.2,21.8,17.7,21.8z"])
        .transition()
        .delay(500)
        .duration(1000)
        .attr("d", ["M15.2,22.7h-0.4c-0.5,0-0.9-0.4-0.9-0.9v-1.9h2.2v1.9C16.1,22.3,15.7,22.7,15.2,22.7z"])
        .on('end',faceSleep)
}
function faceSmile() {
    leftEye
        .transition()
        .delay(500)
        .duration(1000)
        .attr("d", ["M8.4,12.8L8.4,12.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v0C10.3,11.9,9.4,12.8,8.4,12.8z"])
        .attr("transform", "translate(0,0)")
    rightEye
        .transition()
        .delay(500)
        .duration(1000)
        .attr("d", ["M21.6,12.8L21.6,12.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v0C23.4,11.9,22.6,12.8,21.6,12.8z"])
        .attr("transform", "translate(0,0)")
    mouth.transition()
        .duration(1000)
        .attr("d", ["M16.3,24h-2.5c-2.5,0-4.6-2.1-4.6-4.6v-0.8h11.8v0.8C20.9,22,18.8,24,16.3,24z"])
}

function setStyles(type, color, dgree, blend) {
    window[type] = d3.select(".wave").append("g")
        .style("mix-blend-mode", blend)
        .attr("opacity", "1")
        .attr("transform", "translate(" + document.documentElement.clientWidth / 2 + "," + document.documentElement.clientHeight / 2 + ")")
        .append("g")
        .attr("transform", "rotate(" + dgree + ")")
        .attr("fill", "none")
        .attr("stroke-linejoin", "round")
        .selectAll("path")
        .data(color)
        .enter().append("path")
        .attr("transform", "scale(0.7)")
        .style("mix-blend-mode", blend)
        .attr("stroke", function (d) {
            return d
        })
        .attr("fill", function (d, i) {
            return transparent
        })
        .attr("stroke-width", function (d, i) {
            return 3
        })
        .attr("opacity", function (d, i) {
            return 1 - (i * 0.25)

        })
        .datum(function (d, i) {
            return circleWave(d, i);

        });
    var timer = d3.timer(function () {
        window[type].attr("d", function (d) {
            return d(angles);
        });
    });
}

function circleWave(d, i, type) {
    return d3.radialLine()
        .curve(d3.curveLinearClosed)
        .angle(function (a) {
            return a;
        })
        .radius(function (a) {
            var t;
            if (type === 'scale') {
                t = d3.now() / (1000 - (d3.now()));
                if ((1000 - (d3.now()) < 700)) {
                    t = d3.now() / 700;
                }
            } else {
                t = d3.now() / 1000;
            }

            return 80 + Math.cos(a * 4 - i * 1 * Math.PI / 4 + t) * Math.pow((1.2 + Math.cos(a - t)) / 2,
                4) * 8;
        })
}

function volume(type, size) {
    angles = d3.range(0, 2 * Math.PI, Math.PI / 8);

    var timer = d3.timer(function (elapsed) {
        var max = size;
        var min = 15;
        var elapsed = min + elapsed * 1.0 / 5;
        if (elapsed > max) {
            elapsed = max - elapsed * 1.0 / 5;
        }
        if (elapsed < max && elapsed > min) {
            window[type]
                .transition()
                .ease(d3.easeLinear)
                .duration(500)
                .attr("fill", "rgba(244, 67, 54,0.7)")
            window[type].datum(function (d, i) {
                    return d3.radialLine()
                        .curve(d3.curveLinearClosed)
                        .angle(function (a) {
                            return a;
                        })
                        .radius(function (a) {
                            var t = d3.now() / 200;
                            var position = 80 + Math.cos(a * 4 - i * 1 * Math.PI / 4 + t) *
                                Math.pow((1 + Math.cos(a - t)) / 2, 4) * elapsed;
                            return position
                        });
                })
                .attr("d", function (d) {
                    return d(angles);
                });


        }
    })

}

function scale(type, color) {
    window[type]
        .datum(function (d, i) {
            return circleWave(d, i, 'scale');
        })

        .transition()
        .ease(d3.easeExp)
        .duration(500)
        .attr("transform", "scale(1)")
        .attr("fill", function (d, i) {
            return color[i]
        })
        .attr("stroke", transparent)

}


//         var easing = [
//     "easeElastic",
//     "easeBounce",
//     "easeLinear",
//     "easeSin",
//     "easeQuad",
//     "easeCubic",
//     "easePoly",
//     "easeCircle",
//     "easeExp",
//     "easeBack"
//     ];

// var svg = d3.select("body")
//         .append("svg")
//         .attr("width", 960)
//         .attr("height", 500);

// function circleTransition(easement,yPos){ 

//     var timeCircle = svg.append("circle")
//         .attr("fill", "steelblue")
//         .attr("r", 20);
//     repeat();

//     function repeat() {
//       timeCircle
//         .attr('cx', 210)          // position the circle at 40 on the x axis
//         .attr('cy', (yPos*45)+25) // position the circle at 250 on the y axis
//         .transition()             // apply a transition
//         .ease(easement)           // control the speed of the transition
//         .duration(document.documentElement.clientHeight0)           // apply it over document.documentElement.clientHeight0 milliseconds
//         .attr('cx', 720)          // move the circle to 920 on the x axis
//         .transition()             // apply a transition
//         .ease(easement)           // control the speed of the transition
//         .duration(document.documentElement.clientHeight0)           // apply it over document.documentElement.clientHeight0 milliseconds
//         .attr('cx', 210)          // return the circle to 40 on the x axis
//         .on("end", repeat);       // when the transition finishes start again
//     };

//     var easeType = svg.append("text")
//         .attr("dy", ".35em") // set offset y position
//         .attr("x", 475)
//       .attr("text-anchor", "middle") // set anchor x justification
//         .attr("y", (yPos*45)+25)
//         .text(easing[yPos]);
// };

// circleTransition(d3.easeElastic,0);