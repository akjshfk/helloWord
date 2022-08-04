<template>
	<view class="">
		<view class="hg90 bgwhite"></view>
		
		<view class="pd40 bgwhite">
			<view class="uni-flex uni-row ali-c conent">
				<image :src="obj.img" class="imageStyle"></image>
				<view class="conentLeft" style="-webkit-flex: 1;flex: 1;">
					<view class="mb20" >
						<view class="font36 blod">{{obj.name}}</view>
					</view>
					<view class="jus-b mb20">
						<view class="font20">微信号：<text>{{obj.wxName}}</text></view>
						<view class="ali-c">
							<image src="../../static/logo.png" style="width: 40rpx;height: 40rpx;"></image>
							<uni-icons type="forward" color="" size="25"  />
						</view>
					</view>
				</view>
			</view>
			<view class="ali-c">
				<view style="width: 150rpx;"></view>
				<view class="ali-c" >
					<uni-tag :inverted="true" :circle="true" text="+ 标签" size="mini" class="mr20" />
					<view class="uniIcon flexc" >...</view>
				</view>
				
			</view>
		</view>
		<view class="hg20"></view>
		<navigator url="/pages/my/serve" open-type="navigate">
			<view class="ali-c bgwhite" style="padding: 26rpx 30rpx;">
				<image src="../../static/logo.png" style="width: 40rpx;height: 36rpx;margin-right: 30rpx;"></image>
				<view class="jus-b ali-c" style="-webkit-flex: 1;flex: 1;">
					<text>服务</text>
					<uni-icons type="forward" color="" size="20"  />
				</view>
			</view>
		</navigator>
		<view class="hg20"></view>
		<view class="ali-c bgwhite" style="padding: 0rpx 30rpx;" v-for="(item, index) in arr" :key='index'>
			<image src="../../static/logo.png" style="width: 40rpx;height: 36rpx;margin-right: 30rpx;"></image>
			<view class="jus-b bbr" style="-webkit-flex: 1;flex: 1;">
				<text>{{item.name}}</text>
				<uni-icons type="forward" color="" size="20"  />
			</view>
		</view>
		<view class="hg20"></view>
		<navigator url="/pages/my/set" open-type="navigate">
			<view class="ali-c bgwhite" style="padding: 26rpx 30rpx;">
				<image src="../../static/logo.png" style="width: 40rpx;height: 36rpx;margin-right: 30rpx;"></image>
				<view class="jus-b ali-c" style="-webkit-flex: 1;flex: 1;">
					<text>设置</text>
					<uni-icons type="forward" color="" size="20"  />
				</view>
			</view>
		</navigator>
		
		<!-- <input type="text" v-model="value" @input="opt" /> -->
		<button @click="save">保存</button>
		
		
		<Footer :componentName="componentName"></Footer>
	</view>
</template>

<script>
	import Footer from '../components/footer.vue'
	import $api from '../../common/config.js'
	export default {
		components:{
			Footer
		},
		data() {
			return {
				value:'',
				valueTime:null,
				obj:{
					name:'',
					wxName:'',
					img:'',
				},
				headMsg:'6',
				componentName:'my',
				arr:[{name:'收藏'},{name:'朋友圈'},{name:'卡包'},{name:'表情'}]
				
			}
		},
		onLoad() {
			console.log(this.$store.state.userInfoList, this.$store.state.istrue)
			var users = [
			  { 'user': 'fred',   'age': 48 },
			  { 'user': 'barney', 'age': 36 },
			  { 'user': 'fred',   'age': 40 },
			  { 'user': 'barney', 'age': 34 }
			];
			let arr=_.sortBy(users, ['user', 'age']);
			let arr1=this.removeDuplicateObj(users)
			console.log(arr, arr1)
			let pty=_.isEmpty(undefined)
			console.log(pty)
			// console.log(this.$api.trim('1   2'))
		},
		onShow() {
			if(uni.getStorageSync('storageObj')){
				let obj=JSON.parse(uni.getStorageSync('storageObj')) 
				this.obj=obj
			}
			
		},
		methods: {
			//数组对象去重
			removeDuplicateObj(arr){
			  let obj = {};
			  arr = arr.reduce((newArr, next) => {
				obj[next.user] ? "" : (obj[next.user] = true && newArr.push(next));
				return newArr;
			  }, []);
			  return arr;
			},
			save(){
				this.throttle()
			},
			opt(){
				clearTimeout(this.valueTime)
				this.valueTime=setTimeout(()=>{
					console.log(1111)
				}, 1000)
			},
			throttle(fn) {
			   // console.log('000000')
			       if(this.valueTime) return
				   // console.log(11111)
			       this.valueTime = setTimeout(() => {
					   console.log(2222)
			         // fn.apply(this,arguments)
			         this.valueTime = null
			       }, 5000)
			   
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #EDEDED;
	}
	.conent{
		height: 140rpx;
		box-sizing: border-box;
		.conentLeft{
			padding: 20rpx 0;
			height: 140rpx;
			box-sizing: border-box;
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
		
		
	}
	.uniIcon{
		width: 50rpx;
		height: 46rpx;
		border-radius: 30rpx;
		border: 0.5rpx solid #D8D8D8;
		font-size: 36rpx;
		box-sizing: border-box;
		padding-bottom: 22rpx;
	}
	.bbr{
		height: 100rpx;
		line-height: 90rpx;
		border-bottom: 0.5rpx solid #EDEDED;
	}
	
</style>
