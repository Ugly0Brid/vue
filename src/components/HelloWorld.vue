<template>
  <Table stripe :columns="columns" :data= item_list ></Table>
</template>
<script>
import { mapState } from 'vuex'
export default {
  watch: {
    '$route.query.id': {
      handler () {
        this.getColumns()
      }
    }
  },

  data () {
    return this.getColumns()
  },
  computed: mapState({
    item_list: state => state.resource.item_list
  }),
  methods: {
    getColumns () {
      console.log(location.pathname)
      if (location.pathname === '/index') {
        return {
          columns: [
            {title: '名称', key: 'name'},
            {title: '类型', key: 'data_center_name'},
            {title: '带宽', key: 'bind_width'},
            {title: '地址', key: 'address'},
            {title: '联系人', key: 'link_name'},
            {title: '联系电话', key: 'contact_phone'}
          ]
        }
      } else if (location.pathname === '/data_center') {
        return {
          columns: [
            {title: '名称', key: 'name'},
            {title: '类型', key: 'data_center_name'},
            {title: '带宽', key: 'bind_width'},
            {title: '地址', key: 'address'},
            {title: '联系人', key: 'link_name'},
            {title: '联系电话', key: 'contact_phone'}
          ]
        }
      } else if (location.pathname === '/cabinet') {
        return {
          columns: [
            {title: '名称', key: 'name'},
            {title: '类型', key: 'data_center_name'},
            {title: '带宽', key: 'bind_width'},
            {title: '地址', key: 'address'}
          ]
        }
      }
    }
  },
  mounted () {
    this.$store.dispatch('rscList')
  }
}
</script>
