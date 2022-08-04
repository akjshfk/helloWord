import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		userInfoList:[],
		looseChange:uni.getStorageSync('SET_LOOSECHANGE'),//零钱
		ChangeThrough:uni.getStorageSync('SET_CHANGETHROUGH'),//零钱通
	},
	getters:{
		userInfoList:state=>state.userInfoList
	},
	mutations:{
		setUserInfoList(state, userInfoList){
			state.userInfoList=userInfoList
		},
		//零钱
		setLooseChange(state, looseChange){
			state.looseChange=looseChange
			uni.setStorageSync("SET_LOOSECHANGE", looseChange)
		},
		//零钱通
		setChangeThrough(state, ChangeThrough){
			state.ChangeThrough=ChangeThrough
			uni.setStorageSync("SET_CHANGETHROUGH", ChangeThrough)
		}
	},
	actions:{
		async login (context){
				await new Promise((resl, rej)=>{
					// const db=uniCloud.database()
					// db.collection("text").get()
					// .then(res=>{
					// 	console.log(res)
					// 	let userInfoList=res.result.data
					// 	context.commit('setUserInfoList', userInfoList)	
					// 	resl(userInfoList)
					// })
					
					
					//请求接口
					uni.request({
						url:'/static/text.json',
						method:'GET',
						success: (res) => {
							console.log(res)
							let userInfoList=res.data
							context.commit('setUserInfoList', userInfoList)	
							resl(userInfoList)
						}
					})
			})
		}
	}
})

export default store