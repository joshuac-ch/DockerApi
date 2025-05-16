function suma(a,b){
    return a+b
}

test("Esto es funcion suma",()=>{
    expect(suma(2,4)).toBe(6)
})