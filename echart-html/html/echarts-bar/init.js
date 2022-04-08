function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");

    let option = {
        tooltip: {
            formatter: function(val){
                console.log(val);
                return `${val.name}已进行${val.data}%`
            }
        },
        legend: {},
        xAxis: {
            data: ["时间","生命","成就","虚度","懊悔","开心"],
            axisLine: {
                show: false
            }
        },
        yAxis: {
            name: "进度",
            type: "value",
            min: 0,
            max: 100,
            axisLabel: {
                formatter: "{value}%"
            }
        },
        series: [
            {
                type: "bar",
                barWidth: 20,
                stack: "x",
                barMaxWidth: 50,
                barGap: "20%",
                showBackground: true,
                backgroundStyle:{
                    color: "red"
                },
                data: [100,20,1,19,18,2],
                // 全部柱子样式
                itemStyle: {
                    color: "pink",
                    // barBorderRadius: 10,
                    borderType: "solid",
                    borderColor: "green",
                    shadowColor: "green",
                    shadowBlur: 5,
                }
            },
            {
                type: "bar",
                data: [100,18,15,3,3,15],
                stack: "x"
            }
        ]
    }

    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize()
    }
}