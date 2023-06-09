import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const StatisticsChart = () => {

    const option = {
        color: ['var(--orange)'],

        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)",
            borderWidth: 0,
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(70, 169, 255)",
                        },
                        {
                            offset: 1,
                            color: "rgb(123, 70, 255)"
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        {
                            offset: 0,
                            color: "rgba(70, 169, 255,.35)"
                        },
                        {
                            offset: 1,
                            color: "rgba(123, 70, 255,.95)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: true,
                data: [28000, 21000, 32000, 18000, 31000, 14000, 26000]
            }
        ]
    }

    return (
        <ReactECharts option={option}
        />
    )
}

export default StatisticsChart