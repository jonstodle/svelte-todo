<script lang='ts'>
	import {generateId} from '$lib/utils';
	import TodosList from '$lib/TodosList.svelte';

	let todoText = "";
	let todos = [];

	$: todosNotDone = todos
		.filter(t => !t.done)

	const addTodo = () => {
		todos = [...todos, {
			id: generateId(),
			text: todoText,
			done: false,
		}];
		todoText = "";
	}
</script>

<h1>{todosNotDone.length} gjenstående</h1>

<input type='text' bind:value={todoText} on:keydown={(e) => e.key == "Enter" && addTodo()}>

<TodosList {todos} />
