<template>
  <common-card
    title="累计订单量"
    :value="'2,157,420'"
  >
    <template>
      <v-chart :options="getOptions()" />
      <!-- <div id="total-orders-chart"></div> -->
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{'2,000,000'}}</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '@/mixins/commonCardMixin'

  export default {
    mixins: [commonCardMixin],

    // mounted() {
    //   const chartDom = document.getElementById('total-orders-chart')
    //   const chart = this.$echarts.init(chartDom)
    //   chart.setOption(this.getOptions())
    // },

    methods: {
      getOptions() {
        return {
          xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false
          },
          yAxis: {
            show: false
          },
          series: [
            {
              type: 'line',
              data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 834, 690, 530, 220, 620],
              // 显示面积
              areaStyle: {
                color: 'purple'
              },
              lineStyle: {
                // 隐藏线
                width: 0
              },
              itemStyle: {
                // 隐藏坐标点
                opacity: 0
              },
              // 更加平滑的展示
              smooth: true
            }
          ],
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* #total-orders-chart {
    width: 100%;
    height: 100%;
  } */
</style>
