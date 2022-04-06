function init(){
    const element = document.getElementById("echart-box")
    const instance = echarts.init(element,"dark");

    let option = {
        tootip: {},
        legend: {},
        title: {
            text: "疫情",
            top: "90%",
            left: "45%"
        },
        series: [
            {
                type: 'pie',
                radius: ["40%","60%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center",
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    show: false
                },
                emphasis: {
                    label: {
                      show: true,
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                },
                data: [
                    {
                        name: '上海',
                        value: 200
                    },
                    {
                        name: '吉林',
                        value: 300
                    },
                    {
                        name: "深圳",
                        value: 156
                    },
                    {
                        name: "江西",
                        value: 50
                    }
                ]
            }
        ]
    }

    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize()
    }
}