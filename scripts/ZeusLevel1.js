function level1() {
  const startText = `Temendo a rivalidade entre os filhos, Cromos os “devorou” logo ao nascer, exceto Zeus, que Rea escondeu numa caverna no bosque de Creta, e colocou uma pedra em seu lugar para ser devorada. Entre outras lendas, Zeus teria sido criado por Melissa, que o alimentou com leite de cabra e mel.
  Quando se tornou adulto, Zeus derrotou o pai e obrigou-o a ressuscitar seus irmãos. Libertou também os ciclopes da tirania de Cromos, e eles em recompensa deram-lhe as armas do trovão e do relâmpago.
  Zeus tornou-se senhor dos homens e supremo mandatário dos deuses que habitavam o monte Olimpo. Tinha o poder dos fenômenos atmosféricos e com sua mão direita mandava chuva para as plantações..`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level1_2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level1_3();
  };
  const text =
    "Prometeu queria que este Animal fosse diferente dos outros, se destacasse diante dos outros. Então foi até Olimpo e acendeu uma tocha com o Fogo dos Deuses, o Fogo de Héstia. E deu a esse Animal que passou á se-chamar Homem, fazendo-os mais inteligentes, semelhantes aos deuses.Zeus temendo que ficassem poderosos, ordena que os Homens façam sacrifícios aos deuses para honrá-los.Mas Prometeu não queria que sua criação fosse explorada por Zeus, então manda os Homens sacrificarem duas Vacas e manda separarem em duas pilhas.Uma pequena com as melhores carnes cobertas pelo couro dos animais e outra grande com miúdos, ossos e restos cobertos com gordura para destacar a pilha.Prometeu pediu para Zeus escolher, uma pilha para ele e outra para os homens. Prometeu sabia que Zeus era ganancioso e que ia escolher a maior.Depois que Zeus percebeu que foi enganado, retira o Fogo dos Homens e assim sua inteligência.Mas Prometeu querendo ajudar sua criação, rouba de novo o Fogo dos Deuses e entrega aos homens. Prometeu que teve um Sonho Profético, vendo ser castigado por Zeus. Ele avisa seu irmão e pede que ele não aceite presente nenhum dos deuses.Quando Zeus descobre que ele roubou o Fogo dos Deuses, decide castigar Prometeu.Zeus o aprisiona com correntes indestrutíveis em um rochedo no Monte Cáucaso e decreta que Ethon uma águia gigante, devoraria seu fígado todas as manhãs por toda eternidade. por Prometeu ser imortal seus órgãos se regeneravam de noite. Depois de longos anos de dor e sofrimento, Prometeu é liberto por Héracles. Ethon foi morto por Héracles e as correntes declaradas indestrutíveis foram quebradas por ele.";
  document.getElementById("game-flow-paragraph").innerText = text;
}

function level1_3() {
  var answer = prompt(
    "Quem enganou Zeus?\nZeus \nEpimeteu \nPrometeu"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "prometeu" && atempts < 3) {
    answer = prompt(
      `Vamos! Essa é muito fácil, você tem mais ${
        3 - atempts
      } Quem enganou Zeus?\nZeus \nEpimeteu \nPrometeu`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "A escuridão  te domina e você se torna mais uma das almas errantes.";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText = "Você acertou!";
    document.getElementById("game-flow-paragraph").innerText =
      "Você herdou a inteligência de Atena.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/zeusLevel2.html";
    };
  }
}

window.onload = level1;
