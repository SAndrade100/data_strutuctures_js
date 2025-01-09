import { Stack } from '../chapter4_stack/Stack.js'

describe('Stack', () => {
	let stack  

	beforeEach(() => {
		stack = new Stack()
	})

	it('clear should empty the stack', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)

        stack.clear()

        expect(stack.size()).toBe(0)
        expect(stack.isEmpty()).toBe(true)
    })

	it('clear should reset the count to zero', () => {
        stack.push(1)
        stack.push(2)

        stack.clear()

        expect(stack.size()).toBe(0)
    })

    it('clear should remove all items', () => {
        stack.push(1)
        stack.push(2)

        stack.clear()

        expect(stack.peek()).toBe(undefined)
    })
})
