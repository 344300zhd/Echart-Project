function init(){
    const elem = document.getElementById("bar-box")
    const instance = echarts.init(elem)
    window.onresize = function(){
        instance.resize()
    }

    let data = [
        {
            name: "唐诗",
            value: 2500
        },
        {
            name: "宋词",
            value: 8000
        },
        {
            name: "元曲",
            value: 3000
        },
        {
            name: "明调",
            value: 4999
        }
    ]
    let total = data.reduce((sum,item) => {
        return sum + item.value
    },0)
    let yData = []
    let xData = []
    let precent = []
    data.forEach(item => {
        yData.push(item.name)
        xData.push(item.value)
        precent.push(Math.round(item.value / total * 100) + "%")
    })
    let color = {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: "#1588D1" // 0% 处的颜色
        },
        {
            offset: 1,
            color: "#0F4071" // 100% 处的颜色
        }
        ]
    }

    let option = {
        backgroundColor: "#071347",
        xAxis: {
            show: false,
        },
        yAxis: [
            {
                type: "category",
                data: yData,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle: {
                        color: "#fff"
                    },
                }
            },
            {
                type: "category",
                data: precent,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    margin: -50
                }
            }
        ],
        series: [
            // 主体
            {
                type: "bar",
                data: xData,
                barWidth: 18,
                itemStyle: {
                    normal: {
                        color: color
                    }
                },
                z: 0
            },
            // 间隔
            {
                type: "pictorialBar",
                itemStyle: {
                    normal: {
                        color: "#061348"
                    }
                },
                data: xData,
                symbol: "rect",
                symbolSize: [1,25],
                symbolRepeat: "fixed",
                symbolMargin: 3,
                symbolPosition: "start",
                symbolClip: true,
                animationEasing: "elasticOut",
                z: 1
            },
            // 外边框
            {
                type: "bar",
                barWidth: 30,
                data: (function(){
                    let array = []
                    xData.forEach(() => {
                        array.push(total)
                    })
                    return array
                })(),
                itemStyle: {
                    normal: {
                        color: "transparent",
                        barBorderColor: "#1c4b8e",
                        borderWidth: 1,
                    }
                },
                barGap: "-130%",
                z: 3
            }
        ]
    }

    instance && instance.setOption(option)
}