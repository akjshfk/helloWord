<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar shadow left-icon="left" leftText="返回" right-icon="more-filled" :title="title" @clickLeft="back" @clickRight="set"  />
		</view>
	</view>
</template>

<script>
	export default {
		name:'Header',
		props:['title'],
		data() {
			return {
				
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				})
			},
			set(){
				uni.showToast({
					title: '右侧按钮'
				})
			}
		},
	}
</script>

<style lang="scss">
	/deep/ .uniui-more-filled[data-v-a2e81f6e]:before {
		font-size: 18px !important;
	}
	/deep/ .uni-navbar--shadow[data-v-6bda1a90] {
	    box-shadow: 0 0px 0px #ccc !important;
	}
	.box-bg /deep/ view{
		background-color: #EDEDED !important; 
	}
	.box-bg{
	    position: fixed;
	    top: 0px;
	    left: 0px;
	    width: 100%;
		z-index: 100;
	}
</style>
