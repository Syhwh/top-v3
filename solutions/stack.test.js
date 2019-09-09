const Stack = require ('./stack');

test('Object correct created', function () {
    expect(new Stack()).toBeTruthy();
})

test('Corrected inizializated object', function() {
    const stack = new Stack();
    expect(stack.items).toBeNull();
    expect(stack.length).toBe(0);
})

test('Push method', function() {
    const stack = new Stack();
    stack.push('a')
    //expect(stack.items).toBe('a')
}) 