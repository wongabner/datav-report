<template>
  <div class="home">
    <TopView />
    <SalesView />
    <BottomView />
    <MapView />
  </div>
</template>

<script>
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import BottomView from '@/components/BottomView'
import MapView from '@/components/MapView'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    min-height: 100%;
    padding: 20px;
    background: #eee;
  }
</style>
