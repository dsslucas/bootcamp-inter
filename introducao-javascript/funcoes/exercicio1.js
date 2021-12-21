//Objeto
const alunos = [
    {
        nome: "João",
        nota: 5,
        turma: "1B",
    },

    {
        nome: "Maria",
        nota: 9,
        turma: "1B",
    },

    {
        nome: "Anderson",
        nota: 6,
        turma: "2B",
    },

    {
        nome: "Paraguai",
        nota: 3,
        turma: "6B",
    },
]

function alunosAprovados(arr, media) {
    //Array auxiliar
    let aprovados = []

    for (let i = 0; i < arr.length; i++) {

        //Object Destructuring
        const { nota, nome } = arr[i];

        /*Jeito tradicional
        if (arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        }
        */

        //  C/ Object Destructuring
        if (nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5))