<script>

export default {
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    const classStr = 'iconfont icon-' + icon
    if (icon) {
      vnodes.push(<i class={classStr}></i>)
    }
    if (title) {
      vnodes.push(<span slot="title">{title}</span>)
    }
    return vnodes
  }

}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 18px;
  color: #BFCBD9;
}
</style>
