import loginAuth from '../../api/loginAuth'

const login = {
  state: {
    msg: 'aaaaa',
    user: '',
    password: '',
    loginAuth: false
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    loginAuth (context, payload) {
      loginAuth.loginAuthIn(payload.params).then(data => {
        if (data.code === 0) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('username', data.username)
          location.href = 'index'
        } else {
          location.href = '/'
        }
      })
    }
  },
  mutations: {
    increment (state) {
      state.msg = 'bbbb'
    },
    loginAuth (state, payload) {
      state.loginAuth = payload
    }
  }
}
export default login
