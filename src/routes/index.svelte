<script lang='ts'>
	import TodosList from '$lib/TodosList.svelte';
	import TodoInput from '$lib/TodoInput.svelte';
	import {todos} from '$lib/store';

	$: todosNotDone = $todos
		.filter(t => !t.done)
</script>

<h1>{todosNotDone.length} gjenstående</h1>

<TodoInput />

<TodosList />
