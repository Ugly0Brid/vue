import resourceApi from '../../api/resourceApi'

const resource = {
  state: {
    'item_list': [],
    'menu_list': []
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    rscList (context, payload) {
      resourceApi.resourceList().then(data => {
        if (data.code === 0) {
          context.commit('updateState', data.data)
        } else {
          context.commit('updateState', [])
        }
      })
    },
    menuList (context, payload) {
      resourceApi.menuList().then(data => {
        if (data.code === 0) {
          context.commit('updateMenu', data.data)
        } else {
          context.commit('updateMenu', [])
        }
      })
    }
  },
  mutations: {
    increment (state) {
      state.msg = 'bbbb'
    },
    updateState (state, payload) {
      state.item_list = payload
    },
    updateMenu (state, payload) {
      state.menu_list = payload
    }
  }
}
export default resource
