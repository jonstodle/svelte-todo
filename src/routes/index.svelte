<script lang='ts'>
	import {generateId} from '$lib/utils';

	let todoText = "";
	let todos = [];

	const addTodo = () => {
		todos.push({
			id: generateId(),
			text: todoText,
			done: false,
		});
		todoText = "";
	}
</script>

<h1>Gjøremålsapp</h1>

<input type='text' bind:value={todoText}>

<article>
	<label>
		<input type='checkbox'>
		<span class='checkable'>Noe å gjøre</span>
	</label>
</article>
