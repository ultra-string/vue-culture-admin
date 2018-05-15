import { loginByUsername } form '@/api/login'

const user = {
	state: {
		token: '',
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
		}
	},
	action: {
		// 用户名登录
	    LoginByUsername({ commit }, userInfo) {
	      const username = userInfo.username.trim()
	      return new Promise((resolve, reject) => {
	        loginByUsername(username, userInfo.password).then(response => {
	          const data = response.data
	          commit('SET_TOKEN', data.token)
	          setToken(response.data.token)
	          resolve()
	        }).catch(error => {
	          reject(error)
	        })
	      })
	    },
	}
}

export default user;