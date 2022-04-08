function init(){
    const element = document.getElementById("echart-box")
    const instance = echarts.init(element,"dark");

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                axisPointer: {
                    type: "cross"
                }
            }
        },
        legend: {},
        xAxis: [
            {
                type: "category",
                axisTick: {
                    alignWithLabel: true
                },
                data: [
                    '1月','2月','3月','4月','5月','6月',
                    '7月','8月','9月','10月','11月','12月',
                ]
            }
        ],
        yAxis: [
            {
                type: "value",
                name: "降水量",
                min: 0,
                position: 'left',
                max: 250,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: "value",
                name: "温度",
                min: 0,
                max: 25,
                position: "right",
                axisLabel: {
                    formatter: '{value} ℃'
                }
            
            }
        ],
        series: [
            {
                name: "降水量",
                type: "bar",
                data: [
                    6, 32, 70, 86, 68.7, 100.7, 125.6,
                     112.2, 78.7, 48.8, 36.0, 19.3
                ],
                yAxisIndex: 0
            },
            {
                name: "温度",
                type: "line",
                // 曲线
                // smooth: true,
                data:[
                    16.0,10.2,10.3,11.4,13.2,24.5,
                    23.5,12.2,14.3,12.4,22.2,11.1
                ],
                yAxisIndex: 1
            }
        ]
    }

    instance && instance.setOption(option)
    window.onresize = function(){
        instance.resize()
    }
}