function level2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level2_2();
  };
  const startText = `"Aproveitando de sua beleza, Pandora convenceu o marido a se livrar das gralhas que lhe causavam espanto. Após atender ao pedido da esposa, Epimeteu  caiu em um sono profundo. Nesse instante, não suportando a própria curiosidade, Pandora abriu a caixa proibida para espiar o seu conteúdo. Naquele momento, ela acabou libertando várias doenças e sentimentos que atormentariam a existência do Homem no mundo. Zeus assim concluía o seu plano de vingança contra Prometeu." `;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level2_2() {
  var answer = prompt(
    "O que pandora convece Epimeteu de se livrar? \nGralhas \nAnimais \nCaixa"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "gralhas" && atempts < 3) {
    answer = prompt(
      `Talvez você morra por aí! ${
        3 - atempts
      } chance(s).\n\nQual você escolhe? \ngralhas \nAnimais \nCaixa`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "O que está morto não pode morrer!.";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {
      location.href = "../index.html";
    };
  } else {
    document.getElementById("game-flow-title").innerText =
      "Para um nobre você é inteligente!";
    document.getElementById("game-flow-paragraph").innerText =
      "Os caminhos em frente são sempre escuros, a gente nunca sabe o que vai encontrar, mas na maioria das vezes os caminhos da glória sãos os mais difíceis - .";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/pandoraLevel3.html";
    };
  }
}

window.onload = level2;
