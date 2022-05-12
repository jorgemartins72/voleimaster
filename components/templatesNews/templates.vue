<template>
	<div>
		<template1 :noticia="noticia" />
	</div>
</template>

<script>

	import template1 from './template1'

	export default {
		components: { 
			template1
		},
		props: [ 'noticia' ]
		
	}
</script>

<style lang="scss" scoped>

</style>