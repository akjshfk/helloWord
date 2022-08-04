<template>
	<view>
		<Header :title='title'></Header>
		<view style="height: 100rpx;"></view>
		

		<!-- 内容区 -->
		<view class="chat-content pos-a wh-full" :style="{ 'top': 'calc(44px + ' + statusBarHeight + ')'}">
			<scroll-view class="chat-scroll " v-for="(item,index) in chattingd" :key="index" scroll-y="true"
				:scroll-top="scrollTop" :scroll-into-view="scrollToView" :scroll-with-animation="scrollAnimation">
				<view class="padding">
					<view class="chat-item dflex-c fs-xs">{{item.time}}</view>

					<view class="chat-item dflex-s" v-if="item.type!='1'">
						<image class="use-hover headimg margin-right-sm" :src="item.useImg" @click="toUser(item)">
						</image>
						 <view class="con-ret1"></view>
						<view class="padding-tb-sm padding-lr bg-drak1 border-radius-sm"><text>{{item.mag}}</text></view>
					</view>

					<view class="chat-item dflex-e" v-if="item.type=='1'">
						<view class="padding-tb-sm padding-lr bg-base border-radius-sm"><text>{{item.mag}}</text></view>
						<view class="con-ret2"></view>
						<image class="use-hover headimg margin-left-sm" :src="item.useImg"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view style="height: 210rpx;"></view>

		<!-- 输入栏 -->
		<view class="chat-input pos-f dflex padding-tb-sm padding-left safe-area-inset-bottom w-full bg-drak"
			:style="{ bottom: moreShow ? '29vh' :  emojiShow ? '29vh' : '0'}">
			<view class="use-input dflex-c border-radius-sm padding-lr-sm w-full" @click="search">
				<input type="text" confirm-type="send" confirm-hold="true" auto-height="true" fixed="true"
					cursor-spacing="20" v-model="textMsg" :focus="send_input_focus" @focus="onFocus" @blur="onblur" @confirm="sendText"
					@keyboardheightchange="onKeyboardChange" />
			</view>
            
			<view class="use-hover iconfont iconbiaoqing margin-lr-sm" @click="emojiShow = true;moreShow=false;" ></view>
			
			<view class="use-hover margin-lr-sm" style="width: 46px; color: #09BB07;" v-if="fs" @click="send">发送</view>
			
			<view class="use-hover iconfont icontianjia margin-right-sm" @click="moreShow = true;emojiShow=false;" v-if="!fs"></view>
		</view>
		
		



		<!-- 表情 -->
		<use-popup mode="bottom" v-model="emojiShow">
			<scroll-view :scroll-top="scrollTop" scroll-y="true" style="height: 29vh" >
				<view class="face-area tac padding-sm dflex dflex-wrap-w">
					<text class="expression expression-dianzan"></text>
					<text class="expression expression-bushufu"></text>
					<text class="expression expression-bianbian"></text>
					<text class="expression expression-fankun1"></text>
					<text class="expression expression-feiwen"></text>
					<text class="expression expression-ganmao"></text>
					<text class="expression expression-huaixiao"></text>
					<text class="expression expression-liuhan"></text>
					<text class="expression expression-outu"></text>
					<text class="expression expression-keshui"></text>
					<text class="expression expression-renzhe"></text>
					<text class="expression expression-santiaoxian"></text>
					<text class="expression expression-guaiwu"></text>
					<text class="expression expression-shoushang"></text>
					<text class="expression expression-tianshi"></text>
					<text class="expression expression-shuai"></text>
					<text class="expression expression-xianwen"></text>
					<text class="expression expression-xiaodiaodaya"></text>
					<text class="expression expression-xiong"></text>
					<text class="expression expression-yiwen"></text>
					<text class="expression expression-yun"></text>
					<text class="expression expression-liubixie"></text>
					<text class="expression expression-shimo"></text>
					<text class="expression expression-ku"></text>
					<text class="expression expression-shengqi"></text>
					<text class="expression expression-yousiliao"></text>
					<text class="expression expression-en"></text>
					<text class="expression expression-a"></text>
					<text class="expression expression-bizui"></text>
					<text class="expression expression-baiyan"></text>
					<text class="expression expression-aixin"></text>
					<text class="expression expression-dajing"></text>
					<text class="expression expression-ziya"></text>
					<text class="expression expression-daxiao"></text>
					<text class="expression expression-esi"></text>
					<text class="expression expression-fadai"></text>
					<text class="expression expression-fankun"></text>
					<text class="expression expression-ganga"></text>
					<text class="expression expression-fennu"></text>
					<text class="expression expression-hanyan"></text>
					<text class="expression expression-jingkong"></text>
					<text class="expression expression-haochi"></text>
					<text class="expression expression-emo"></text>
					<text class="expression expression-jingsong"></text>
					<text class="expression expression-jingya"></text>
					<text class="expression expression-kaixin"></text>
					<text class="expression expression-lengku"></text>
					<text class="expression expression-danao"></text>
					<text class="expression expression-liukoushui"></text>
					<text class="expression expression-liulei"></text>
					<text class="expression expression-mengbi"></text>
					<text class="expression expression-mianwubiaoqing"></text>
					<text class="expression expression-nanguo"></text>
					<text class="expression expression-shuizhuo"></text>
					<text class="expression expression-taoyan"></text>
					<text class="expression expression-tanchi"></text>
					<text class="expression expression-siliao"></text>
					<text class="expression expression-tiaopi"></text>
					<text class="expression expression-xiaochulei"></text>
					<text class="expression expression-wuliao"></text>
					<text class="expression expression-xingxingyan"></text>
					<text class="expression expression-xieyan"></text>
					<text class="expression expression-xiasi"></text>
					<text class="expression expression-xiaolian"></text>
				</view>
			</scroll-view>
			<!-- <scroll-view scroll-y="true" style="height: 29vh;">
				
			</scroll-view> -->
		</use-popup>

		<!-- +号更多 -->
		<use-popup mode="bottom" v-model="moreShow">
			<view class="more-area dflex dflex-wrap-w">
				<view class="use-hover more-item dflex-c dflex-flow-c" v-on:click="picture">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont icontupian"></view>
					</view>
					<text>图片</text>
				</view>
				<view class="use-hover more-item dflex-c dflex-flow-c">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont iconyuyin"></view>
					</view>
					<text>语音</text>
				</view>
				<view class="use-hover more-item dflex-c dflex-flow-c">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont iconshipin"></view>
					</view>
					<text>视频</text>
				</view>
				<view class="use-hover more-item dflex-c dflex-flow-c" @click="order">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont icondingdan"></view>
					</view>
					<text>订单</text>
				</view>

				<view class="use-hover more-item dflex-c dflex-flow-c" @click="product">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont iconchanpin"></view>
					</view>
					<text>产品</text>
				</view>
				<view class="use-hover more-item dflex-c dflex-flow-c" @click="payment">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont iconfukuan"></view>
					</view>
					<text>付款</text>
				</view>
				<view class="use-hover more-item dflex-c dflex-flow-c">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont iconqunliao1"></view>
					</view>
					<text>创建群聊</text>
				</view>
				<view class="use-hover more-item dflex-c dflex-flow-c" @click="finish">
					<view class="dflex-c bg-drak border-radius-c">
						<view class="iconfont iconshijian02"></view>
					</view>
					<text>结束服务</text>
				</view>
			</view>
		</use-popup>

		<!-- 操作层 -->
		<use-popup class="oper-area-parent" mode="top" v-model="operShow">
			<view class="oper-area dflex pos-a padding-lr-sm"
				:style="{ top: operOffset.top, right: operOffset.right, left: operOffset.left }">
				<view class="use-hover dflex-c dflex-flow-c" @click="toOper('复制')">
					<view class="iconfont iconfuzhi-01"></view>
					<text>复制</text>
				</view>
				<view class="use-hover dflex-c dflex-flow-c" @click="toOper('转发')">
					<view class="iconfont iconzhuanfa-01"></view>
					<text>转发</text>
				</view>
				<view class="use-hover dflex-c dflex-flow-c" @click="toOper('收藏')">
					<view class="iconfont iconshoucang-01"></view>
					<text>收藏</text>
				</view>
				<view class="use-hover dflex-c dflex-flow-c" @click="toOper('删除')">
					<view class="iconfont iconshanchu-01"></view>
					<text>删除</text>
				</view>
				<view class="use-hover dflex-c dflex-flow-c" @click="toOper('多选')">
					<view class="iconfont iconduoxuan-011"></view>
					<text>多选</text>
				</view>

				<view class="pos-a" :class="[operTriangle]"
					:style="{ top: operTriangleOffset.top, right: operTriangleOffset.right, left: operTriangleOffset.left }">
				</view>
			</view>
		</use-popup>
		
		
	</view>
