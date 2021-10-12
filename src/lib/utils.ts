export const generateId = () => String.fromCharCode(
	...[...crypto.getRandomValues(new Uint8Array(5))].map(
		c => (c % 26) + 97
	)
)
