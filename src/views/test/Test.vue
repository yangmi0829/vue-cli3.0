<!--suppress ALL -->
<template>
  <!--table模板-->
  <table-layout ref="table" @getList="getList">
    <template slot="top-left">
      <el-button>添加</el-button>
    </template>
    <template slot="top-right">
      <el-date-picker
        value-format="yyyy-MM-dd"
        v-model="queryParams.timeRange"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-input v-model="queryParams.keyword" placeholder="关键字" style="width: 12rem"></el-input>
      <el-button @click="search">搜索</el-button>
    </template>
    <template slot="table">
      <table-template :header="header" @selectionChange="handleSelectionChange" :tableData="tableData">
        <!---->
        <template slot="expand" slot-scope="{scope}">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="名称">
              {{scope.name}}
            </el-form-item>
          </el-form>
        </template>
        <!--姓名电话-->
        <template slot="name-phone" slot-scope="{scope}">
          <div> <i class="el-icon-time"></i>{{scope.name}}</div>
          <div> <i class="el-icon-time"></i>{{scope.phone}}</div>
        </template>
        <!--头像-->
        <template slot="avatar" slot-scope="{scope}">
          <img :src="scope.avatar">
        </template>
        <!--操作-->
        <template slot="operator" slot-scope="{scope}">
          <el-button @click="handleView(scope)">查看</el-button>
          <el-button @click="handleDel(scope)">删除</el-button>
        </template>
      </table-template>
    </template>
  </table-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TableLayout from '../../components/TableLayout.vue'
import TableTemplate from '../../components/TableTemplate.vue'
import PageMixins from './../../mixin/mixin'

@Component({
  components: {
    TableLayout, TableTemplate
  },
  mixins: [PageMixins]
})
export default class Test extends Vue {
  header:Array = [
    { 'type': 'selection' },
    { 'type': 'expand','slot':'expand' },
    { 'type': 'index', fixed: true },
    { 'prop': 'name', 'label': '姓名', 'slot': 'name-phone' },
    { 'prop': 'loginName', 'label': '登录名' },
    { 'prop': 'nickName', 'label': '昵称' },
    { 'prop': 'avatar', 'label': '头像', width: 300 ,'slot': 'avatar'},
    { 'prop': 'age', 'label': '年龄' },
    { 'prop': 'status', 'label': '状态' },
    { 'prop': 'acorpName', 'label': '公司名称' },
    { 'prop': 'departmentName', 'label': '部门名称' },
    { 'prop': 'description', 'label': '描述',  },
    { 'prop': 'time', 'label': '时间', children: [
        { 'prop': 'createTime', 'label': '创建时间' },
        { 'prop': 'updateTime', 'label': '更新时间' },
      ] },
    { 'label': '操作','slot': 'operator', fixed: 'right',width: 180 }
  ];
  queryParams:{
    keyword: '',
    timeRange: []
  };
  method:string = 'getList';
  handleView(obj){
    console.log("查看对象:%o",obj)
  };
  handleDel(obj){
    console.log("删除对象:%o",obj)
  };
  getList (pageObj) {
    console.log('查询条件:%o', this.getQueryParams())
    pageObj = pageObj || this.pageObj
    this.$refs.table.pageObj = pageObj || this.pageObj
    this.$refs.table.pageObj.total = 100
    this.tableData = []
    for (let i = 0; i < 10; i++) {
      this.tableData.push({ name: pageObj.page * pageObj.limit + i })
    }
  };
  getQueryParams () {
    let queryParams = { ...this.queryParams, ...this.pageObj }
    if(queryParams.timeRange){
      queryParams['startTime'] = queryParams.timeRange[0]
      queryParams['endTime'] = queryParams.timeRange[1]
    }
    delete queryParams['timeRange']
    delete queryParams['total']
    return queryParams;
  };
  handleSelectionChange(val){
    console.log(val)
  }
}
</script>
