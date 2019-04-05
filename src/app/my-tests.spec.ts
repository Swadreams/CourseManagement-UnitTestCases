function greeting(msg) {
    if(msg) {
        return msg;
    } else {
        return 'Hello';
    }
}

describe('Greeting Function Tests', ()=> {
    it('Greeting function should return message as Hello', ()=> {
        expect(greeting('')).toBe('Hello');
    })

    it('Greeting function should retunr message as Hi', ()=>{
        expect(greeting('Hi')).toBe('Hi');
    })
})