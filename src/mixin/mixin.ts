import { Vue, Component } from 'vue-property-decorator'

class Page {
  page:number = 1;
  limit:number = 10;
  total:number = 0;
  constructor (page:number = 1, limit:number = 10, total:number = 0) {
    this.page = page
    this.limit = limit
    this.total = total
  }
}
/**
 * mixins
 */
@Component
export default class PageMixin extends Vue {
  pageObj: Page = new Page();
  queryParams:Object ={};
  tableData: Array<object> = [
    {
      "id": "2222",
      "status": "active",
      'name': '李四',
      'age': '28',
      "description": "",
      "createBy": "1",
      "createTime": "2018-10-14 15:47",
      "updateBy": "2222",
      "updateTime": "2018-12-11 15:05",
      "loginName": "ym",
      "phone": "1527970718132",
      "password": "J9KCqr5x1fqnWURhNwxFng==",
      "acorpId": "2",
      "departmentId": "2362675317703394951",
      "nickName": "zzzz",
      "authId": null,
      "nameStatus": null,
      "lastPasswordUpdated": 1543988179814,
      "avatar": "/image/account/account/20181014/1uqC4qhGdMrgpw3Q.jpeg",
      "type": "employee",
      "acorpName": "深圳智派实业有限公司",
      "departmentName": "信息部"
    },
    {
      "id": "22222",
      "status": "active",
      'name': '张三',
      'age': '28',
      "description": "",
      "createBy": "1",
      "createTime": "2018-10-14 15:47",
      "updateBy": "2222",
      "updateTime": "2018-12-11 15:05",
      "loginName": "ym",
      "phone": "1527970718132",
      "password": "J9KCqr5x1fqnWURhNwxFng==",
      "acorpId": "2",
      "departmentId": "2362675317703394951",
      "nickName": "zzzz",
      "authId": null,
      "nameStatus": null,
      "lastPasswordUpdated": 1543988179814,
      "avatar": "/image/account/account/20181014/1uqC4qhGdMrgpw3Q.jpeg",
      "type": "employee",
      "acorpName": "深圳智派实业有限公司",
      "departmentName": "信息部"
    },
    {
      "id": "222226",
      "status": "active",
      'name': '王五',
      'age': '28',
      "description": "",
      "createBy": "1",
      "createTime": "2018-10-14 15:47",
      "updateBy": "2222",
      "updateTime": "2018-12-11 15:05",
      "loginName": "ym",
      "phone": "1527970718132",
      "password": "J9KCqr5x1fqnWURhNwxFng==",
      "acorpId": "2",
      "departmentId": "2362675317703394951",
      "nickName": "zzzz",
      "authId": null,
      "nameStatus": null,
      "lastPasswordUpdated": 1543988179814,
      "avatar": "/image/account/account/20181014/1uqC4qhGdMrgpw3Q.jpeg",
      "type": "employee",
      "acorpName": "深圳智派实业有限公司",
      "departmentName": "信息部"
    },
    ];
  // 查询按钮
  search () {
    this.pageObj.page = 1
    this.useMethod()
  };
  // 分页长度改变
  handleSizeChange (val:number) {
    this.pageObj.limit = val
    this.useMethod()
  };
  // 分页页码改变
  handleCurrentChange (val:number) {
    this.pageObj.page = val
    this.useMethod()
  };
  getQueryParams () {
    console.log('混入的getQueryParams:%o',{ ...this.queryParams, ...this.pageObj })
    let queryParams = { ...this.queryParams, ...this.pageObj }
    delete queryParams['total']
    return queryParams
  }
  useMethod () {
    // @ts-ignore
    this[this.method]()
  };
}
