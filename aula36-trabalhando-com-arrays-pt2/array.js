const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

// Adicionar Elementos

// push - coloca o elemento no último lugar do array
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift - coloca o elemento no começo do array
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

// Remover Elementos
// pop - remove o último elemento do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift - remove o primeiro elemento do array
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um Elemento
// includes - Verifica se o elemento existe no array
const inclui = arr.includes("Gandalf"); //pesquisa se o GANDALF existe no array
console.log(inclui);

// indexof - Verifica o índice do elemento no array
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// slice - Gera uma cópia de uma parte do array
const hobbits = arr.slice(0, 4); // guarda do 0 ao 3 índice
const outros = arr.slice(-4); // guarda os itens de traz pra frente da lista
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat - Junta 2 ou mais arrays
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição de Elementos
// splice - Remove 1 grupo de elementos do array e substitui por outros
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
