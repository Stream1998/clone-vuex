import Vue from 'vue'

class Store {
	constructor(options) {
		// 这么做 state 缺少响应式
		// this.state = options.state || {};

		// 我们知道 Vue 中的 data 是响应式的，因此创建 Vue 的实例，实现 state 的响应式
		this.vm = new Vue({
			data: {
				state: options.state || {},
			}
		});
	}

	// 类似于 Object.defineProperty() 的 get 钩子
	// 将 this.$store.vm.state 转换为 this.$store.state 
	get state() {
		return this.vm.state;
	}
}

function install(Vue) {
	// 将 store 的实例分发给各个组件
	Vue.mixin({
		// 需要在 beforeCreate 生命周期执行
		// 在 created 生命周期时，this.$options 已经初始化完毕。
		beforeCreate(){
			if(this.$options && this.$options.store) { // 根组件
				this.$store = this.$options.store;
			} else { // 子组件 
				// 为什么可以这样获取 $store 呢？ 
				// 这和组件的渲染顺序有关:
				// 父 beforeCreate -> 父 created -> 父 beforeMounted
				//  -> 子 beforeCreate -> 子 created -> 子 beforeMounted -> 子 mounted
				//  -> 父 mounted
				this.$store = this.$parent && this.$parent.$store;
			}
		}
	})
}

const Vuex = {
	Store,
	install,
}
export default Vuex;