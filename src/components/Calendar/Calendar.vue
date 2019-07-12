<template>
	<div class="hello">
		<v-header title="CALENDAR"></v-header>
		<div>
			<div></div>
		</div>
		<v-calendar
			v-model="year"
			:activeDates.sync="activeDates"
			@toggleDate="toggleDate"
			prefixClass="selected__date"
			:activeClass="activeClass"
		></v-calendar>
	</div>
</template>

<script>
  import Header from '../SharedComponent/Header';
  import YearCalendar from 'vue-material-year-calendar'

  export default {
    name: 'Calendar',
    components: {
      'v-header': Header,
      'v-calendar':  YearCalendar
    },
    data () {
      return {
        year: 2019,
        activeDates: [
          { date: '2019-02-13' },
          { date: '2019-02-14', className: 'red' },
          { date: '2019-02-15', className: 'blue' },
          { date: '2019-02-16', className: 'your_customized_classname' }
        ],
        activeClass: '',
      }
    },
    methods: {
      toggleDate (dateInfo) {
        console.log(dateInfo)  // { date: '2010-10-23', selected: true }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.selected__date {
		background-color: #0aa;
		color: white;
	}
</style>
