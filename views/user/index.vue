<template>
  <div class="manage">
    <el-dialog
        :title="operateType === 'add' ? '新增' : '更新'"
        :visible.sync="isShow"
    >
      <common-form
          :form-label="operateFormLabel"
          :form="operateForm"
          :inline="true"
          ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <common-form
          :form-label="formLabel"
          :form="searchForm"
          :inline="true"
          ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </common-form>
    </div>

    <common-table
        :table-data="tableData"
        :table-label="tableLabel"
        :config="config"
        @changePage="getList()"
        @edit="editUser"
        @del="delUser"
    ></common-table>

  </div>
</template>

<script>
import CommonForm from '../../src/components/CommonForm'
import CommonTable from "../../src/components/CommonTable"
import {getUser} from "../../api/data"

export default {
  name: 'User',
  data() {
    return {
      operateType: 'add',
      isShow: false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: ''
      },
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'age',
          label: '年龄',
        },
        {
          prop: 'sexLabel',
          label: '性别',
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    }
  },
  components: {
    CommonForm,
    CommonTable,
  },
  methods: {
    confirm() {
      if (this.operateType === 'edit') {
        this.$http.post('/user/edit', this.operateForm).then(res => {
          console.log(res)
          this.isShow = false
          this.getList()
        })
      } else {
        this.$http.post('/user/add', this.operateForm).then(res => {
          console.log(res)
          this.isShow = false
          this.getList()
        })
      }
    },
    addUser() {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      }
    },
    getList(name = '') {
      this.config.loading = true
      name ? (this.config.page = 1) : ''
      getUser({
        page: this.config.page,
        name
      }).then(({data: res}) => {
        this.tableData = res.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.count
        this.config.loading = true
      })
    },
    editUser(row) {
      this.isShow = true
      this.operateType = 'edit'
      console.log(row)
      this.operateForm = row
    },
    delUser(row) {
      this.$confirm('此操作将永久删除此组件，是否继续？','提示', {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id
        this.$http.post('/user/del',{
          id: id
        }).then(res => {
          console.log(res)
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getList()
        })
      })
    },
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>