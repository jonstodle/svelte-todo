<script lang='ts'>
	import { generateId } from '$lib/utils';
	import {todos} from '$lib/store.ts';

	let todoText = "";

	const addTodo = () => {
		$todos = [...$todos, {
			id: generateId(),
			text: todoText,
			done: false,
		}];
		todoText = "";
	}
</script>

<input type='text' bind:value={todoText} on:keydown={(e) => e.key == "Enter" && addTodo()}>
