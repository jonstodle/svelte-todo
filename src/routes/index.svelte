<script lang='ts'>
	import TodosList from '$lib/TodosList.svelte';
	import TodoInput from '$lib/TodoInput.svelte';

	let todos = [];

	$: todosNotDone = todos
		.filter(t => !t.done)
</script>

<h1>{todosNotDone.length} gjenstående</h1>

<TodoInput />

<TodosList {todos} />
