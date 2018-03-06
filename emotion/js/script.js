var svg = d3.select("svg");

svg.attr("width", document.documentElement.clientWidth);
svg.attr("height", 200);
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
    svg.attr("height", 200);
    enjoy._parents[0].parentNode.attributes.transform.value = "translate(" + document.documentElement.clientWidth /
        2 + "," + 200 / 2 + ")";
    sad._parents[0].parentNode.attributes.transform.value = "translate(" + document.documentElement.clientWidth /
        2 + "," + 200 / 2 + ")";


});
var emotion = ["rgba(255, 166, 33,1)", "rgba(244, 67, 54,1)", "rgba(33, 150, 243,1)", "rgba(193, 69, 214,1)"]
var upEmotion = ["rgba(244, 67, 54,0.7)", "rgba(255, 166, 33,0.7)"];
var downEmotion = ["rgba(103, 58, 183,0.7)", "rgba(33, 150, 243,0.7)"];
var defaultColor = "rgba(255, 255, 255,1)";
var transparent = "rgba(255, 255, 255,0)";

setStyles('sad', downEmotion, 60, 'multiply');
setStyles('enjoy', upEmotion, 0, 'multiply');


function volumeTrigger() {
    volume('enjoy', 40);
    volume('sad', 40);
}

function scaleTrigger(target) {
    target.classList.toggle('active')
    scale('enjoy', upEmotion);
    scale('sad', downEmotion);
}



function setStyles(type, color, dgree, blend) {
    window[type] = d3.select(".wave").append("g")
        .style("mix-blend-mode", blend)
        .attr("opacity", "1")
        .attr("transform", "translate(" + document.documentElement.clientWidth / 2 + "," + 200 / 2 + ")")
        .append("g")
        .attr("transform", "rotate(" + dgree + ")")
        .attr("fill", "none")
        .attr("stroke-linejoin", "round")
        .selectAll("path")
        .data(color)
        .enter().append("path")
        .attr("transform", "scale(0.5)")
        .style("mix-blend-mode", blend)
        .attr("stroke", function (d) {
            return d
        })
        .attr("fill", function (d) {
            return transparent
        })
        .attr("stroke-width", function (d, i) {
            return 2.5 - (i * 0.35)
        })
        .attr("opacity", function (d, i) {
            // return 1 - (i * 0.25)
            return 0.7
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
                if ((1000 - (d3.now()) < 300)) {
                    t = d3.now() / 300;
                }
            } else {
                t = d3.now() / 1000;
            }

            return 55 + Math.cos(a * 4 - i * 1 * Math.PI / 4 + t) * Math.pow((1.2 + Math.cos(a - t)) / 2,
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
                        var position = 55 + Math.cos(a * 4 - i * 1 * Math.PI / 4 + t) *
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
            return circleWave(d, i);
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
//         .duration(2000)           // apply it over 2000 milliseconds
//         .attr('cx', 720)          // move the circle to 920 on the x axis
//         .transition()             // apply a transition
//         .ease(easement)           // control the speed of the transition
//         .duration(2000)           // apply it over 2000 milliseconds
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