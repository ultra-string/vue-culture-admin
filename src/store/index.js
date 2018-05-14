import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex);

const store = new Vuex.store({
	module: {
		user
	},
	getters
})

export default store;