<script lang='ts'>
	import {generateId} from '$lib/utils';

	let todoText = "";
	let todos = [];

	$: sortedTodos = todos
		.sort((a, b) => a.done - b.done)

	const addTodo = () => {
		todos = [...todos, {
			id: generateId(),
			text: todoText,
			done: false,
		}];
		todoText = "";
	}
</script>

<h1>{todos.length} gjenstående</h1>

<input type='text' bind:value={todoText} on:keydown={(e) => e.key == "Enter" && addTodo()}>

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
