function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,'dark');

    let option = {
        tooltip: {},
        legend: {},
        series:[
            {
                type: "pie",
                data:[
                    { name: "苹果",value: 500 },
                    { name: "香蕉",value: 300 },
                    { name: "樱桃",value: 135 },
                    { name: "香橙",value: 251 },
                    { name: "火龙果",value: 112 }
                ]
            }
        ]
    }

    instance && instance.setOption(option);

    window.onresize = function(){
        instance.resize()
    }

    // 自动触发
    let currentIndex = 0
    setInterval(function(){
        let dataLength = option.series[0].data.length
        // 取消之前的高亮
        instance.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLength;
        // 高亮当前图形
        instance.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        // 显示 tooltip
        instance.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: currentIndex
        })
    },1000)

}

