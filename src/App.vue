<template>
	<div id="app">
		<transition
			mode="out-in"
			name="slide-right">
			<router-view/>
		</transition>
	</div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

	.title {
		text-align: center;
	}

	.highlight {
		font-weight: 700;
	}

	#app {
		padding-top: 60px;
		height: 100vh;
		width: 1100px;
		margin-left: auto;
		margin-right: auto;
	}

	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: 0.5s;
		transition-property: height, opacity, transform;
		transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
		overflow: hidden;
	}

	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		transform: translate(2em, 0);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		transform: translate(-2em, 0);
	}
</style>
