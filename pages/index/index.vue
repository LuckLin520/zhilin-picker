<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @tap="show = true"></image>
		<image class="logo" src="/static/logo.png" @tap="show2 = true"></image>
		<zhilin-picker
			v-model="show"
			:title="title"
			:data="data"
			:initSelected="initSelected"
			:showSearch="true"
			@change="onChange"
			@confirm="onConfirm"
		/>
		<zhilin-picker
			v-model="show2"
			:title="title2"
			:data="data2"
			:initSelected="initSelected2"
			:showSearch="true"
			@change="onChange2"
			@confirm="onConfirm2"
		/>
	</view>
</template>

<script>
	import zhilinPicker from "@/components/zhilin-picker/zhilin-picker.vue"
	export default {
		components:{zhilinPicker},
		data() {
			return {
				show: false,
				title: '选择福利',
				data: ['五险', '加班补助', '出国旅行', '生日福利', '年终分红', '带薪年假', '节日福利', '包吃', '包住', '聚餐经费', '交通补贴'],
				initSelected: [],
				
				show2: false,
				title2: '选择福利',
				data2: ['五险', '加班补助', '出国旅行', '生日福利', '年终分红', '带薪年假', '节日福利', '包吃', '包住', '聚餐经费', '交通补贴'],
				initSelected2: [],
			}
		},
		mounted(){
			setTimeout(()=>{
				this.initSelected = ['出国旅行']
			},2000)
			setTimeout(()=>{
				this.initSelected2 = ['加班补助']
			},1000)
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
			},
			onChange2(val){
				console.log(val)
			},
			onConfirm2(val){
				console.log(val)
			},
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
