var I = require('immutable');

var product = I.Map({ id: 1, name: 'iPhone', price: 699.90 });
//Map { "id": 1, "name": "iPhone", "price": 699.90 }
product.set('price', 599.90);
//returns: Map { "id": 1, "name": "iPhone", "price": 599.9 }

var product2 = product.set('price', 599.90);
//Map { "id": 1, "name": "iPhone", "price": 599.9 }

console.log('product === product2', product === product2) // false
product2 = product2.set('price', 699.90);

//guardamos dos listas inmutables en nuestros mapas
product = product.set('tags', I.List(['ios']));
console.log(product);
product2 = product2.set('tags', I.List(['ios']));
console.log(product2);
//comparación profunda
console.log('I.is(product, product2)', I.is(product, product2)); // true;
