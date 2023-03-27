# Renderizaçao de listas

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar a mesma estrutura trabalhada em aula

Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/renderizacao-de-listas-jhvr3q?file=/src/App.js

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.


# Exercício 1

Primeiro, vamos analisar todo o código que vocês estão recebendo.
Perceba que esse código já traz os exercícios de aula resolvidos, então você só vai precisar trabalhar na adição das funcionalidades que vamos pedir a seguir: 

Hoje no nosso projeto só é possível adicionar uma nova tarefa quando clicamos no botão. Adicione uma funcionalidade para que seja possível enviar a nova tarefa também usando a tecla ENTER.

# Exercício 2

Hoje o nosso aplicativo apenas mostra na tela uma lista de tarefas que podemos adicionar uma a uma. Mas algumas funcionalidades a mais poderiam fazer essa aplicação se tornar mais realista. 

- Crie, abaixo da lista de tarefas, uma nova lista de tarefas já completadas. Ela vai funcionar da seguinte maneira: 
    - Conforme o usuário clica no botão de apagar uma tarefa, ela sai da lista de tarefas e entra na lista de baixo, onde ela passa a aparecer com um risco ~~assim~~ e um pouco mais opaca. Por exemplo: 


![Screen Shot 2022-10-24 at 17 09 25](https://user-images.githubusercontent.com/71241157/197619179-cd81f78a-bf14-47bc-bb4f-3898416cc7b6.png)

- Faça com que esse essa lista de tarefas completadas seja um Componente separado e apenas chame ele no `ListaTarefas.js`. Lembre-se de fazer a estilização adequada para que ele tenha a aparência pedida. Outra característica, segundo a imagem acima, é que as tarefas completadas não tem um botão de remover tarefa, lembre-se disso! 
