import request from '../utils/request'

export default {
  loginAuthIn (payload) {
    // return request({'url': '/api/auth/login', 'data': {'username': payload.user, 'password': payload.password}, 'method': 'POST'})
    return request({'url': '/api/auth/login', 'data': {'username': 'TD-12296', 'password': 'Td888888'}, 'method': 'POST'})
  }
}
