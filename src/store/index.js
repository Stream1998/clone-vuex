import Vue from 'vue'
import Vuex from '@/plugins/vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		num: 0,
	},
	getters: {},
	mutations: {},
	actions: {},
});

export default store;