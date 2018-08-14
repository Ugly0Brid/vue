<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="active" @on-select = "cliSelect">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <slot v-for="item in menu_list">
              <MenuItem :name="item.id" :key="item.id">{{item.name}}</MenuItem>
            </slot>
          </div>
        </Menu>
      </Header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </Layout>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      acitve: ''
    }
  },
  computed: mapState({
    menu_list: state => state.resource.menu_list
  }),
  mounted () {
    this.$store.dispatch('menuList')
  },
  methods: {
    cliSelect (id) {
      for (let k of this.$store.state.resource.menu_list) {
        if (id === k.id) { // 用点击的id和全部数据配对
          this.active = k.id
          if (k.node.length !== 0) { // 如果存在子目录，进行传参并操作子目录
            this.$router.push({path: k.node[0].path, query: { id: k.id }})
          } else { // 处理没有子目录的页面
            this.$router.push({path: k.path, query: {id: k.id}})
          }
        }
      }
    }
  }
}
</script>
<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  float:left;
  margin-right: 20px;
  padding-left: 50px;
}
</style>
