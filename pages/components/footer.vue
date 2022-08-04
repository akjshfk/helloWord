<template>
	<view class="main">
		<view class="uni-flex uni-row">
			<view class="tex" @click="wxRow('1')">
				<uni-icons type="chatbubble-filled" color="#09BB07" size="25" v-if='componentName=="index"' />
				<uni-icons type="chatbubble" color="" size="25" v-else />
				<view :class="componentName=='index'?'color1':''">微信</view>
			</view>
			<view class="tex" @click="wxRow('2')">
				<uni-icons type="staff-filled" color="#09BB07" size="25" v-if='componentName=="addressBook"' />
				<uni-icons type="staff" color="" size="25" v-else />
				<view :class="componentName=='addressBook'?'color1':''" >通讯录</view>
			</view>
			<view class="tex" @click="wxRow('3')">
				<uni-icons type="paperplane-filled" color="#09BB07" size="25" v-if='componentName=="find"' />
				<uni-icons type="paperplane" color="" size="25" v-else />
				<view :class="componentName=='find'?'color1':''" >发现</view>
			</view>
			<view class="tex" @click="wxRow('4')">
				<uni-icons type="person-filled" color="#09BB07" size="25" v-if='componentName=="my"' />
				<uni-icons type="person" color="" size="25" v-else />
				<view :class="componentName=='my'?'color1':''" >我</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		name:'Footer',
		props:['componentName'],
		data() {
			return {
			}
		},
		methods:{
			wxRow(ons){
				switch(ons){
					case '1':uni.navigateTo({
								url:'/pages/index/index'
							})
					break
					case '2':uni.navigateTo({
								url:'/pages/index/index'
							})
					break
					case '3':uni.navigateTo({
								url:'/pages/index/index'
							})
					break
					case '4':uni.navigateTo({
								url:'/pages/my/index'
							})
					break
				}
			}
		}
	}
</script>

<style lang="scss">
	.main{
		width: 100%;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		padding: 14rpx 0;
		box-sizing: border-box;
		background: #DDDDDD;
		.tex{
			-webkit-flex: 1;flex: 1;
			text-align: center;
			view{
				font-size: 18rpx;
			}
			.color1{
				color:#09BB07
			}
		}
		
	}
</style>
