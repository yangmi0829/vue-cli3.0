import * as tslib_1 from "tslib";
import { Vue, Component } from 'vue-property-decorator';
class Page {
    constructor(page = 1, limit = 10, total = 0) {
        this.page = 1;
        this.limit = 10;
        this.total = 0;
        this.page = page;
        this.limit = limit;
        this.total = total;
    }
}
/**
 * mixins
 */
let PageMixin = class PageMixin extends Vue {
    /**
     * mixins
     */
    constructor() {
        super(...arguments);
        this.pageObj = new Page();
        this.queryParams = {};
        this.tableData = [
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
    }
    // 查询按钮
    search() {
        this.pageObj.page = 1;
        this.useMethod();
    }
    ;
    // 分页长度改变
    handleSizeChange(val) {
        this.pageObj.limit = val;
        this.useMethod();
    }
    ;
    // 分页页码改变
    handleCurrentChange(val) {
        this.pageObj.page = val;
        this.useMethod();
    }
    ;
    getQueryParams() {
        console.log('混入的getQueryParams:%o', { ...this.queryParams, ...this.pageObj });
        let queryParams = { ...this.queryParams, ...this.pageObj };
        delete queryParams['total'];
        return queryParams;
    }
    useMethod() {
        // @ts-ignore
        this[this.method]();
    }
    ;
};
PageMixin = tslib_1.__decorate([
    Component
], PageMixin);
export default PageMixin;
//# sourceMappingURL=mixin.js.map