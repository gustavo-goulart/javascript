let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes: \n" +
      pacientes +
      "\nEscolha uma opção:\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do Paciente?:");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila de atendimento");
      } else {
        alert("Não há pacientes na fila");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");
