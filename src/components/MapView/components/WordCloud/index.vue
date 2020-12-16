<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
import { wordcloud } from '@/api'
export default {
  data() {
    return {
      chartData: {},
      chartSettings: {
        // shape: 'diamond',
        color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,35,.7)', 'rgba(156,13,113,.7)']
      }
    }
  },
  mounted() {
    // const data = []
    // this.wordCloud.forEach(item => {
    //   data.push({
    //     name: item.word,
    //     value: item.count
    //   })
    // })
    wordcloud()
    this.chartData = {
      columns: ['name', 'value'],
      rows: [
        {
          name:'aa测试',
          value: 145454
        },
        {
          name:'bb',
          value: 23
        },
        {
          name:'cc',
          value: 3444
        },
        {
          name:'dd',
          value: 34324
        }
      ]
    }
  }
}
</script>

<style>

</style>
