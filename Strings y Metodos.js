const texto = 'Hola mundo'
// 0123456789
// Propiedades
console.log(texto.length)
console.log(texto[0])
console.log(texto[texto.length - 1])
console.log(texto.charAt(0))
console.log(texto.charCodeAt(texto.length - 1))
console.log(texto.indexOf('o')) // Primer ocurrencia del caracter buscado
console.log(texto.lastIndexOf('o')) // Última ocurrencia del caracter buscado
console.log(texto.lastIndexOf('c')) // Última ocurrencia del caracter buscado
console.log(texto.slice(5))
console.log(texto.slice(0, 4))
const textoConEspacios = '         Hola, Mundo               '
console.log(textoConEspacios.trim())
console.log(textoConEspacios.trimStart())
console.log(textoConEspacios.trimEnd())
const listaDeCorreos = 'fabio@gmail.com, pedro@gmail.com, maria@gmail.com'
console.log(listaDeCorreos.split(', ')) // Separa la cadena en un array
console.log(texto.toUpperCase());