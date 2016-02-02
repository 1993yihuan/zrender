/*
+zrender绘画js
*找这娃儿==>408240762
*/
//定义路径别名
require.config({
    packages: [
        {
            name: 'zrender',
            location: '../src',
            main: 'zrender'
        }
    ]
});
//引入包
require(
    [
        'zrender',
        'zrender/animation/Animation',
        'zrender/shape/Circle',
        'zrender/shape/Heart',
        'zrender/shape/Line',
        'zrender/shape/Polygon',
        'zrender/shape/Sector',
        'zrender/shape/Polyline',
        'zrender/shape/Star',
        'zrender/shape/Text'
    ],
    function(zrender, Animation, CircleShape, HeartShape, LineShape, PolygonShape, SectorShape, PolylineShape, StarShape, TextShape){
    	//----------画个圆----------
    	// 初始化zrender
        var circleCanvas_1 = zrender.init( document.getElementById('canvas_1') );
        var circle_1 = new CircleShape({
            id : 'circleBase',
            hoverable : false,
            position : [100, 100],
            scale : [1, 1],
            style : {
                x : 0,
                y : 0,
                r : 0,
                brushType : 'fill',
                color : '#FC3',
                lineWidth : 5,
                textPosition :'inside'
            },
            clickable: true,
            draggable : true,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        circleCanvas_1.addShape(circle_1);
        circleCanvas_1.animate(circle_1, 'style', false)
                            .when(7000, {
                                r : 50
                            }).start();
        //----------也还可以有动画----------
        var circleCanvas_2 = zrender.init( document.getElementById("canvas_2") );
        var circle_2 = new CircleShape({
            id : "circleBase",
            hoverable : false,
            position : [100, 20],
            scale : [1, 1],
            style : {
                x : 0,
                y : 0,
                r : 20,
                brushType : 'fill',
                color : '#FC3',
                lineWidth : 5,
                textPosition :'inside'
            },
            clickable: true,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        circleCanvas_2.addShape(circle_2);
        zrenderObj.animates(circleCanvas_2,circle_2)

        //----------也可以有其他的图形----------
        var circleCanvas_3 = zrender.init( document.getElementById("canvas_3") );
        var circle_3 = new HeartShape({
            id : "heartBase",
            hoverable : false,
            style: {
                x: 100,
                y: 80,
                a: 0,
                b: 0,
                brushType: 'both',
                color: '#FC3',
            },
            clickable: true,
            onclick : function() {
                alert("月亮代表我的❤");
            },
            addChild : function(){
            }
        });
        circleCanvas_3.addShape(circle_3);
        circleCanvas_3.animate(circle_3, "style", true)
                            .when(1000, {
                                a: 40,
                                b: 50
                            })
                            .when(2000, {
                                a: 0,
                                b: 0
                            }).start();

        //----------划线----------
        $("#lineBtn").bind("click",function(){
            var point = [];
            $(this).parent().children(".input").each(function($key) {
                point[$key] = $(this).val();
            });
            var circleCanvas_4 = zrender.init( document.getElementById("canvas_4") );
            var circle_4 = new LineShape({
                style: {
                    xStart: parseInt(point[0]),
                    yStart: parseInt(point[1]),
                    xEnd: 0,
                    yEnd: 0,
                    strokeColor: '#FC3',
                    lineWidth: 2
                }
            })
            circleCanvas_4.addShape(circle_4);
            //加入动画
            circleCanvas_4.animate(circle_4, "style", false)
                            .when(7000, {
                                xEnd : parseInt(point[2]),
                                yEnd : parseInt(point[3])
                            }).start();
        })

        //----------绘制多边形----------
        var circleCanvas_5 = zrender.init( document.getElementById("canvas_5") );
        var circle_5 = new PolygonShape({
            id : "",
            hoverable : false,
            style: {
                pointList: [[100, 100], [100, 100], [100, 100], [100, 100]],
                color: '#FC3',
                lineCape:'square'
            },
            clickable: true,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        circleCanvas_5.addShape(circle_5);
        circleCanvas_5.animate(circle_5, "style", false)
                            .when(7000, {
                                pointList: [[50, 100], [200, 0], [200, 200], [0, 200]],
                            }).start();
        //----------扇形加载----------
        var circleCanvas_6 = zrender.init( document.getElementById("canvas_6") );
        var circle_6 = new SectorShape({
            id : '123321',
            style : {
                x : 100,
                y : 100,
                r : 60,
                r0 : 50,
                startAngle : 0,
                endAngle : 0,
                color : '#FC3',
                clockWise : true
            },
            clickable: true,
            hoverable : false,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        circleCanvas_6.addShape(circle_6);
        //done为回调函数
        circleCanvas_6.animate(circle_6, "style", false)
                            .when(7000, {
                                endAngle : 360,
                            }).start().done(function(){circleCanvas_6.modShape(circle_6,{
                                    style : {
                                        textFont : '16px 微软雅黑',
                                        textPosition : 'inside',
                                        textColor : '#FC4',
                                        text : '圆环'
                                    }
                                })
                            });

        //----------各种动画函数----------
        var circleCanvas_7 = zrender.init( document.getElementById("canvas_7") );
        //----------增加文字----------
        var refreshFn = function(){
            //增加动画队列
            var shapList = [];
            //生成图层
            for (var i = 0; i < 35; i++) {
                shapList.push(new CircleShape({
                    id : "random"+i,
                    hoverable : false,
                    style : {
                        x : 30*(i+1)+20,
                        y : -20,
                        r : 15,
                        brushType : 'fill',
                        color : zrenderObj.getRandomColor(),
                        textPosition :'inside',
                        shadowColor : zrenderObj.getRandomColor(),
                        shadowBlur : 20
                    },
                    clickable: true,
                    draggable : true,
                    onclick : function() {
                    },
                    addChild : function(){
                    }
                }));
            }
            //定义文字
            var textShape = new TextShape({
                hoverable : false,
                style: {
                    opacity : 0.5,
                    text: 'refresh重置动画',
                    x: 350,
                    y: 200,
                    color: '#ffbbc1',
                    textFont: '60px 微软雅黑'
                }
            });
            circleCanvas_7.addShape(textShape)
            //加入所有图层
            for (var i = 0; i < 35; i++) {
                circleCanvas_7.addShape(shapList[i]);
                circleCanvas_7.animate(shapList[i], "style", false)
                                .when(500*(i*0.2+0.5), {
                                    y : 10
                                })
                                .when(1000*(i*0.2+0.5), {
                                    y : 290
                                }).start("BounceOut");
            }
        }
        //----------refresh----------
        $("#canvas_7_refresh").bind("click",function(){
            circleCanvas_7.clear();
            refreshFn();
        })
        refreshFn();

        //----------绘制曲线----------
        var circleCanvas_8 = zrender.init( document.getElementById("canvas_8") );
        var circle_8 = new PolylineShape({
            style : {
                pointList : [[100, 200], [200, 50], [200, 50],[200, 50],[200, 50],[200, 50],[200, 50]],
                strokeColor : 'rgba(135, 206, 250, 0.8)',
                lineWidth : 3,
                smooth: 'spline'
            }
        });
        circleCanvas_8.addShape(circle_8);
        circleCanvas_8.animate(circle_8, "style", false)
                                .when(500, {
                                    pointList : [[100, 200], [200, 50], [300, 200],[300, 200],[300, 200],[300, 200],[300, 200]],
                                })
                                .when(1000, {
                                    pointList : [[100, 200], [200, 50], [300, 200],[400, 50],[400, 50],[400, 50],[400, 50]],
                                })
                                .when(1500, {
                                    pointList : [[100, 200], [200, 50], [300, 200],[400, 50],[500, 200],[500, 200],[500, 200]],
                                })
                                .when(2000, {
                                    pointList : [[100, 200], [200, 50], [300, 200],[400, 50],[500, 200],[600, 50],[600, 50]],
                                })
                                .when(2500, {
                                    pointList : [[100, 200], [200, 50], [300, 200],[400, 50],[500, 200],[600, 50],[700, 200]],
                                }).start();

        // ----------翻滚五角星----------
        var circleCanvas_9 = zrender.init( document.getElementById("canvas_9") );
        var circle_9 = new StarShape({
            hoverable : false,
            rotation: [0,100,100],
            style: {
                x: 100,
                y: 100,
                r: 50,
                n: 5,
                color: '#FC3',
                shadowBlur: '100',
                shadowColor: '#FC3'
            },
            onclick : function() {
            },
            addChild : function(){
            }
        });
        circleCanvas_9.addShape(circle_9);
        circleCanvas_9.animate(circle_9, "", true)
                            .when(4000, {
                                rotation: [10,100,100],
                            }).start();
        var changeColor = function(){
                                circleCanvas_9.animate(circle_9, "style", false)
                                    .when(1000, {
                                        color: zrenderObj.getRandomColor(),
                                        shadowColor: zrenderObj.getRandomColor()
                                    }).start();
                                setTimeout(changeColor,2000)
                            }
        changeColor();

        //----------进入页面动画(圆形londing版)----------
        var circleLongding = function(){
            var circleCanvas_max = zrender.init( document.getElementById("canvas_max") );
            var circle_max = new CircleShape({
                hoverable : false,
                position : [$(window).width()/2, $(window).height()/2],
                scale : [1, 1],
                style : {
                    x : 0,
                    y : 0,
                    r : 0,
                    brushType : 'fill',
                    color : '#FC3',
                    lineWidth : 5,
                    opacity : 1,
                    textPosition :'inside'
                },
                draggable : false
            });
            circleCanvas_max.addShape(circle_max);
            circleCanvas_max.animate(circle_max, "style", false)
                                .when(800, {
                                    r : 30,
                                    opacity : 1
                                })
                                .when(1600, {
                                    r : 0,
                                    opacity : 1
                                })
                                .when(2400, {
                                    r : 30,
                                    opacity : 1
                                })
                                .when(3400, {
                                    opacity : 0,
                                    r : zrenderObj.getMaxPx()
                                }).start().done(function(){$('#canvas_max').fadeOut(500)});
        }
        // circleLongding()

        //----------html时钟----------
        var circleCanvas_10 = zrender.init( document.getElementById("canvas_10") );
        var circle_10 = new SectorShape({
            id : '123321',
            style : {
                x : 100,
                y : 100,
                r : 90,
                r0 : 85,
                startAngle : 0,
                endAngle : 360,
                color : '#FC3',
                clockWise : true
            },
            clickable: true,
            hoverable : false,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        lineHour = new LineShape({
            // 计算选择弧度
            rotation: [Math.PI*(-((zrenderObj.getTime().hour+zrenderObj.getTime().minutes/60)/12)*2),100,100],
            style : {
                xStart: 100,
                yStart: 100,
                xEnd: 100,
                yEnd: 60,
                strokeColor: '#FC3',
                lineWidth: 2
            },
            clickable: true,
            hoverable : false,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        lineMinutes= new LineShape({
            // 计算选择弧度
            rotation: [Math.PI*(-((zrenderObj.getTime().minutes+zrenderObj.getTime().seconds/60)/60)*2),100,100],
            style : {
                xStart: 100,
                yStart: 100,
                xEnd: 100,
                yEnd: 40,
                strokeColor: '#FC3',
                lineWidth: 2
            },
            clickable: true,
            hoverable : false,
            onclick : function() {
            },
            addChild : function(){
            }
        });
        lineSeconds = new LineShape({
            // 计算选择弧度
            rotation: [Math.PI*(-(zrenderObj.getTime().seconds/60)*2),100,100],
            style : {
                xStart: 100,
                yStart: 100,
                xEnd: 100,
                yEnd: 20,
                strokeColor: '#FC3',
                lineWidth: 2
            },
            clickable: true,
            hoverable : false,
            onclick : function() {
            },
            addChild : function(){
            }
        });

        //绘制刻度
        var timeList = [];
        for (var i = 0;i < 360; i+=30) {
            timeList.push(
                new SectorShape({
                    style : {
                        x : 100,
                        y : 100,
                        r : 85,
                        r0 : 70,
                        startAngle : i,
                        endAngle : i+1,
                        color : '#FC3',
                        clockWise : true
                    },
                    clickable: true,
                    hoverable : false,
                    onclick : function() {
                    },
                    addChild : function(){
                    }
                })
            )
        }
        for (var i = 0; i < timeList.length; i++) {
            circleCanvas_10.addShape(timeList[i]);
        }
        circleCanvas_10.addShape(circle_10);
        circleCanvas_10.addShape(lineHour);
        circleCanvas_10.addShape(lineMinutes);
        circleCanvas_10.addShape(lineSeconds);

        // 每一秒刷新时间
        var changeTime = function(){
            circleCanvas_10.modShape(lineSeconds,{
                                    rotation: [Math.PI*(-(zrenderObj.getTime().seconds/60)*2),100,100]
                                })
            circleCanvas_10.modShape(lineMinutes,{
                                    rotation: [Math.PI*(-((zrenderObj.getTime().minutes+zrenderObj.getTime().seconds/60)/60)*2),100,100]
                                })
            circleCanvas_10.modShape(lineHour,{
                                    rotation: [Math.PI*(-((zrenderObj.getTime().hour+zrenderObj.getTime().minutes/60)/12)*2),100,100]
                                })
            circleCanvas_10.refresh();
            setTimeout(changeTime,1000)
        }
        changeTime();

        //----------生成图片---------
        $("#getImg").bind("click",function(){
            $("#canvas_9").after("<img src='"+circleCanvas_9.toDataURL("png")+"'>")
        })
        //----------追踪鼠标---------
        var circleCanvas_11 = zrender.init( document.getElementById("canvas_11") );
        //生成追踪鼠标图层
        var trackMouse = function($mx,$my,$canvas,$size){
            var circle_Mouse = new StarShape({
                hoverable : false,
                rotation: [0,$mx,$my],
                style: {
                    x: $mx,
                    y: $my,
                    r: $size,
                    n: 5,
                    opacity : 1,
                    color: zrenderObj.getRandomColor()
                }
            });
            $canvas.addShape(circle_Mouse);
            $canvas.animate(circle_Mouse, "style", false)
                            .when(3000, {
                                y: $my-100,
                                opacity : 0
                            }).start();
            $canvas.animate(circle_Mouse, "", false)
                            .when(3000, {
                                rotation: [90,$mx,$my]
                            }).start();
        }
        var trackClick = function($mx,$my){
            var circle_click = new CircleShape({
                hoverable : false,
                position : [$mx,$my],
                scale : [1, 1],
                style : {
                    x : 0,
                    y : 0,
                    r : 0,
                    opacity : 1,
                    brushType : 'fill',
                    color : '#FC3',
                    textPosition :'inside'
                },
                clickable: false,

            });
            circleCanvas_11.addShape(circle_click);
            circleCanvas_11.animate(circle_click, "style", false)
                            .when(500, {
                                r : 100,
                                opacity : 0
                            }).start();
        }
        $("#canvas_11").mousemove(function(e){
            var enterX = e.pageX-$(this).offset().left;
            var enterY = e.pageY-$(this).offset().top;
            trackMouse(enterX,enterY,circleCanvas_11,8);
        })
        $("#canvas_11").bind("click",function(e){
            var enterX = e.pageX-$(this).offset().left;
            var enterY = e.pageY-$(this).offset().top;
            trackClick(enterX,enterY);
        })
        //----------进入页面动画(酷炫星星版)----------
        var starLongding = function(){
            var circleCanvas_max = zrender.init( document.getElementById("canvas_max") );
            $("#canvas_max").mousemove(function(e){
                var enterX = e.pageX-$(this).offset().left;
                var enterY = e.pageY-$(this).offset().top;
                trackMouse(enterX,enterY,circleCanvas_max,10)
            })
            $("#canvas_max").bind("click",function(){
                $('#canvas_max').fadeOut(1000)
            })

        }
        starLongding();
    }


)
//----------独立的方法----------
var zrenderObj = {};
//圆的动画循环
zrenderObj.animates = function($obj,$id){
    $obj.animate($id, "", true)
                .when(1000, {
                    position : [20, 90]
                })
                .when(2000, {
                    position : [100, 180]
                })
                .when(3000, {
                    position : [180, 90]
                })
                .when(4000, {
                    position : [100, 20]
                }).start();
}
//获得随机颜色
zrenderObj.getRandomColor = function() {
    return 'rgba(' + Math.round(Math.random() * 256) + ',' + Math.round(Math.random() * 256) + ','  + Math.round(Math.random() * 256) + ', 0.7)'
}

//获取窗口大小
zrenderObj.getMaxPx = function(){
    if($(window).height()>$(window).width()){
        return $(window).height();
    }
    else{
        return $(window).width();
    }
}

//获取绝对时间
zrenderObj.getTime = function(){
    var allTime = {};
    allTime.hour = new Date().getHours();
    allTime.minutes = new Date().getMinutes();
    allTime.seconds = new Date().getSeconds()
    if(new Date().getHours()>11){
        allTime.hour = new Date().getHours()-12;
    }
    return allTime;
}
