function criarTarefa() {
  const novaTarefa = document.getElementById("tarefa").value;
  const diasDaSemana = document.getElementById("dias-semana").value;
  const ondeAcrescenta = document.getElementById(diasDaSemana);

  if (novaTarefa !== "") {
    ondeAcrescenta.innerHTML += `<li>${novaTarefa.value}</li>`;
    novaTarefa.value = "";
  } else {
    alert("Insira uma tarefa válida");
  }

  console.log(diasDaSemana);
  console.log(novaTarefa);
}
