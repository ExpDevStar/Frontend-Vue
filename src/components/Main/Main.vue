<template>
	<div>
		<h1 class="md-display-3 title"> BCSDLAB FRONTEND <span class="highlight">Beginner Example</span></h1>
		<div class="md-layout md-gutter">
			<div
				class="md-layout-item"
				v-for="data in mainData">
				<card
					:title="data.title"
					:desc="data.desc"
					:link="data.link"
					:imgUrl="data.imgUrl">
				</card>
			</div>
		</div>
	</div>
</template>

<script>
	import Card from './Components/Card';

  export default {
    name: 'Main',
		components: {
      'card': Card
		},
    data () {
      return {
        mainData: [
					{
					  title: "ADDRESS",
						link: "/address",
						imgUrl: "https://ak9.picdn.net/shutterstock/videos/14941789/thumb/1.jpg?i10cx3dimg.resize(height:160)",
						desc: "Just Local Address"
					},
          {
            title: "CALENDAR ",
            link: "/calendar",
            imgUrl: "https://www.mitchellcounty.org/wp-content/uploads/2018/04/Calendar-Background.jpg",
            desc: "Just Calendar"
          },
          {
            title: "TEST",
            link: "/",
            imgUrl: "http://www.w3.org/Graphics/PNG/text2.png",
						desc: "JUST TEST"
          }
				]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-layout {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 1000px;
	}
</style>
