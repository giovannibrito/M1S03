function reverseString(str) {
    const charArray = str.split("");
    const arrayReverso = charArray.reverse();
    const novaString = arrayReverso.join("");
    return novaString;
}

function verificaPalindromo(str) {
    if (str.toLowerCase() === reverseString(str.toLowerCase())) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

const teste1 = verificaPalindromo("Ana");
const teste2 = verificaPalindromo("julia");
