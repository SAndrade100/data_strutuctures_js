import { Queue } from '../chapter5_queue_deque/Queue.js'

describe('Queue', () => {
    let queue

    beforeEach(() => {
        queue = new Queue()
    })

    it('should enqueue elements', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.size()).toBe(2)
    })

    it('should dequeue elements', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
    })

    it('should return the front element without removing it', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.peek()).toBe(1)
    })

    it('should return true if the queue is empty', () => {
        expect(queue.isEmpty()).toBe(true)
    })

    it('should return the correct size of the queue', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.size()).toBe(2)
    })

    it('should clear the queue', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.clear()
        expect(queue.isEmpty()).toBe(true)
    })

    it('should handle interleaved enqueue and dequeue operations', () => {
        queue.enqueue('Task 1')
        queue.enqueue('Task 2')
        expect(queue.dequeue()).toBe('Task 1')

        queue.enqueue('Task 3')
        expect(queue.dequeue()).toBe('Task 2')
        expect(queue.dequeue()).toBe('Task 3')
        expect(queue.isEmpty()).toBe(true)
    })

    it('should handle a sequence of enqueue and dequeue operations', () => {
        queue.enqueue('Customer 1')
        queue.enqueue('Customer 2')
        queue.enqueue('Customer 3')

        expect(queue.size()).toBe(3)
        expect(queue.peek()).toBe('Customer 1')

        expect(queue.dequeue()).toBe('Customer 1')
        expect(queue.size()).toBe(2)
        expect(queue.peek()).toBe('Customer 2')

        queue.enqueue('Customer 4')
        expect(queue.size()).toBe(3)
        expect(queue.peek()).toBe('Customer 2')

        expect(queue.dequeue()).toBe('Customer 2')
        expect(queue.dequeue()).toBe('Customer 3')
        expect(queue.dequeue()).toBe('Customer 4')
        expect(queue.isEmpty()).toBe(true)
    })
})