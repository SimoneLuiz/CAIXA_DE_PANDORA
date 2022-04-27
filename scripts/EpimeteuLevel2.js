function level2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level2_2();
  };
  const startText = `Para castigar os homens, Zeus ordenou que o Deus das Artes, Hefesto, fizesse uma mulher parecida com as deusas. Hefesto lhe apresentou uma estátua linda. A deusa Atena lhe deu o sopro de vida, a deusa Afrodite lhe deu beleza, o deus Apolo lhe deu uma voz suave e Hermes lhe deu persuasão. Assim, a mulher recebeu o nome de Pandora (aquela que tem todos os dons).!`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level2_2() {
  var answer = prompt("Quem alertou Epimeteu? \nOdin  \nVidar \nPrometeu");

  let atempts = 1;

  while (answer.toLowerCase() !== "prometeu" && atempts < 3) {
    answer = prompt(
      `Caramba você é ruim de memória, eu até já falei o nome dele para você, vou de tar mais ${
        3 - atempts
      } chance(s).\n\nQual o nome do meu glorioso? \nOdin  \nVidar \nprometeu`
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
    document.getElementById("game-flow-title").innerText =
      "Você acertou Novamente!";
    document.getElementById("game-flow-paragraph").innerText =
    "Você realmente inteligente , Atena tem orgulo de ter te dado o sorpo da vida.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/EpimeteuLevel3.html";
    };
  }
}

window.onload = level2;
