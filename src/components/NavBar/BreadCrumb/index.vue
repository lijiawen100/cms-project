<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item, index in matched" :key="item.path">
        <span v-if="index === matched.length - 1">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>

export default {
  name: 'BreadCrumb',
  data() {
    return {
      matched: []
    }
  },
  mounted() {
    this.getMatched()
    console.log(this.$route)
  },
  watch: {
    $route() {
      this.getMatched()
    }
  },
  methods: {
    getMatched() {
      const { matched } = this.$route
      let _matched = matched.filter((item) => {
        return item.meta && item.meta.title
      })
      let first = _matched[0]
      if (!this.isHome(first)) {
        _matched = [{ path: '/home', meta: { title: '首页' } }].concat(_matched)
      }
      this.matched = _matched.filter(item => item.meta && item.meta.breadcrumb !== false)
    },
    isHome(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLowerCase() === '首页'.toLowerCase()
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>
