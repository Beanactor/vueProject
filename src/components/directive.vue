<template>
	<div class="root">
		{{ msg }}
		<div :class="{ red: isRed }"></div>
		<div :class="[classA,classB]"></div>
		<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">{{ checked }}</label>

		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		<br>
		<span>Checked names: {{ checkedNames }}</span>
		<span v-pre>this will not be compiled defd  efef</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '5555555555555',
				isRed: true,
				classA: 'classA',
				classB: 'classB',
				checked: false,
				checkedNames: []
			}
		}
	}
</script>

<style scoped>
	div {
		width: 60%;
		height: 100px;
	}
	
	.red {
		background-color: #f00;
	}
	
	.classA {
		background-color: #00f;
	}
	
	.classB {
		/*background-color: #0f0;*/
		border-radius: 50%;
	}
</style>