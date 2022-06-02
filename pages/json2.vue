<template>
	<div>
		{{datasite}}
	</div>
</template>

<script>

	export default {
		layout: 'teste',
		data(){
			return {
				datasite: {}
			}
		},
		async fetch() {
			this.datasite = await this.$axios('https://d9y77fbekb.execute-api.us-east-1.amazonaws.com/datasite/')
			.then(
				r => r.data
			)
		}
	}
</script>
