const multid=require('./app')

test("funcion multiplicacion",()=>{
    expect(multid(2,10)).toBe(20)
})

test("funcion multiplicacion 2",()=>{
    expect(multid(2,30)).toBe(60)
})