</template>
<script>
	import expression from '@/components/expression/expression.css'
	import Header from '../components/header.vue'
	export default {
		components:{
			Header
		},
		data() {
			return {
				storageObj:{},
				send_input_focus:'',
				textMsg:'',
				fs:false,
				scrollTop: 0,
				title:'聊天',
				emojiShow: false,
				// +号更多
				moreShow: false,
				// 长按操作
				operShow: false,
				operOffset: {
					top: '0',
					left: '30rpx',
					right: 'initial'
				},
				operTriangleOffset: {
					top: '100%',
					left: '20%',
					right: 'initial'
				},
				operTriangle: 'triangle-down',
				chattingd: [],
				imgs: [
					'https://mall-os-api.use-cloud.com/files/upload/image/20200419/200419103944530621.png',
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1776601493,3966748998&fm=26&gp=0.jpg',
					'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg'
				],

				moreDatas: [],
				// 服务标签
				tagShow: false,
				tagDatas: [],
				scrollTop: 0,
				scrollToView: '',
				scrollAnimation: false,
				statusBarHeight:  '20px'
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad(options) {
			if(uni.getStorageSync('storageObj')){
				this.storageObj=JSON.parse(uni.getStorageSync('storageObj'))
			}
			if(uni.getStorageSync('chattingdList')){
				this.chattingd=uni.getStorageSync('chattingdList')
			}
			if(this.storageObj.Id){
				this.chattingd.forEach(item=>{
					if(item.Id==this.storageObj.Id){
						item.type='1'
					}else{
						item.type='2'
					}
				})
			}
			
			this.statusBarHeight = this.$env.statusBarHeight + 'px';
			console.log(options);


			uni.$on('__on_im_receive_msg', res => {
				console.log('__on_im_receive_msg chat', res);

			});
		},
		onShow(options) {
			let _this = this;

			// this.scrollTop = 9999999;
			this.scrollToView = 'msg99';
		},

		methods: {
			onFocus(e) {
				console.log('onFocus', e);
				this.fs=true

				this.scrollToView = 'msg99';
			},
			onblur(){
				setTimeout(()=>{
					this.fs=false
				}, 100)
			},
			send(){
				if(this.textMsg){
					let obj={
						time: '',
						useImg: this.storageObj.img,
						mag: this.textMsg,
						Id:this.storageObj.Id,
						type:'1'
					}
					this.chattingd.push(obj)
					uni.setStorageSync('chattingdList', this.chattingd)
					this.textMsg='';
				}
			},
			onKeyboardChange(e) {
				console.log('onKeyboardChange', e);
			},

			// 长按聊天内容
			onChatContent(options) {
				console.log('onChatContent', options);
				console.log('onChatContent scrollTop', this.scrollTop);
				let dataset = options.currentTarget.dataset;
				let type = dataset.type;

				let view = uni
					.createSelectorQuery()
					.in(this)
					.selectAll(`#${options.currentTarget.id}, .oper-area-parent >>> .oper-area`);

				view.boundingClientRect(datas => {
					console.log('得到布局位置信息', datas);
					let data = datas[0];
					console.log('节点离页面顶部的距离为' + data.top);

					// 判断呈现位置 （上|下）
					if (data.top < 145) {
						// 下
						this.operOffset.top = data.top + data.height + 10 + 'px';
						this.operTriangle = 'triangle-up';
						this.operTriangleOffset.top = '-10px';
					} else {
						// 上
						this.operOffset.top = data.top - 85 + 'px';
						this.operTriangle = 'triangle-down';
						this.operTriangleOffset.top = '100%';
					}

					this.operShow = true;
				}).exec();

				if (type == '1') {
					this.operOffset.left = '30rpx';
					this.operOffset.right = 'initial';

					this.operTriangleOffset.left = '20%';
					this.operTriangleOffset.right = 'initial';
				} else if (type == '2') {
					this.operOffset.left = 'initial';
					this.operOffset.right = '30rpx';

					this.operTriangleOffset.left = 'initial';
					this.operTriangleOffset.right = '20%';
				}
			},

			tomore() {},

			toback() {
				uni.navigateBack();
			},

			toUser(res) {
				console.log(res);
				uni.navigateTo({
					url: `/pages/chat/user?data=${res}`
				});
			},

			toOper(form) {
				uni.$emit('__on_im_send_msg', '发送数据 msg: ' + form);

				this.operShow = false;
			},
			// 发送图片
			picture() {
				console.log(111111)
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			// 查看图片
			checkPicture(res, cur) {
				console.log('我被点击了 啊~~~~~~~~' + cur);
				// 预览图片
				uni.previewImage({
					urls: this.imgs,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					},
					success: res => {
						console.log(res);
					}
				});
			},
			// 我的订单
			order() {
				uni.navigateTo({
					url: `/pages/chat/order`
				});
			},
			// 结束服务
			finish() {
				let _this = this
				uni.showModal({
					title: '提示',
					content: '确定结束服务吗？',
					confirmText: '结束',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.navigateTo({
								url: '/pages/chat/home'
							});
							_this.$api.msg('结束服务')
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 产品
			product() {
				uni.navigateTo({
					url: '/pages/chat/product'
				});
			},
			// 付款
			payment() {
				uni.navigateTo({
					url: '/pages/chat/payment'
				});

			}
		}
	};
</script>

<style lang="scss">
	page{background-color: #EDEDED;}
	.con-ret1{
		border: 7px solid transparent;
		border-bottom-color:#FFFFFF; 
		transform: rotate(-90deg);
		position: relative;
		top: 30rpx;
		left: 1px;
	}
	.con-ret2{
		border: 7px solid transparent;
		border-bottom-color:#09BB07; 
		transform: rotate(90deg);
		position: relative;
		top: -30rpx;
		left: -1px;
	}
	.chat-content {
		bottom: 110rpx;
	}

	.expression {
		font-size: 56rpx;
		width: 12.5%;
	}

	.chat-scroll {
		.chat-item {
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.headimg {
				width: 88rpx;
				height: 88rpx;
				border-radius: 50%;
			}

			.chat-item-max {
				max-width: 66vw;
			}

			text {}
		}
	}

	.chat-input {
		z-index: 10090;
		bottom: 0;
		height: 100rpx;

		.iconfont {
			font-size: 58rpx;
		}
	}

	.chat-item text,
	.use-input input {
		font-size: 30rpx;
		/* font-weight: 550; */
	}

	.use-input {
		height: 76rpx;
		line-height: 76rpx;
		background-color: #fff;

		input {
			width: 100%;
			height: 76rpx;
			line-height: 76rpx;
		}

		text {
			color: #c0c0c0;
		}

		.iconfont {
			font-size: 44rpx;
			color: #c0c0c0;
		}
	}
	.face-area, .more-area {
		height: 29vh;
	}
	.more-area {
		padding: 2vw;

		.border-radius-c {
			width: 100rpx;
			height: 100rpx;
		}

		.iconfont {
			font-size: 54rpx;
		}

		text {
			margin-top: 6rpx;
			font-size: 26rpx;
		}

		.more-item {
			width: 24vw;
		}
	}

	.oper-area {
		border-radius: 10rpx;
		background: #fff;

		.use-hover {
			padding: 20rpx 30rpx;
		}
		
		.iconfont {
			font-size: 40rpx;
			line-height: 1;
		}
		
		text {
			margin-top: 6rpx;
			font-size: 24rpx;
		}

		.triangle-up,
		.triangle-down {
			width: 20px;
			height: 10px;

			&:after {
				top: 0;
				right: 0;
			}
		}
	}
</style>
