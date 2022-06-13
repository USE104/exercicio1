const alunos = [
    {nome: "Ana Paula", idade: 15, Sexo: "Feminino"},
    {nome: "Carlos", idade:17, Sexo: "Masculino" },
    {nome: "Aline", idade:13, Sexo: "Feminino"},
    {nome:"Pedro", idade:15, Sexo:"Masculino"},
    {nome:"Sofia", idade:12, Sexo:"Feminino"},
    {nome:"Paloma", idade:16, Sexo:"Feminino"},
]
console.log(alunos.filter(function(p){
    if(p.idade >= 15 && p.idade <= 17){
        return p
    }
}))