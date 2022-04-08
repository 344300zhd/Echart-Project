function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");

    function makeRandomData(){
        return [
            { name: "江苏",value: Math.round(Math.random() * 100) },
            { name: "上海",value: Math.round(Math.random() * 100) },
            { name: "江西",value: Math.round(Math.random() * 100) },
            { name: "广东",value: Math.round(Math.random() * 100) }
        ]
    }

    let option = {
        legend: {},
        tooltip: {},
        series: [
            {
                type: "pie",
                data: makeRandomData()
            }
        ]
    }

    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize();
    }

    setInterval(()=>{
        instance.setOption({
            series: {
                data: makeRandomData()
            }
        })
    },2000)
}