const primeiroNome = prompt("Informe seu primeiro nome:");
const sobrenome = prompt("Informe seu sobrenome:");
const campoDeEstudo = prompt("Qual é o campo de estudo do Recruta?:");
const anoDeNascimento = prompt("Qual o ano de nascimento do recruta?:");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de Estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2023 - anoDeNascimento)
);
