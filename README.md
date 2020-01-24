## Aula 9 - Hoisting e IIFE (Immediately invoked function expression) 
### Hoisting: 
- Fonções: Eleva funções ao topo do escopo 
- Variáveis declaradas sempre são criadas no início do código como undefined
- Variáveis não declaradas dão erro ao invocá-las
### IIFE :
- Funções auto executáveis, úteis para limitar o escopo

## Aula 10 - Wrapper Objects, typeof
### Wrapper Objects:
- Quando utilizamos propriedades de valores primitivos, como o "lenght" de uma String, o Javascript 
cria um objeto (Wrapper Object) para poder utilizar suas propriedades.

ex: string primitiva: 
```javascript
var str = 'Palavra'
```
objeto string:    
```javascript
var str = new String('Palavra')
```
- Não confundir:
    - Construtor: var x = new type() 
    - Conversor:  var x = type()  <- Não cria objeto

- typeof:
  - para qualquer estrutra não primitiva, `typeof = object` (INCLUINDO NULL - erro de implementação)
  - logo, usar apenas para primitivos 

 **INFO INTERESSANTE DA AULA:**
  - Busca se existe o parâmetro no objeto: 
  ```javascript
  !!objeto[parametro] //retorna booleano
  ```
