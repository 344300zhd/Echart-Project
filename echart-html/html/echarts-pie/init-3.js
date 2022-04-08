function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");

    let option = {
        tooltip: {},
        legend: {},
        series: [
            {
                type: 'pie',
                roseType: "area",
                data: [
                    { name: "江苏",value: 100 },
                    { name: "上海",value: 439 },
                    { name: "江西",value: 120 },
                    { name: "南京",value: 311 }
                ]
            }
        ]
    }

    instance && instance.setOption(option);
}