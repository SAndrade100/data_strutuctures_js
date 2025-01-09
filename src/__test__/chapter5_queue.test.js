import { Deque } from '../chapter5_queue_deque/Deque.js'

describe('Deque', () => {
    let deque

    beforeEach(() => {
        deque = new Deque()
    })

    it('should add elements to the back of the deque', () => {
        deque.addBack(1)
        deque.addBack(2)
        expect(deque.toString()).toBe('1,2')
    })

    it('should add elements to the front of the deque', () => {
        deque.addFront(1)
        deque.addFront(2)
        expect(deque.toString()).toBe('2,1')
    })

    it('should remove elements from the front of the deque', () => {
        deque.addBack(1)
        deque.addBack(2)
        expect(deque.removeFront()).toBe(1)
        expect(deque.removeFront()).toBe(2)
    })

    it('should remove elements from the back of the deque', () => {
        deque.addBack(1)
        deque.addBack(2)
        expect(deque.removeBack()).toBe(2)
        expect(deque.removeBack()).toBe(1)
    })

    it('should return the front element without removing it', () => {
        deque.addBack(1)
        deque.addBack(2)
        expect(deque.peekFront()).toBe(1)
    })

    it('should return the back element without removing it', () => {
        deque.addBack(1)
        deque.addBack(2)
        expect(deque.peekBack()).toBe(2)
    })

    it('should return true if the deque is empty', () => {
        expect(deque.isEmpty()).toBe(true)
    })

    it('should return the correct size of the deque', () => {
        deque.addBack(1)
        deque.addBack(2)
        expect(deque.size()).toBe(2)
    })

    it('should clear the deque', () => {
        deque.addBack(1)
        deque.addBack(2)
        deque.clear()
        expect(deque.isEmpty()).toBe(true)
    })
})