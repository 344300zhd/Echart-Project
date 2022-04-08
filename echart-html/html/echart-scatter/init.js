function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element,"dark");
    let option = {
        tooltip: {},
        legend: {},
        xAxis: {
            data: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },
        yAxis: {},
        series: [
            {
                type: "scatter",
                data: [220,182,191,234,290,330,310],
                symbol: 'path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,' + 
                        '1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.' +
                        '846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.41' + 
                        '5c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,' +
                        '8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,'+ 
                        '6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z',
                symbolSize: (val) => {
                    return val / 10;
                }
            
            }
        ]
    }
    instance && instance.setOption(option);

    window.onresize = function(){
        instance.resize()
    }
}