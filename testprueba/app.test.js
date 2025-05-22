const functionmulti=require('./app')
test("prueba de multiplicacion",()=>{
    expect(functionmulti(5,5)).toBe(25)
})

