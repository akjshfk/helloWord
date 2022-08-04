<template>
	<view class="uni-flex uni-row jus-b ali-c header">
		<view class=""></view>
		<view class="fonts">微信 ({{headMsg}})</view>
		<view class="pus">
			<view style="margin-left: 60px;">
				<uni-icons type="search" color="" size="22" style="margin-right: 10px;"  />
				<uni-icons type="plus" color="" size="22"  />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'head',
		props:['headMsg'],
		data() {
			return {
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.header{
		height: 90rpx;
		padding: 0 20rpx;
		background-color: #DCDCDC;
		view{width: 33.3%;}
		.pus{
			display: flex !important;
			align-items: flex-end !important;
		}
		.fonts{
			font-size: 32rpx;
			text-align: center;
		}
	}
</style>
