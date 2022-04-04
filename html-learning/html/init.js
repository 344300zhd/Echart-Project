function init() {
    const echart_elem = document.getElementById("echart-box");
    const echart_instance = echarts.init(echart_elem,'dark');
    let option = {
        // 全局配置
        title: {
            text: "echart-入门"
        },
        tooltip: {},
        legend: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "裤子"],
        },
        yAxis: {},
        series: [
            // 局部配置
            {
                name: "销量",
                type: "bar",
                data: [10, 20, 24],
                color: 'red'
            },
            {
                name: "库存",
                type: "bar",
                data: [30,12,23]
            },
            {
                name: "折扣",
                type: 'bar',
                data: [12,22,23]
            }
        ]
    }
    echart_instance && echart_instance.setOption(option);
    window.onresize = function(){
        echart_instance.resize()
    }
}