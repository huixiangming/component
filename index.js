$(function() {
    var a = $('.a').get(0);
    var b = echarts.init($('.b').get(0));
    Handsontable(a,{
        data: [
            ['Java','1','降','-0.01%'],['C','2','升','+2.44%'],['Python','3','升','+1.41%'],['C++','4','降','-2.58%'],
            ['C#','5','升','+2.07%'],['Visual Basic .NET','6','降','-1.17%'],['JavaScript','7','降','-0.85%']
        ],
        colHeaders: [
            '语言名称','排行','升或降','变化幅度'
        ],
        colWidths: 150,
        rowHeights: 30,
    });
    var option = {
        title: {text: 'JavaScript语言排名变化'},
        tooltip: {
            trigger:'axis',
            formatter:function(c){
                return '<span style="margin-left:8px">排名</span>'+'<br/>'+c[0].name+':'+c[0].data;
            }
        },
        xAxis: {data:[2000,2005,2010,2015,2020]},
        yAxis: {},
        series: [{name:'排名',type:'line',data:[6,9,8,8,7]}]
    };
    b.setOption(option);
});
