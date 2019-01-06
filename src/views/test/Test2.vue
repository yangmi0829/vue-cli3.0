<template>
  <div>
    <div>
      <p>@model</p>
      父组件的值:{{checked}}<br/>
      <children v-model="checked"></children>
    </div>
    <div>
      <p>@watch</p>
      <el-input v-model.lazy="userInfo.name"></el-input>
    </div>
    <div>
      <p>@provider @inject</p>
      <el-input v-model="user.name"></el-input>
      <provider-inject>
        <template slot="aaa">
          父组件
        </template>
      </provider-inject>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide } from 'vue-property-decorator'
import Children from './Children.vue'
import ProviderInject from './ProviderInject.vue'

@Component({
  components: {
    Children, ProviderInject
  }
})
export default class Test2 extends Vue {
  checked:boolean = false;
  userInfo = { name: '张三' };
  @Watch('userInfo', { deep: true })
  userInfoChange (val:object):void {
    console.log(`${JSON.stringify(val)}`)
  };
  @Provide('user')
  user:object =
    {
      name: 'test',
      id: 0
    }
}
</script>
