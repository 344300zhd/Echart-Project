function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");
    
    let option = {
        tooltip: {},
        legend: {},
        xAxis: {
            type: "category",
            data: ['上海','吉林','深圳','东莞','广州']
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                type: "line",
                label: {
                    show: true
                },
                stack: "all",
                lineStyle: {
                    normal: {
                        width: 5,
                        color: "green",
                        type: "dashed"
                    }
                },
                itemStyle: {
                    normal: {
                        width: 10
                    }
                },
                areaStyle: {},
                smooth: true,
                data: [100,200,245,211,23]
            },
            {
                type: "line",
                stack: "all",
                data: [50,213,250,200,12],
                areaStyle: {}
            },
            {
                type: "line",
                stack: "all",
                step: "end",
                data: [120,233,150,240,212],
                // areaStyle: {}
            }
        ]
    }

    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize()
    }
}