<script lang='ts'>
	import {generateId} from '$lib/utils';

	let todoText = "";
	let todos = [];

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

{#each todos as todo}
	<article>
		<label>
			<input type='checkbox' bind:checked={todo.done}>
			<span class='checkable'>{todo.text}</span>
		</label>
	</article>
{/each}
