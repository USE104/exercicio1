const alunos = [
    {nome: "Ana Paula", p, idade: "15" sexo: "feminino"}
    
]

console.log(alunos.filter(function(p){
    if(p.idade >= 15 && p.idade == "17"){
        return p
    }
}))