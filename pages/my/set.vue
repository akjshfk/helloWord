<template>
	<view>
		<Header :title="title"></Header>
		<view style="height: 80rpx;"></view>
		<view class="pd40">
			<radio-group @change="radioChange">
				<view class="jus-b ali-c mb20" v-for="(item, index) in list" :key='index'>
					<view class="ali-c">
						<image :src="item.img" style="width: 120rpx;height: 120rpx;border-radius: 50%;margin-right: 20rpx;"></image>
						<text>{{item.name}}</text>
					</view>
					<radio :value="item.Id" :checked="index === current" />
				</view>
			</radio-group>
			
			<view class="bott flexc">
				<button type="primary" @click="save">保存</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Header from '../components/header.vue';
	import {mapGetters} from 'vuex';
	export default{
		components:{Header},
		data(){
			return{
				title:'设置',
				list:[],
				current:0
			}
		},
		computed:{
			...mapGetters(['userInfoList'])
		},
		onLoad() {
			console.log(_.compact([0, 1, false, 2, '', 3]))
			// console.log(this.$store.state.userInfoList)
			let storageObj=uni.getStorageSync('storageObj')
			if(storageObj){
				var obj=JSON.parse(storageObj)
			}
			let userInfoList=this.$store.state.userInfoList
			this.list=userInfoList
			if(obj.name){
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i].name === obj.name) {
						this.current = i;
						break;
					}
				}
			}
		},
		methods:{
			save(){
				let obj=JSON.stringify(this.list[this.current]) 
				uni.setStorageSync('storageObj', obj);	
				uni.navigateBack({
					delta:1
				})
			},
			radioChange(evt){
				for (let i = 0; i < this.list.length; i++) {
					if (this.list[i].Id === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style>
	.bott{
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 200rpx;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 8px 0px #DDDDDD;
		padding: 0 40px;
	}
	.bott button{
		width: 100%;
	}
</style>
