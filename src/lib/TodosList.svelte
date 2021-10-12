<script lang='ts'>
	import {todos} from '$lib/store';
	import {flip} from 'svelte/animate';
	import {slide} from 'svelte/transition';

	$: sortedTodos = $todos
		.sort((a, b) => a.done - b.done)

	const removeTodo = (todo) => {
		$todos = $todos
			.filter(t => t != todo)
	}
</script>

{#each sortedTodos as todo (todo.id)}
	<article animate:flip transition:slide>
		<label>
			<input type='checkbox' bind:checked={todo.done}>
			<span class='checkable' class:done={todo.done}>{todo.text}</span>
		</label>
		{#if todo.done}
		<button class='error' on:click={() => removeTodo(todo)}>
			Fjern
		</button>
			{/if}
	</article>
{/each}

<style>
  .done {
    text-decoration: line-through;
  }

	article {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	button {
		font-size: .7em;
	}
</style>
