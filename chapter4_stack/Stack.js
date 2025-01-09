export class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    isEmpty() {
        if(this.count === 0) return true
        else return false
    }

    pop() {
        if(this.isEmpty()) return undefined
        
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    size() {
        return this.count
    }

    peek() {
        if(this.isEmpty()) return undefined
        return this.items[this.count -1]
    }

    clear() {
        this.items = {}
        this.count = 0
    }
}