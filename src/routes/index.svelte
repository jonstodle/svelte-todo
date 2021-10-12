<script lang='ts'>
	let todoText = "";
	let todos = [];
</script>

<h1>Gjøremålsapp</h1>

<input type='text' bind:value={todoText}>

<article>
	<label>
		<input type='checkbox'>
		<span class='checkable'>Noe å gjøre</span>
	</label>
</article>
