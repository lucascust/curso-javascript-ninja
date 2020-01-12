/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['neneu', 22, null, false, ['array interno']];
console.log(arr)

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrReturner(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arrReturner(arr)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indexReturn(arr, index) {
    if(index === undefined){
        return arr;
    }
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indexReturn(arr);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

/* Primeira Versão
    - Sem uso de notação de array em objeto para buscar propriedade no objeto com variável
*/
function book(nome){
    var obj = {
        DomCasmurro:{
            quantidadePaginas: '300',
            autor: 'Machado de Assis',
            editora: 'Companhia das Letras'
        },
        CrimeeCastigo:{
            quantidadePaginas: '400',
            autor: 'Dostoiévski',
            editora: '34'
        },
        GrandeSertao:{
            quantidadePaginas: '500',
            autor: 'Guimaraes Rosa',
            editora: 'Nova Fronteira'
        }
    }
    if(nome === undefined){
        return obj;
    } else if(nome === "Dom Casmurro"){
        return obj.DomCasmurro;
    } else if(nome === "Crime e Castigo"){
        return obj.CrimeeCastigo;
    } else if(nome === "Grande Sertao"){
        return obj.GrandeSertao;
    }
}
/* Versão Aprimorada
 - Uso de Ternário
 - obj[var]
 - unário "!" para ausência de parâmetro
*/
function bookClean(nome){
    var obj = {
        "Dom Casmurro":{
            quantidadePaginas: '300',
            autor: 'Machado de Assis',
            editora: 'Companhia das Letras'
        },
        "Crime e Castigo":{
            quantidadePaginas: '400',
            autor: 'Dostoiévski',
            editora: '34'
        },
        "Grande Sertao":{
            quantidadePaginas: '500',
            autor: 'Guimaraes Rosa',
            editora: 'Nova Fronteira'
        }
    }
    return !nome ? obj : obj[nome];
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome = 'Dom Casmurro'
console.log("O livro " + nome + " tem " + book(nome).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nome = 'Crime e Castigo'
console.log("O autor do livro " + nome + " é " + book(nome).autor + ".");


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nome = "Grande Sertao"
console.log("O livro " + nome + " foi publicado pela editora " + book(nome).editora + ".")
