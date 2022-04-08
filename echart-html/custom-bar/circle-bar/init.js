function init(){
    const elem = document.getElementById("bar-box");
    const instance = echarts.init(elem);
    window.onresize = function(){
        instance.resize()
    }

    let xData = ["斗罗大陆","舞动乾坤","万界神主","秦时明月"]
    let yData = [100,344,200,356]
    let barColor = new echarts.graphic.LinearGradient(0,0,0,0.7,[
        {
            offset: 0,
            color: "#38B2E6"
        },
        {
            offset: 1,
            color: "#0B3147"
        }
    ])
    let option = {
        backgroundColor: "#061326",
        title: {
            text: "国漫播放量",
            textStyle: {
                color: "#2DB1EF",
                fontSize: 20
            },
            left: "center",
            top: "5%"
        },
        grid: {
            top: "15%",
            containLabel: true
        },
        tooltip: {
            show: true,
            backgroundColor: "#061326",
            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [
            {
                type: "category",
                data: xData,
                axisLabel: {
                    textStyle: {
                        color: "#2DB1EF",
                        fontSize: 15                
                    },
                    margin: 30
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false
                },
                show: false
            }
        ],
        series: [
            // 圆柱体
            {
                type: "bar",
                data: yData,
                barWidth: 40,
                itemStyle: {
                    normal: {
                        color: barColor,
                        opacity: 0.8
                    }
                },
                z: 1
            },
            // 上部椭圆
            {
                type: "pictorialBar",
                symbolSize: [40,10],
                symbolPosition: "end",
                symbolOffset: [0,-6],
                color: "#2DB1EF",
                z: 2,
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        fontSize: 15,
                        color: "#2DB1EF"
                    }
                },
                data: yData,
            },
            // 下部椭圆
            {
                type: "pictorialBar",
                symbolSize: [40,10],
                symbolPosition: "start",
                color: "#2DB1EF",
                data: yData,
                z: 2
            },
            // 下部内圆
            {
                type: "pictorialBar",
                symbolSize: [50,17],
                symbolOffset: [0,9],
                z: 3,
                itemStyle: {
                    normal: {
                        color: "transparent",
                        borderColor: "#19465D",
                        borderType: "solid",
                        borderWidth: 10
                    }
                },
                data: yData
            },
            // 下部外圆
            {
                type: "pictorialBar",
                symbolSize: [65,20],
                symbolOffset: [0,16],
                z: 3,
                itemStyle: {
                    normal: {
                        color: "transparent",
                        borderColor: "#19465D",
                        borderType: "solid",
                        borderWidth: 20
                    }
                },
                data: yData
            }
        ]
    }
    
    instance && instance.setOption(option)

}