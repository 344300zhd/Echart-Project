function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");
var img = 'data:image/png;base64,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';


    let option = {
        tooltip: {
            formatter: function(val){
                console.log(val);
                return `${val.name}已进行${val.data}%`
            }
        },
        legend: {},
        yAxis: {
            type: "category",
            data: ["时间","生命","成就","虚度","懊悔","开心"],
            axisLine: {
                show: false
            }
        },
        xAxis: {
            name: "进度",
            type: "value",
            axisLabel: {
                formatter: "{value}%"
            }
        },
        series: [
            {
                type: "pictorialBar",
                symbol: "image://" + img,
                symbolSize: ["100%","100%"],
                symbolBoundingData: 7,
                symbolClip: true,
                symbolRepeat: false,
                data: [1,2,3,4,5,6],
                barWidth: 20
            }
        ]
    }

    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize()
    }
}