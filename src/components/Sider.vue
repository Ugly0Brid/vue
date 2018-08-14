<template>
  <div>
    <Layout>
      <Sider hide-trigger style="background: #ffffff; padding-top: 5px">
        <Menu width="200px" theme="light" @on-select = "cliSelect" active-name="actived" >
          <slot v-for="item in siderMenu">
            <MenuItem :name="item.id" :key="item.id">{{item.name}}</MenuItem>
          </slot>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 20px 20px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '20px', minHeight: '790px', background: '#fff'}">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      siderMenu: [],
      actived: ''
    }
  },
  watch: {
    // 监听路由id的变化,及时更新左侧导航
    '$route.query.id': {
      handler () {
        let id = this.$route.query.id
        for (let item of this.$store.state.resource.menu_list) {
          if (item.id === id) {
            this.siderMenu = item.node
            this.actived = (item.node.length !== 0) ? item.node[0].id : item.id
          }
        }
      }
    }
  },
  methods: {
    cliSelect (id) {
      for (let k of this.siderMenu) {
        if (id === k.id) { // 用点击的id和全部数据配对
          this.$router.push({path: k.path, query: { id: k.id }})
        }
      }
    }
  }
}
</script>
