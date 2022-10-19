function somaTudo(...numeros) {
    let soma = 0;
    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
