<script>
	import Search from './Search'

	export let onSearch
	export let search = true
</script>

<style>
  .list {

  }

	.header {

  }

	.search {

  }

	.options {

  }

	.footer {

  }
</style>

<div class="list">
	<div class="header">
		<slot name="header" />
	</div>
	{#if onSearch}
		<div class="search">
			<Search />
		</div>
	{/if}
	<div class="options">
		<slot name="options" />
	</div>
	<div class="footer">
		<slot name="footer" />
	</div>
</div>
