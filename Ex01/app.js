function procuraMinMax(array) {
    let menor, maior;

    // Checa pra ver se o argumento passado é realmente um array
    if (!Array.isArray(array)) {
        console.log("Não é possível encontrar");
        return;
    }

    array = array.filter(Boolean); // Remove todos os falsy values do array

    // Checa para ver se sobrou algum truthy value no array
    if (array.length === 0) {
        console.log("Não é possível encontrar");
        return;
    }

    maior = menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) maior = array[i];
        if (array[i] < menor) menor = array[i];
    }

    console.log(`Maior: ${maior}\nMenor: ${menor}`);
}

const arr = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
const arr2 = [];
const arr3 = [1];
const arr4 = [1, -1];
const arr5 = null;
const arr6 = [-2, -2, -2, -2];
const arr7 = [20, 10, 30];

procuraMinMax(arr);
procuraMinMax(arr2);
procuraMinMax(arr3);
procuraMinMax(arr4);
procuraMinMax(arr5);
procuraMinMax(arr6);
procuraMinMax(arr7);
