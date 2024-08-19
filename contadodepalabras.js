function contarPalabras(texto) {
    const palabras = texto.trim().split(/\s+/);
    return palabras.filter(palabra => palabra.length > 0).length;
}

const textoEjemplo = "Hola mundo, este es un ejemplo de conteo de palabras.";
console.log(`Número de palabras: ${contarPalabras(textoEjemplo)}`);
