function init() {
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,'dark');
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
    instance && instance.setOption(option);
    // 自适应
    window.onresize = function(){
        instance.resize()
    }
    // 图形元素点击事件
    instance.on("click",function(params){
        // window.open("https://www.baidu.com/s?word=" + params.name)
    })
    // 空白区域点击事件
    instance.getZr().on("click",function(event){
        if(!event.target){
            alert("点击空白区域")
        }
    })
}