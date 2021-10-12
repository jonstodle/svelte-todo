<script lang='ts'>
	import { generateId } from '$lib/utils';

	let todoText = "";

	const addTodo = () => {
		todos = [...todos, {
			id: generateId(),
			text: todoText,
			done: false,
		}];
		todoText = "";
	}
</script>

<input type='text' bind:value={todoText} on:keydown={(e) => e.key == "Enter" && addTodo()}>
