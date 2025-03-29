<template>
  <div class="section">
    <div class="box-card">
      <el-form :inline="true" :model="formData" size="small ">
        <div class="form-items">
          <el-form-item label="页面标题">
            <el-input v-model="formData.title" placeholder="请输入页面标题"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="页面状态">
            <el-select v-model="formData.status" placeholder="请选择页面状态">
              <el-option label="上线" value="shanghai"></el-option>
              <el-option label="下线" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box-card">
      <div>
        <el-button type="primary" size="small">+新增页面</el-button>
      </div>
      <div class="table">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </div>
      <div class="pagenation">
        <el-pagination :page-sizes="[10, 20, 30, 40]" :page-size="10" background layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'activity',
  data() {
    return {
      formData: {
        title: '',
        status: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.section {
  min-height: calc(100vh - 64px);
  width: 100%;
  position: relative;
  overflow: auto;
  padding: 10px 10px 10px 10px;
  background: #f5f5f5;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, .15);

  .box-card {
    height: auto;
    background-color: #fff;
    padding: 16px 24px;
    // padding-bottom: 0;
    margin-bottom: 16px;
    font-size: 14px;

    .el-form {
      display: flex;
      justify-content: space-between;

      .form-items {
        .el-form-item:nth-of-type(1) {
          margin-left: 15px;
        }

        .el-form-item:nth-of-type(2) {
          margin-left: 30px;
        }

        .el-input {
          line-height: 32px;
        }
      }

    }
  }

  .table {
    padding-top: 15px;
  }

  .pagenation {
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
  }
}
</style>