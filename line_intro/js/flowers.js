function flowers(id) {
    this.flowers = {
        svg: Snap(id),
        x: 0,
        y: 0,
        min: 0,
        max: document.documentElement.clientWidth - 50,

        play: function () {
            var stem1 = this.svg.path(`M45.1,29.8v58.7`);
            var stem2 = this.svg.path(`M82.2,65.8v22.7`);
            var stem3 = this.svg.path(`M120.8,43.1v45.4`);
            var stem4 = this.svg.path(`M13,64.6v24`);
            var flowers1_1 = this.svg.path(`M15.7,61.9L13,64.6l-2.7-2.7l2.7-2.7L15.7,61.9z`);
            var flowers1_2 = this.svg.path(`M16.9,73L13,76.9L9.1,73l3.9-3.9L16.9,73z`);
            var flowers2_1 = this.svg.path(`M52.7,15.8l-7.7,7.7l-7.7-7.7l7.7-7.7L52.7,15.8z`);
            var flowers2_2 = this.svg.path(`M45.1,29.8H33.5V18.3L45.1,29.8z`);

            var flowers2_3 = this.svg.path(`M56.6,18.3v11.6H45.1L56.6,18.3z`);

            var flowers3_1 = this.svg.path(`M95.2,65.8l-6.5,6.5l-6.5-6.5l6.5-6.5L95.2,65.8z`);
            var flowers3_2 = this.svg.path(`M82.2,65.8l-6.5,6.5l-6.5-6.5l6.5-6.5L82.2,65.8z`);
            var flowers4_1 = this.svg.path(`M128.5,36.7l-7.7,7.7l-7.7-7.7l7.7-7.7L128.5,36.7z`);
            var flowers4_2 = this.svg.path(`M120.8,44.3l-3.9,3.9l-3.9-3.9l3.9-3.9L120.8,44.3z`);
            var flowers4_3 = this.svg.path(`M128.7,44.3l-3.9,3.9l-3.9-3.9l3.9-3.9L128.7,44.3z`);
            flowers1_1.attr({
                transform: `translate(${flowers1_1.getBBox().cx},${flowers1_1.getBBox().cy}) scale(0)`
            })
            flowers1_2.attr({
                transform: `translate(${flowers1_2.getBBox().cx},${flowers1_2.getBBox().cy}) scale(0)`
            })
            flowers2_1.attr({
                transform: `translate(${flowers2_1.getBBox().cx},${flowers2_1.getBBox().cy}) scale(0)`
            })
            flowers2_2.attr({
                transform: `translate(${flowers2_2.getBBox().cx-5.5},${flowers2_2.getBBox().cy-48}) rotate(45)`,
            })
            flowers2_3.attr({
                transform: `translate(${flowers2_3.getBBox().cx-58},${flowers2_3.getBBox().cy+15.5}) rotate(-45)`,
            })
            flowers3_1.attr({
                transform: `translate(${flowers3_1.getBBox().cx},${flowers3_1.getBBox().cy}) scale(0)`
            })
            flowers3_2.attr({
                transform: `translate(${flowers3_2.getBBox().cx},${flowers3_2.getBBox().cy}) scale(0)`
            })
            flowers4_1.attr({
                transform: `translate(${flowers4_1.getBBox().cx},${flowers4_1.getBBox().cy}) scale(0)`
            })
            flowers4_2.attr({
                transform: `translate(${flowers4_2.getBBox().cx},${flowers4_2.getBBox().cy}) scale(0)`
            })
            flowers4_3.attr({
                transform: `translate(${flowers4_3.getBBox().cx},${flowers4_3.getBBox().cy}) scale(0)`
            })
            var stemGroup = this.svg.group(stem1, stem2, stem3, stem4);
            var flowersGroup = this.svg.group(flowers1_1, flowers1_2, flowers2_1, flowers2_2, flowers2_3, flowers3_1, flowers3_2, flowers4_1, flowers4_2, flowers4_3);
            flowersGroup.attr({
                fill: '#940094',
            })
            stemGroup.attr({
                stroke: '#940094',
                strokeDasharray: 70,
                strokeDashoffset: 70
            });
            this.motion(stemGroup, flowers1_1, flowers1_2, flowers2_1, flowers2_2, flowers2_3, flowers3_1, flowers3_2, flowers4_1, flowers4_2, flowers4_3)
        },
        initMotion:function(stemGroup, flowers1_1, flowers1_2, flowers2_1, flowers2_2, flowers2_3, flowers3_1, flowers3_2, flowers4_1, flowers4_2, flowers4_3){
            
            flowers1_1.animate({
                transform: `translate(${flowers1_1.getBBox().cx},${flowers1_1.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers1_2.animate({
                transform: `translate(${flowers1_2.getBBox().cx},${flowers1_2.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers2_1.animate({
                transform: `translate(${flowers2_1.getBBox().cx},${flowers2_1.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers2_2.animate({
                transform: `translate(${flowers2_2.getBBox().cx-5.5},${flowers2_2.getBBox().cy-48}) rotate(45)`,
            }, 1000, mina.easeinout)
            flowers2_3.animate({
                transform: `translate(${flowers2_3.getBBox().cx-58},${flowers2_3.getBBox().cy+15.5}) rotate(-45)`,
            }, 1000, mina.easeinout)
            flowers3_1.animate({
                transform: `translate(${flowers3_1.getBBox().cx},${flowers3_1.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers3_2.animate({
                transform: `translate(${flowers3_2.getBBox().cx},${flowers3_2.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers4_1.animate({
                transform: `translate(${flowers4_1.getBBox().cx},${flowers4_1.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers4_2.animate({
                transform: `translate(${flowers4_2.getBBox().cx},${flowers4_2.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout)
            flowers4_3.animate({
                transform: `translate(${flowers4_3.getBBox().cx},${flowers4_3.getBBox().cy}) scale(0)`
            }, 1000, mina.easeinout,()=>{
                stemGroup.animate({
                    strokeDashoffset: 70
                }, 1000, mina.easeinout,()=>{
                    this.motion(stemGroup, flowers1_1, flowers1_2, flowers2_1, flowers2_2, flowers2_3, flowers3_1, flowers3_2, flowers4_1, flowers4_2, flowers4_3)

                })
            })
        },
        motion: function (stemGroup, flowers1_1, flowers1_2, flowers2_1, flowers2_2, flowers2_3, flowers3_1, flowers3_2, flowers4_1, flowers4_2, flowers4_3) {
            stemGroup.animate({
                strokeDashoffset: 140
            }, 1000, mina.easeinout, () => {
                flowers1_1.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers1_2.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers2_1.animate({
                    transform: 'scale(1)',
                }, 1000, mina.bounce);
                flowers2_3.animate({
                    transform: 'rotate(0deg)',
                }, 1000, mina.bounce);
                flowers3_1.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers3_2.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers4_1.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers4_2.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers4_3.animate({
                    transform: 'scale(1)'
                }, 1000, mina.bounce);
                flowers2_2.animate({
                    transform: 'rotate(0deg)',
                }, 1000, mina.bounce, () => {
                    this.initMotion(stemGroup, flowers1_1, flowers1_2, flowers2_1, flowers2_2, flowers2_3, flowers3_1, flowers3_2, flowers4_1, flowers4_2, flowers4_3)
                });
                
            });
        }
    }
}