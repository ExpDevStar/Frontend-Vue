<template>
	<div>
		<md-card
			class="md-accent"
			md-with-hover>
			<md-ripple>
				<div @click="clickCard(link)">
					<md-card-media>
						<img :src="imgUrl" :alt="title">
					</md-card-media>

					<md-card-header>
						<div class="md-title">{{ title }}</div>
						<div class="md-subhead">{{ desc }}</div>
					</md-card-header>
				</div>
			</md-ripple>
		</md-card>
	</div>
</template>

<script>
  export default {
    name: 'Card',
		props: {
      title: {
        default: "",
        type: String
      },
			link: {
        default: "",
        type: String
			},
      imgUrl: {
        default: "",
        type: String
      },
			desc: {
        default: "",
				type: String
			}
    },
    data () {
      return {
        msg: 'Card'
      }
    },
		methods: {
			clickCard: function(link) {
			  this.$router.push(link)
			}
		}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-card {
		width: 100%;
		margin: 4px;
		vertical-align: top;
		display: block;
		background: white;
	}

	.md-card img {
		height: 200px;
		width: auto;
	}
</style>
