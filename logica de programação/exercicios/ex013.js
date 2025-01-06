let invocer = {
    name: 'vinicius',
    age: 14,
    products: {
        0: ['mouse', 'abc', 10.90],
        1: ['teclado mecânico', 'abc', 15.15],
        2: ['monitor', 'abc', 20.90]
    }
};

console.log(`O comprador é ${invocer.name}`)
console.log(`age ${invocer.age}`)

for(let index in invocer.products){
    console.log(`seu produtos é ${invocer.products[index]}`)
};