//listas
//anonimas,callback

/*
funcao que esta dentro de outra funcao
que tem como finalidade so liberar sua funcao
onde esta alocada quando ela se finalizar
*/


//filtrem de uma lista de palavras, tais palavras que tenham mais que 5 letras

let listaCampeoes=["ekko","nidalee","lissandra","illaoi","yasuo","katarina"];
listaFiltradaDeCampeoes=listaCampeoes.filter(champions => champions.length>5)
console.log(listaFiltradaDeCampeoes);

