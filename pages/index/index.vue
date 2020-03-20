<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @tap="show = true"></image>
		<zhilin-picker
			v-model="show"
			:title="title"
			:data="data"
			:initSelected="initSelected"
			@change="onChange"
			@confirm="onConfirm"
		/>
	</view>
</template>

<script>
	// import zhilinPicker from "@/components/zhilin-picker/zhilin-picker.vue"
	import zhilinPicker from "@/dist"
	export default {
		components:{zhilinPicker},
		data() {
			return {
				show: false,
				title: '选择福利',
				data: ['五险', '加班补助', '出国旅行', '生日福利', '年终分红', '带薪年假', '节日福利', '包吃', '包住', '聚餐经费', '交通补贴'],
				initSelected: ['生日福利'],
			}
		},
		mounted(){
			console.log(zhilinPicker)
		},
		methods:{
			onChange(val){
				console.log(val)
			},
			onConfirm(val){
				console.log(val)
			},
			onSearchInput(val){
				setTimeout(()=>{
					this.data = ['出国旅行', '生日福利']
				},2000)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
</style>
