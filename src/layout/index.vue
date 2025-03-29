<template>
  <div class="app-wraper">
    <Sliderbar />
    <div class="main-container" :class="{'collapse': isCollapse ? true : false}">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>
<script>
import { Sliderbar, AppMain, NavBar } from '@/components';
export default {
  name: 'layout',
  components: {
    Sliderbar,
    AppMain,
    NavBar
  },
  data() {
    return {}
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.app-wraper {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  .main-container {
    flex: 1;
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 210px;
    position: relative;
    &.collapse {
      margin-left: 56px;
    }
  }

}
</style>