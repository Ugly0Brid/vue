import request from '../utils/request'

export default {
  resourceList (payload) {
    return request({'url': '/api/rsc/list/datacenter/', 'method': 'GET'})
  },
  menuList () {
    return request({'url': '/api/auth/menu?name=JT-7022', 'method': 'GET'})
  }
}
