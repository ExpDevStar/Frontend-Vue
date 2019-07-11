<template>
	<div class="row__container">
		<div
			:class="{'first-row': flag==='first'}"
			class="row__content"
			v-if="inputData.type==='person'">
			<!-- index part -->
			<div
				class="row__content__index"
				v-if="index === 0">
				No.
			</div>
			<div
				class="row__content__index"
				v-else>
				{{ index }}
			</div>
			<!-- index part end -->

			<!-- content part -->
			<div
				v-if="flag==='default'"
				class="row__content__name">
				{{ inputData.data.name }}
			</div>
			<div
				v-if="flag==='add'"
				class="row__content__name">
				<input type="text" v-model="name">
			</div>

			<div
				v-if="flag==='default'"
				class="row__content__email">
				{{ inputData.data.email }}
			</div>
			<div
				v-if="flag==='add'"
				class="row__content__email">
				<input type="text" v-model="email">
			</div>

			<div
				v-if="flag==='default'"
				class="row__content__gender">
				{{ inputData.data.gender }}
			</div>
			<div
				v-if="flag==='add'"
				class="row__content__gender">
				<input type="text" v-model="gender">
			</div>

			<div
				v-if="flag==='default'"
				class="row__content__title">
				{{ inputData.data.title }}
			</div>
			<div
				v-if="flag==='add'"
				class="row__content__title">
				<input type="text" v-model="title">
			</div>
			<!-- content part end -->


			<div
				v-if="flag!=='first'"
				class="row__content__remove">
				<md-button class="md-raised md-accent row__content__remove--btn">remove</md-button>
			</div>

		</div>
	</div>
</template>

<script>
  export default {
    name: 'TableRow',
    props: {
      index: {
        default: 0,
				type: Number
			},
      inputData: {
        default: {
          type: '',
					data: null
				},
				type: Object
			},
      flag: {
        default: "default",
				type: String
			}
    },
    data () {
      return {
				name: "",
				email: "",
				gender: "",
				title: ""
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.row__content {
		width: 100%;
		border: 1px #bebebe solid;
		margin-bottom: -1px;
		height: 40px;
		line-height: 40px;
		float:left;
		text-align: center;
		background: #fefefe;
	}

	.row__content:hover {
		background: #bebebe;
		font-weight: 700;
	}

	.first-row:hover {
		background: #363636;
	}

	.first-row {
		background: #363636;
		color: white;
		font-weight: 700;
		text-align: center;
	}

	.row__content__index {
		float: left;
		width: 50px;
		border-right: 1px #bebebe solid;
	}

	.row__content__name {
		float: left;
		border-right: 1px #bebebe solid;
		width: 200px;
	}

	.row__content__name input {
		float: left;
		width: 200px;
	}

	.row__content__email {
		float: left;
		border-right: 1px #bebebe solid;
		width: 250px;
	}

	.row__content__gender {
		float:left;
		border-right: 1px #bebebe solid;
		width: 100px;
	}

	.row__content__title {
		padding-left: 10px;
		float: left;
	}

	.row__content__remove--btn {
		height: 25px;
		margin: 0;
		padding: 0;
		line-height: 1.2;
		font-size: 13px;
		background: #bb0000;
		color: white;
		float: right;
		margin-right: 5px;
		margin-top: 5px;
	}

	input {
		border : none;
	}
</style>
