<template>
  <div class="navbar">
    <div class="hamburger-box" @click="toggleCollapse">
      <svg data-v-07560e0a="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64"
        class="hamburger is-active">
        <path data-v-07560e0a=""
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z">
        </path>
      </svg>
    </div>
    <bread-crumb class="bread"></bread-crumb>
    <el-dropdown @visible-change="hover" class="right-menu">
      <span class="el-dropdown-link pointer">
        admin<i class="el-icon-arrow-down el-icon--right" :class="{ isactive: ishover ? 'active' : '' }"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import BreadCrumb from './BreadCrumb'
export default {
  name: 'NavBar',
  components: {
    BreadCrumb
  },
  data() {
    return {
      ishover: false
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    hover(visible) {
      this.ishover = visible
    },
    toggleCollapse () {
      this.$store.commit('toggleCollapse', !this.isCollapse)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 64px !important;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .hamburger-box {
    height: 100%;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 16px !important;
    line-height: 64px !important;

    .hamburger {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;

      &.is-active {
        transform: rotate(180deg);
      }
    }
  }

  .bread {
    flex: 1;
    align-self: center;
    line-height: 64px;
  }
  .right-menu {
    align-self: center;
    display: flex;
    align-items: center;
    padding-right: 16px;
    .pointer {
      cursor: pointer;
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 16px;
      color: #303133;
      vertical-align: text-bottom;
      .el-icon-arrow-down {
        transition: transform .3s;
        font-size: 16px;
        margin-left: 8px;
        margin-right: 0 !important;
        &.isactive {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
