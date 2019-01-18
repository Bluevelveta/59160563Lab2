const minus = require('./minus')

test('5 - 5 = 0',()=>{
    expect(minus(5,5)).toBe(0)
})

test('-5 - 5 = -10',()=>{
    expect(minus(-5,5)).toBe(-10)
})

test('-5 - -5 = 0',()=>{
    expect(minus(-5,-5)).toBe(0)
})