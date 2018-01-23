<template>
	<div class="root">
		<div class="formwrap">
			<select id="type" v-model="selected">
				<option value="" disabled selected>Select your option</option>  
				<option v-for="(type,index) in optionsList" :value="type.type">{{type.name}}</option>
			</select>
		</div>
		<el-select v-model="value" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: '',
				optionsList: [ {
					type: 1,
					name: '1111111111'
				}, {
					type: 2,
					name: '222222222'
				}],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}
		}
	}
</script>

<style>
	select {
		width: 60%;
		height: 60px;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		font-size: 26px;
	}
	
	option {
		font-size: 20px;
		color: #0094ff;
	}
</style>