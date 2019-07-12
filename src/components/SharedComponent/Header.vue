<template>
	<div class="header">
		<div class="md-display-1 title">{{ title }}</div>
		<div class="logo">
			<img src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png" alt="">
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: {
        default: "",
        type: String
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		text-align: center;
		width: 100%;
		margin-top: 100px;
		height: 100px;
		margin-bottom: 50px;
	}

	.logo {
		opacity: 0.2;
		margin-left: auto;
		margin-right: auto;
		width: 100px;
		position: relative;
		bottom: 100px;
	}

	.title {
		margin-bottom: 40px;
		font-weight: 700;
	}
</style>
