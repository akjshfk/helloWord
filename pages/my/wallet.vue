<template>
	<view class="">
		<Header :title="title"></Header>
		<view style="height: 80rpx;"></view>
		<view class="ali-c bgwhite" style="padding: 0rpx 30rpx;" v-for="(item, index) in arr" :key='index' v-if="item.name" @click="moneyClick(item)">
			<image src="../../static/logo.png" style="width: 40rpx;height: 36rpx;margin-right: 30rpx;"></image>
			<view class="jus-b bbr" style="-webkit-flex: 1;flex: 1;">
				<view>
					<text class="font24 mr20">{{item.name}}</text>
					<text class="yieldCss font20" v-if="item.yield">收益率{{item.yield}}%</text>
					<uni-tag :circle="true" text="New" type="error" class="font20" v-if="item.num" />
				</view>
				<view>
					<text class="font20" v-if="item.money">{{item.money}}</text>
					<uni-icons type="forward" color="" size="20"  />
				</view>
			</view>
		</view>
		<view class="hg20" v-else></view>
	</view>
</template>

<script>
	import Header from '../components/header.vue'
	export default {
		components:{
			Header
		},
		data(){
			return{
				title:'钱包',
				arr:[{name:'零钱', money:'￥100', type:'1'},{name:'零钱通', yield:'1.7', money:'￥10.02', type:'2'},{name:'银行卡'},{name:''},{name:'支付分', num:'1'},{name:'亲属卡'},{name:''},{name:'身份信息'},{name:'安全保障'},{name:'支付设置'}]
			}
		},
		// computed:{
		// 	this.$store.state.looseChange(){
		// 		this.arr[0].money=this.$store.state.looseChange
		// 	}
		// 	this.$store.state.ChangeThrough(){
		// 		this.arr[0].money=this.$store.state.ChangeThrough
		// 	}
			
		// },
		onShow() {
			console.log([...'wanqing'])
			console.log(this.$store.state.looseChange)
			if(uni.getStorageSync('storageObj')){
				let obj=JSON.parse(uni.getStorageSync('storageObj')) 
				console.log(obj)
				
				const db=uniCloud.database()
				db.collection("text").where({_id: obj.id}).get()
				.then(res=>{
					let obj=res.result.data[0]
					this.arr[0].money=obj.looseChange
					this.arr[1].money=obj.ChangeThrough
				})
			}
			
		},
		
		methods:{
			moneyClick(items){
				console.log(111)
				if(items.type){
					uni.redirectTo({
						url:'/pages/my/edit?type='+items.type
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped >
	page{
		background-color: #EDEDED;
		.bbr{
			height: 100rpx;
			line-height: 90rpx;
			border-bottom: 0.5rpx solid #EDEDED;
		}
		.yieldCss{
			padding: 5rpx 10rpx;
			background-color: #F0AD4E;
			color: #FFB400;
			font-size: 18rpx;
			border-radius: 5rpx;
		}
		.uni-tag[data-v-1516016e]{
			padding: 1px 7px;
		}
	}
</style>
