export const textInputHandler = (e, setCharacters, setPost) => {
	setCharacters(1000 - e.target.value.length)
	setPost(e.target.value)
	
	const textarea = e.target
	textarea.style.height = 'auto'
	textarea.style.height = `${textarea.scrollHeight}px`
}
