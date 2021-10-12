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

<article>
	<label>
		<input type='checkbox'>
		<span class='checkable'>Noe å gjøre</span>
	</label>
</article>
