<template>
	<view class="pd40">
		<Header :title="title"></Header>
		<view style="height: 80rpx;"></view>
		
		<view class="ali-c main">
			<text>输入金额：</text>
			<input type="number" v-model="money" />
		</view>
		<view style="height: 300rpx;"></view>
		<button size="default" @click="save">保存</button>
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
				title:'编辑',
				money:0,
				type:'',
				obj:{}
			}
		},
		onLoad(ops) {
			if(uni.getStorageSync('storageObj')){
				this.obj=JSON.parse(uni.getStorageSync('storageObj'))
			}
			if(ops.type==1){
				this.money=this.obj.looseChange
			}else{
				this.money=this.obj.ChangeThrough
			}
		},
		methods:{
			save(){
				if(this.type==1){
					this.obj.looseChange=this.money;
					this.$store.commit('setLooseChange', this.money)
					const db=uniCloud.database()
					db.collection("text").where({_id:this.obj.id}).update(this.obj)
				}else{
					this.obj.ChangeThrough=this.money;
					this.$store.commit('setChangeThrough', this.money)
					const db=uniCloud.database()
					db.collection("text").where({_id:this.obj.id}).update(this.obj)
				}
				
				uni.redirectTo({
					url:'/pages/my/wallet'
				})	
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		border-bottom: 1px solid #DDDDDD;
		line-height: 90rpx;
		
		text{
			font-size: 34rpx;
			font-weight: bold;
		}
	}
</style>
