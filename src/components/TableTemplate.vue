<template>
  <el-table
    @selection-change="handleSelectionChange"
    :data="tableData"
    border
    stripe
    style="width: 100%">
    <template v-for="(i,$index) in header">
      <table-column :i="i" :$index="$index" :key="`${$index}col`">
        <template v-if="i.slot">
          <slot :name="i.slot" :scope="i"></slot>
        </template>
     </table-column>
      <!--复选框-->
      <!--<el-table-column v-if="i.type == 'selection'" type="selection" :key="`${$index}col`" label="" width="55"> </el-table-column>
      &lt;!&ndash;序号&ndash;&gt;
      <el-table-column v-else-if="i.type == 'index'" type="index" :key="`${$index}col`" label="序号"> </el-table-column>
      &lt;!&ndash;展开行&ndash;&gt;
      <el-table-column v-else-if="i.type == 'expand'" type="expand" :key="`${$index}col`">
        <template slot-scope="scope">
          <slot :name="i.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
      <el-table-column v-else :prop="i.prop" :label="i.label"  :width="i.width" :min-width="i.minWidth"  :key="$index" :fixed="i.fixed">
        <template v-if="!i.children" slot-scope="scope">
          &lt;!&ndash;默认显示文本&ndash;&gt;
          <template  v-if="!i.slot">{{scope.row[i.prop]}}</template>
          &lt;!&ndash;显示自定义内容&ndash;&gt;
          <slot  v-else :name="i.slot" :scope="scope"></slot>
        </template>
        &lt;!&ndash;如果是复杂表头&ndash;&gt;
        <template v-if="i.children" v-for="(children,$childrenIndex) in i.children">
          <el-table-column :prop="children.prop" :label="children.label" :key="$childrenIndex" :width="children.width" :min-width="children.minWidth" :fixed="children.fixed">
          </el-table-column>
        </template>
      </el-table-column>-->
    </template>
  </el-table>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import TableColumn from './TableColumn.vue'

@Component({
  components: { TableColumn }
})
export default class TableTemplate extends Vue {
  @Prop() header;
  @Prop() tableData;
  handleSelectionChange (val) {
    this.$emit('selectionChange', val)
  }
}
</script>
