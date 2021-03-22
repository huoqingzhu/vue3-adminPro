
const barOption={
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
  }]
};
const pieOption={
  title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
  },
  tooltip: {
      trigger: 'item'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
  },
  series: [
      {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'}
          ],
          emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
const lineOption={
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
  }]
};
const radarOption={
  title: {
      text: '基础雷达图'
  },
  tooltip: {},
  legend: {
      data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
      // shape: 'circle',
      name: {
          textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
          }
      },
      indicator: [
          { name: '销售（sales）', max: 6500},
          { name: '管理（Administration）', max: 16000},
          { name: '信息技术（Information Techology）', max: 30000},
          { name: '客服（Customer Support）', max: 38000},
          { name: '研发（Development）', max: 52000},
          { name: '市场（Marketing）', max: 25000}
      ]
  },
  series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
          {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
          },
          {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
          }
      ]
  }]
};
const chartData=[
  {name:"柱状图",type:"bar",option:barOption},
  {name:"折线图",type:"line",option:lineOption},
  {name:"饼图",type:"pie",option:pieOption},
  {name:"雷达图",type:"radar",option:radarOption},
]
export default chartData