import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // vue的插件机制

// Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		// 当前请求数
		request_count: 0
	}
})

export default store
