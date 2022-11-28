<template>
  <div ref="echart" style="height: 600px"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },
  mounted() {
    const echart = echarts.init(this.$refs.echart);
    var echarts1Options = {
      title: {
        text: "项目技术栈",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Vue2" },
            { value: 735, name: "Vue Router" },
            { value: 580, name: "Element UI" },
            { value: 484, name: "Axios" },
            { value: 300, name: "Echarts" },
            { value: 500, name: "Vuex" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    echart.setOption(echarts1Options);
  },
};
</script>

<style>
</style>