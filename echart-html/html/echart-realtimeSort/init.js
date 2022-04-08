function init(){
    const element = document.getElementById("echart-box");
    const instance = echarts.init(element);

    let data = [];
    for(let i = 0;i < 5;i++){
        data.push(parseInt(Math.random() * 200));
    }

    let option = {
        xAxis: {
            // 用数据的最大值作为 X 轴的最大值，视觉效果最好
            max: "dataMax"
        },
        yAxis: {
            type: "category",
            data: ["生命","青春","劳碌","成就","虚度"],
            // Y 轴从小到大排列
            inverse: true,
            // 第一次柱条排序动画的时长
            animationDuration: 300,
            // 表示第一次后柱条排序动画的时长
            animationDurationUpdate: 300,
            // 只显示前 4（3+1）项
            max: 4
        },
        legend: {},
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        // 动画曲线
        animationEasing: "linear",
        animationEasingUpdate: "linear",
        series: [
            {
                // 开启系列的动态排序效果
                realtimeSort: true,
                name: "进度",
                type: "bar",
                data: data,
                label: {
                    show: true,
                    position: "right",
                    // 开启数字增长动画
                    valueAnimation: true
                }
            }
        ]
    }

    instance && instance.setOption(option);

    window.onresize = function(){
        instance.resize()
    }

    function update(){
        let data = option.series[0].data;
        for(let i = 0;i < data.length;i++){
            if(Math.random() < 0.9){
                data[i] = Math.round(Math.random() * 2000)
            }else{
                data[i] = Math.round(Math.random() * 200)
            }
        }
        instance.setOption(option)
    }

    // 执行间隔为 animationDuration 效果最佳
    setInterval(function(){
        update()
    },3000)
}