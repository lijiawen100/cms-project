<template>
  <div>
    <!-- eslint-disable vue/require-component-is -->
    <component v-bind="jumpObj(to)">
      <slot></slot>
    </component>
  </div>
</template>

<script>

export default {
  name: 'AppLink',
  
  props: {
    to:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
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
    jumpObj (to){
      if (this.isExternalLink(to)) {
        return {
          is: 'a',
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      } else {
        return {
          is: 'router-link',
          to
        }
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
