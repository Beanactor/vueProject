<template>
	<div class="root">
		<div id="demo">
			<button v-on:click="show = !show"> Toggle </button>
			<transition v-on:after-leave="afterLeave" name='fade'>
				<p v-if="show" style="font-size: 100px;">hello</p>
			</transition>
		</div>
		<transition>
			<div v-if="ok">toggled content</div>
		</transition>
		<transition name="fade" mode="out-in" appear>
			<component :is="view"></component>
		</transition>
		<hr />
		<RandomStr></RandomStr>
		<hr />

		<transition v-on:after-leave="afterLeave" name='fade'>
			<h1 v-show="show"> transitionComplete </h1>
		</transition>
	</div>
</template>

<script>
	import RandomStr from './RandomStr';

	export default {
		data() {
			return {
				show: true,
				ok: true,
				view: 'RandomStr'
			}
		},
		methods: {
			afterLeave: function(view) {
				console.log(view)
				alert('触发了')
				// 传入 'el' 这个 DOM 元素作为参数。
				console.log('transitionComplete')
			}
		},
		components: {
			RandomStr
		}
	}
</script>

<style scoped>
	button {
		width: 50%;
		height: 100px;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active below version 2.1.8 */
	
	{
		opacity: 0;
	}
</style>