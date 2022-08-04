<script>
	import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update';
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	@import './common/style.css';
	
	
	@import url("/components/iconfont/iconfont.css");
	@import url("/common/common.scss");
</style>
