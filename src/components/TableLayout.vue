<template>
    <div class="box">
      <!--顶部搜索按钮-->
      <div class="top">
        <div  class="left">
          <slot name="top-left">
            <el-button size="mini">左边按钮</el-button>
          </slot>
        </div>
        <div class="right">
          <slot class="right" name="top-right">
            <el-button size="mini" @click="search">右边按钮</el-button>
          </slot>
        </div>
      </div>
      <!--table-->
      <div class="table">
        <slot name="table">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号(模板)">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名(模板)">
          </el-table-column>
        </el-table>
      </slot>
      </div>
      <!--分页-->
      <div class="pagination" style="text-align: right;margin-top: 10px">
        <slot name="pagination">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="sizes, prev, pager, next, jumper, ->, total, slot" :total="pageObj.total" :page-size="pageObj.limit" :current-page="pageObj.page">
          </el-pagination>
        </slot>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import PageMixins from './../mixin/mixin'

@Component({
  mixins: [PageMixins]
})
export default class TableTemplate extends Vue {
  method:string = 'emitEvent';
  emitEvent () {
    let method = ''
    if (this.$parent) {
      method = this.$parent.method
    }
    this.$emit(method || this.method, this.pageObj)
  }
}
</script>

<style lang="scss" scoped>
  .box{
    .top-content,.middle-content{
        background-color: white;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
      }
  }
  .table{margin-top: 10px}
.top{
  overflow: hidden;
  padding:10px 0;
  background-color: white;
  &:after{
    content: "";
    clear: both;
  }
  .left{
    float: left;
    line-height: 28px;
  }
  .right{float: right}
}
</style>
