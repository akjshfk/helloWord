<template>
	<view>
		<Head :headMsg='headMsg'></Head>
		
		<view class="uni-flex uni-row ali-c conent bgwhite" v-for="(item, index) in list" :key='index' @click="chat">
			<image :src="item.img" class="imageStyle"></image>
			<view class="conentLeft" style="-webkit-flex: 1;flex: 1;">
				<view class="jus-b mb20" >
					<view>{{item.name}}</view>
					<view>17:04</view>
				</view>
				<view class="oneline bottonFont">司法局卡萨开发上课开始减肥金卡是客服</view>
			</view>
		</view>
	
		<Footer :componentName="componentName"></Footer>
	</view>
</template>
<script>
	import Footer from '../components/footer.vue'
	import Head from '../components/head.vue'
	export default {
		components:{
			Footer,Head
		},
		data() {
			return {
				headMsg:'6',
				componentName:'index',
				list:[]
				
			}
		},
		onLoad() {
			// this.gets()
			// let obj={
			// 	"name":"幕南栀",
			// 	"wxName":"munanzhi",
			// 	"Id":"1",
			// 	"img":"../../static/images/headimg/face_2.jpg"
			// }
			// this.$store.commit('setUserInfoList', obj)
			// this.$store.commit('setIstrue', true)
			// console.log(this.$store.state.userInfoList, this.$store.state.istrue)
		},
		onShow() {
			let obj={}
			if(uni.getStorageSync('storageObj')){
				obj=JSON.parse(uni.getStorageSync('storageObj'))
			}
			let userInfoList=this.$store.state.userInfoList
			this.list=[];
			if(obj.Id){
				userInfoList.forEach(v=>{
					if(v.Id != obj.Id){
						this.list.push(v)
					}
				})
			}else{
				this.list=userInfoList
			}
		},
		methods: {
			chat(){
				let obj={}
				if(uni.getStorageSync('storageObj')){
					obj=JSON.parse(uni.getStorageSync('storageObj'))
				}
				uni.navigateTo({
					url:'/pages/index/chatRoom'
				})
				// if(obj.Id){
				// 	uni.navigateTo({
				// 		url:'/pages/index/chatRoom'
				// 	})
				// }else{
				// 	uni.showModal({
				// 		title:'请先登录',
				// 		success: (res)=> {
				// 			if(res.confirm){
				// 				uni.navigateTo({
				// 					url:'/pages/my/set'
				// 				})
				// 			}
				// 		}
				// 	})
				// }
				
			}
		}
	}
</script>

<style lang="scss" scoped >
	page{
		background-color: #EDEDED;
	}
	.conent{
		height: 140rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		.conentLeft{
			border-bottom: 0.5rpx solid #DCDFE6;
			padding: 20rpx 0;
			height: 150rpx;
			box-sizing: border-box;
		}
	}
	.imageStyle{
		width: 100rpx;
		height: 100rpx;
		margin-right: 20rpx;
		border-radius: 10rpx;
	}
	.bottonFont{
		font-size: 24rpx;
	}
</style>
