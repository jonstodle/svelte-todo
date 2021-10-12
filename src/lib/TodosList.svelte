<script lang='ts'>
	import {todos} from '$lib/store';

	$: sortedTodos = $todos
		.sort((a, b) => a.done - b.done)
</script>

{#each sortedTodos as todo}
	<article>
		<label>
			<input type='checkbox' bind:checked={todo.done}>
			<span class='checkable' class:done={todo.done}>{todo.text}</span>
		</label>
	</article>
{/each}

<style>
  .done {
    text-decoration: line-through;
  }
</style>
