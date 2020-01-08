# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(x, y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
num = somar(1, 1) + 5

// Qual o valor atualizado dessa variável?
7

// Declare uma nova variável, sem valor.
var var1

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function incrementar(var1){
    var1 += 5;
    return ("O valor da variável agora é " + var1);
}

// Invoque a função criada acima.
incrementar(var1)

// Qual o retorno da função? (Use comentários de bloco).
/*
"O valor da variável agora é NaN."
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function func2 (a, b, c){
    if(a === undefined || b === undefined || c === undefined){
        return "preencha os valores corretamente!"
    } else {
        return ((a*b*c)+2)
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
func2(x, y)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*"preencha os valores corretamente!"*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
x = 2; y = 3; z = 4;
func2(x, y, z)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function func3 (a, b, c){
    var count = 0;
    var lista = [a, b, c];
    var aux = [];
    for(i = 0; i< 3; i++){
        if (lista[i] !== undefined){
            aux.push(lista[i]);
            count++;
        }
    }
    if(count == 3){
        return ((a+b)/c);
    } else if(count == 2){
        return aux[0]+aux[1];
    } else if(count == 1){
        return aux[0];
    } else if(count == 0){
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
a = 1; b = 2; c = 3;
func3 (a+b+c) // 1 
func3 (a+b) // 3 
func3 (a) // 1 
func3 () // false 

```