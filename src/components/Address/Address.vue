<template>
	<div>
		<v-header title="ADDRESS"></v-header>
		<div class="md-layout md-gutter">
			<div class="md-layout-item">
				<div class="table__container">
					<div class="table__header">
						<h3>My Address</h3>
					</div>

					<div class="table__content">
						<tableRow
							flag="first"
							:index="0"
							:input-data="{ type:'person', data:rowTitle }">
						</tableRow>

						<div v-for="(person, idx) in people">
							<tableRow
								@removePerson="removePerson"
								:index="idx+1"
								:input-data="{ type:'person', data:person }"></tableRow>
						</div>

						<tableRow
							@addPerson="addPerson"
							flag="add"
							:index="people.length + 1"
							:input-data="{ type:'person', data:null }">
						</tableRow>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TableRow from './Components/tableRow';
  import Header from '../SharedComponent/Header';

  export default {
    name: 'Address',
		components: {
			'tableRow': TableRow,
      'v-header': Header
		},
    data () {
      return {
        selected: [],
				rowTitle: {
          name: "NAME",
					email: "EMAIL",
					gender: "GENDER",
					title: "MEMO"
				},
        people: [
          {
            name: 'Shawna Dubbin',
            email: 'sdubbin0@geocities.com',
            gender: 'Male',
            title: 'Assistant Media Planner'
          },
          {
            name: 'Odette Demageard',
            email: 'odemageard1@spotify.com',
            gender: 'Female',
            title: 'Account Coordinator'
          },
          {
            name: 'Lonnie Izkovitz',
            email: 'lizkovitz3@youtu.be',
            gender: 'Female',
            title: 'Operator'
          },
          {
            name: 'Thatcher Stave',
            email: 'tstave4@reference.com',
            gender: 'Male',
            title: 'Software Test Engineer III'
          },
          {
            name: 'Clarinda Marieton',
            email: 'cmarietonh@theatlantic.com',
            gender: 'Female',
            title: 'Paralegal'
          }
        ]
      }
    },
    methods: {
      removePerson: function(index) {
        this.people.splice(index-1, 1)
			},

			addPerson: function(data) {
				let values = Object.values(data);

				for(let i=0; i<values.length; i++) {
				  if(values[i] === "") {
				    alert("빈값을 입력하실 수는 없습니다.")
				    return;
					}
				}

        this.people.push(data)
			}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-table + .md-table {

	}

	.md-layout {
		margin-left: auto;
		margin-right: auto;
	}

	.md-title {
		text-align: center;
	}

</style>
