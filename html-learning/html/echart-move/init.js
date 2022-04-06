function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark",{
        renderer: "svg"
    });

    let data = [
        [15, 0],
        [-50, 10],
        [-56.5, 20],
        [-46.5, 30],
        [-22.1, 40]
    ]
    let symbolSize = 20

    let option = {
        tooltip: {},
        xAxis: {
            min: -10,
            max: 80,
            type: "value",
            axisLine: { onZero: false}
        },
        yAxis: {
            min: -20,
            max: 60,
            type: "value",
            axisLine: { onZero: false}
        },
        series: [
            {
                id: "a",
                type: "line",
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }
        ]
    }

    instance && instance.setOption(option);

    window.onresize = function(){
        instance.resize()
    }
}