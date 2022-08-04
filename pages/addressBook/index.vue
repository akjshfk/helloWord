<template>
	<view class="">
		<Footer :componentName="componentName"></Footer>
	</view>
</template>

<script>
	import Footer from '../components/footer.vue'
	export default {
		components:{
			Footer
		},
		data() {
			return {
				componentName:'addressBook'
			}
		}
	}
</script>

<style>
</style>
