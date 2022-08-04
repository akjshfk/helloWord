<template>
	<view class="">
		<Header :title='title'></Header>
		<view style="height: 80rpx;"></view>
		<view class="main pd20">
			<view class="ali-c active mb20">
				<view class="flex wd100">
					<view class="payLeft ali-c jus-c">
						<view class="tc">
							<image src="../../static/logo.png" style="width: 70rpx;height: 65rpx;"></image>
							<view class="font20 white">收付款</view>
						</view>
					</view>
					<navigator url="/pages/my/wallet" open-type="navigate" class="payLeft flexc">
						<view class="tc">
							<image src="../../static/logo.png" style="width: 70rpx;height: 65rpx;"></image>
							<view class="font20 white">钱包</view>
							<view class="font20 white">￥{{qianbao}}</view>
						</view>
					</navigator>
				</view>
			</view>
			<view class="section wd100 bgwhite mb20" v-for="(item, index) in arr" :key='index'>
				<view class="font20 mb60">{{item.title}}</view>
				<view class="ali-c flex-wrap" >
					<view class="tc sectionMain mb20" v-for="(val, i) in item.list" :key='i'>
						<image src="../../static/logo.png" style="width: 60rpx;height: 50rpx;" class="mb20"></image>
						<view class="font20">{{val.name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '../components/header.vue'
	export default{
		components:{
			Header
		},
		data(){
			return{
				title:'服务',
				isqianbao:true,
				qianbao:'123',
				arr:[
					{title:'金融理财', list:[{name:'信用卡还款'},{name:'微粒贷借钱'},{name:'理财通'},{name:'保险服务'}]},
					{title:'生活服务', list:[{name:'手机充值'},{name:'生活缴费'},{name:'Q币充值'},{name:'城市服务'},{name:'腾讯公益'},{name:'医疗健康'},{name:'防疫健康码'}]},
					{title:'交通出行', list:[{name:'出行服务'},{name:'火车票机票'},{name:'酒店'}]},
					{title:'购物消费', list:[{name:'腾讯汇聚'},{name:'京东购物'},{name:'美团外卖'},{name:'电影演出赛事'},{name:'美团团购'},{name:'拼多多'},{name:'唯品会特卖'},{name:'转转二手'},{name:'贝壳找房'}]},
				]
			}
		},
		onShow() {
			if(uni.getStorageSync('storageObj')){
				let obj=JSON.parse(uni.getStorageSync('storageObj')) 
				console.log(obj)
				
				const db=uniCloud.database()
				db.collection("text").where({_id: obj.id}).get()
				.then(res=>{
					let obj=res.result.data[0]
					this.qianbao=Number(obj.looseChange)+Number(obj.ChangeThrough)
				})
			}
		},
		methods:{

		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #EDEDED;
		.main{margin-top: 10rpx;}
		.active{
			width: 100%;
			height: 250rpx;
			background-color: #09BB07;
			border-radius: 20rpx;
		}
		.payLeft{
			width: 50%;
			height: 100%;
		}
		.section{
			padding: 30rpx 30rpx 40rpx 30rpx;
			border-radius: 20rpx;
			box-sizing: border-box;
		}
		.sectionMain{
			width: 25%;
		}
	}
	
</style>
