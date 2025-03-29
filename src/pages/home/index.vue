<template>
  <div class="main">
    <div class="main-content">
      <div class="left-con">
        <p class="sub-title">欢迎体验</p>
        <p class="title">CMS移动端页面配置系统</p>
        <p class="desc">一套用于解决小程序活动页面发版问题的低代码平台</p>
      </div>
      <div class="right-pic">
        <img src="../../assets/img/welcome.png" alt="picture">
      </div>
    </div>
    <div class="card">
      <div style="padding: 24px; display: flex; align-items: center;">
        <img class="avtar" src="../../assets/img/default-avatar.gif" alt="">
        <div>
          <h2>admin</h2>
          <p>管理员</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  .main-content {
    display: flex;
    align-items: center;

    .left-con {
      margin-right: 10px;

      .sub-title {
        font-size: 30px;
        line-height: 42px;
        color: #333;
      }

      .title {
        width: 420px;
        font-size: 33px;
        line-height: 62px;
        color: #409eff;
      }

      .desc {
        font-size: 14px;
        color: #999;
      }
    }

    .right-pic {
      img {
        border: none;
        max-width: 100%;
      }
    }
  }
  .card {
    position: absolute;
    top: 10px;
    left: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 329px;
    background-color: #fff;
    color: #333;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 4px;


    .avtar {
      float: left;
      margin-right: 15px;
      width: 70px;
      height: 70px;
    }

    p {
      margin-top: 5px;
    }
  }
}
</style>