const hola = 'Hola'
const mundo = 'mundo'
let holaMundo = hola + ' ' + mundo + '!'
console.log(holaMundo)
holaMundo += '!!!'
console.log(holaMundo)
console.log(1 + 1)
const nro1 = window.prompt('Ingrese el primer n°: ')
const nro2 = window.prompt('Ingrese el segundo n°: ')
// const resultado = Number.parseInt(nro1) + Number.parseInt(nro2)
const resultado = Number.parseFloat(nro1) + Number.parseFloat(nro2)
window.alert('La suma de sus numeros es: ' + resultado)
