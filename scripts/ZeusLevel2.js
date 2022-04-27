function level2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level2_2();
  };
  const startText = "Mas Zeus venho interver o acontecido, e diz que Prometeu ficaria preso ao rochedo todo eternidade. Então Prometeu pensa um pouco e usa um pedaço da corrente e pega um pedaço do rochedo e faz um anel e coloca no dedo.Logo depois diz que por meio daquele anel ficaria ligado ao rochedo por toda eternidade.Zeus fica admirado com tamanha inteligência e permite que Prometeu fique livre. Mas Zeus ainda querendo castigar os homens, manda Hefesto criar a Primeira Mulher! Ela recebeu diferentes atributos, Afrodite lhe-deu a beleza, roupas e jóias e Hérmes deu o dom da palavra.";

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level2_2() {
  var answer = prompt(
    "O que Zeus pediu para Hefesto criar? \nAesir e Vanir \nAesir e Vidir \nPandora "
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "pandora" && atempts < 3) {
    answer = prompt(
      `Creio que pode ser melhor do que isso, mais ${
        3 - atempts
      } chance(s).\n\nO que Zeus pediu para Hefesto criar? \nAesir e Vanir \nAesir e Vidir \nPandora`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png)";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
    "A escuridão de Helheim te domina e você se torna mais uma das almas errantes.";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou outra vez!";
    document.getElementById("game-flow-paragraph").innerText =
    "Você herdou a inteligência de Atena.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/zeusLevel3.html";
    };
  }
}

window.onload = level2;
