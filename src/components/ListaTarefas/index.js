import { useEffect, useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaFeita, setTarefaFeita] = useState([])

  console.log(lista)

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    const tarefaConcluida = lista.filter((item) => item === tarefa)
    setTarefaFeita([...tarefaFeita, tarefaConcluida])

  };


  const adicionarTarefaComEnter = (e) => {
    if (e.keyCode === 13) {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  };


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput onKeyUp={adicionarTarefaComEnter}
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>


      <h3>Tarefas Completas</h3>
      <ListaContainer>
        <ul>
          {tarefaFeita.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
