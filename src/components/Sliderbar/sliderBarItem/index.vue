<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <template
      v-if="noChildrenMenu(item.children, item) && (!noChildren.children || noChildren.noShowingChildren) && !item.alwaysShow">
      <app-link v-if="item.redirect != 'noRedirect' && noChildren.meta" :to="resolvePath(noChildren.path)">
        <el-menu-item :index="resolvePath(noChildren.path)">
          <i class="el-icon-tickets" />
          <span slot="title">{{ noChildren.meta && noChildren.meta.title }}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <slider-bar-item v-for="route in item.children" :key="route.path" :item="route"
        :base-path="resolvePath(route.path)" class="nest-menu" />
    </el-submenu>
  </div>
</template>

<script>
const path = require('path')
import AppLink from "../AppLink"
import Item from '../Item'
export default {
  name: 'sliderBarItem',
  components: {
    AppLink,
    Item
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      noChildren: []
    }
  },
  methods: {
    noChildrenMenu(children = [], parent) {
      const noChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      if (noChildren.length === 0) {
        this.noChildren = { ...parent, path: '', noShowingChildren: true }
        console.log(this.noChildren, 'noChildren')
        return true

      }
      return false
    },
    isExternalLink(url) {
      try {
        // 将输入链接解析为绝对URL（以当前页面为基准）
        const link = new URL(url, window.location.href);
        const current = new URL(window.location.href);

        // 排除非HTTP协议（如mailto:、tel:、javascript:等）
        if (!['http:', 'https:'].includes(link.protocol)) return false;

        // 对比主机名（hostname）判断是否跨域
        return link.hostname !== current.hostname;

      } catch (e) {
        // 解析失败说明是相对路径或无效URL，按内部链接处理
        return false;
      }
    },
    resolvePath(url) {
      if (this.isExternalLink(url)) {
        return url
      }
      if (this.isExternalLink(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, url)
    }
  }
}
</script>

<style lang="less" scoped></style>
