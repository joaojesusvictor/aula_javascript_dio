// INICIANDO AS VARIÁVEIS:

// let nome = "João Victor";
// let idade = 23;
// let frase = "Japão é o melhor time do mundo";

// alert(nome + " tem " + idade + " anos!");
// alert(frase.replace("Japão", "Brasil"));
// alert(frase.toUpperCase());
// alert(frase.toLowerCase()); -> Transforma todas as letras em minúscula

// console.log(nome); -> Esse resultado é apresentado na parte de Console e Sources no browser.
// console.log(frase.replace("Japão", "Brasil")); -> Está trocando uma palavra por outra na hora de apresentar.
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());


// ARRAY (VETOR):

// let lista = ["maça", "pêra", "laranja"];
// lista.push("uva"); -> Adiciona elemento no array
// lista.pop(); -> Retira o último elemento do array
// console.log(lista);
// console.log(lista.reverse()); -> Troca a ordem dos elementos (do último ao primeiro)
// console.log(lista.toString()); -> Transforma o array em string
// console.log(lista.join(" | ")); -> Junta elemento do array com outra coisa


// JSON:

/*let fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
-> Dicionário (json) de um único elemento */

/*let frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);
-> Dicionário (json) de vários elementos */


// FUNÇÃO:

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome) -> Comando para alterar alguma palavra
// }

// alert(soma(5, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));


// MANIPULANDO ELEMENTOS DA PÁGINA:

// function clicou(){
//     alert("Obrigado por clicar!!");
// } -> Função ao clicar no botão da index

// function clicou(){
//     document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
// } -> O innerHTML recebe um valor e o coloca no lugar do id (no caso o "agradecimento")

// function redirecionar(){
//    window.open("https://www.controlshop.com.br/"); -> Abre em outra página
//    window.location.href = "https://www.controlshop.com.br/"; -> Renderiza a mesma página
// }

// function trocar(elemento){
//     elemento.innerHTML = "Obrigado por passar o mouse";
//      -> Ao invés do "getElementById", passa o "this" na index e o "elemento" na função com "elemento.innerHTML"
// }

// function voltar(elemento){
//     elemento.innerHTML = "Passe o mouse aqui";
//      -> Ao invés do "getElementById", passa o "this" na index e o "elemento" na função com "elemento.innerHTML"
// }

// function load(){
//     alert("Página carregada");
// } -> Função que será carregada através do comando "onload" na index

function funcaoChange(elemento){
    console.log(elemento.value);
}