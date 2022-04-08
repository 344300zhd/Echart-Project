function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");
    let option = []

    instance.showLoading()
    instance && instance.setOption(option)

    window.onresize = function(){
        instance.resize()
    }
}