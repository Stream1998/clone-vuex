import Vue from 'vue'
import Vuex from '@/plugins/vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		num: 10,
	},
	getters: {
		double(state) {
			return state.num * 2;
		}
	},
	mutations: {
		increment(state, num){
			state.num += num;
		}
	},
	actions: {},
});

export default store;