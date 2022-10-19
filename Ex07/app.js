function olaPessoa(objPessoa) {
    const { nome, idade, profissao } = objPessoa;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;
}

const pessoa = {
    nome: "Ada",
    idade: 36,
    profissao: "matemática",
};

console.log(olaPessoa(pessoa));
