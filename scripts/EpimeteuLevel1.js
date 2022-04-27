function level1() {
  const startText = "Prometeu (aquele que vê antes) e seu irmão Epimeteu (aquele que vê depois) criaram os animais e os homens. Deram a cada animal um poder, como voar, caçar, coragem, garras, dentes afiados. O homem, criado por Prometeu a partir da argila, ficou sem nada por ser o último a ser feito. Prometeu deu um pouco de cada animal para o homem, mas faltava alguma coisa especial.Prometeu ensinou diversas coisas ao homem. Ensinou a domesticar animais, fazer remédios, construir barcos, escrever, cantar, interpretar sonhos e buscar riquezas minerais. Porém, enfureceu Zeus ao roubar o fogo dos deuses e dá-lo aos homens. Zeus decidiu, então, vingar-se de Prometeu e dos homens.";

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level1_2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level1_3();
  };
  const text =
    "Prometeu foi acorrentado a uma montanha. Sua condenação foi passar a eternidade preso a uma rocha, aonde uma ave viria comer seu fígado. Toda noite seu fígado se regeneraria e a ave voltaria no dia seguinte pra lhe comer o fígado novamente.";
  document.getElementById("game-flow-paragraph").innerText = text;
}

function level1_3() {
  var answer = prompt(
    "Quem decidiu se vingar? \nPrometeu \nEpimeteu \nZeus"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "zeus" && atempts < 3) {
    answer = prompt(
      `Vamos eu sei que você é mais inteligente que isso, vou te dar mais ${
        3 - atempts
      } chance(s).\n\nQuem decidiu se vingar? \nPrometeu \nEpimeteu \nZeus`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url(https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "A escuridão  te domina e você se torna mais uma das almas errantes.";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText = "Você acertou!";
    document.getElementById("game-flow-paragraph").innerText =
      "Você realmente inteligente , Atena tem orgulo de ter te dado o sorpo da vida.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/EpimeteuLevel2.html";
    };
  }
}

window.onload = level1;
