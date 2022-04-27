function level3() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level3_2();
  };
  const startText = `"Logo percebendo o erro que cometera, Pandora se apressou em fechar a caixa. Com isso, ela conseguiu preservar o único dom positivo que fora depositado naquele recipiente: a esperança.`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level3_2() {
  var answer = prompt("Qual foi o dom que Pandora consegiu guardar? Coragem\nEsperança");

  let atempts = 1;

  while (answer.toLowerCase() !== "esperança" && atempts < 3) {
    answer = prompt(
      `Tem certeza? Te darei mais ${
        3 - atempts
      } chance(s).\n\n"Qual foi o dom que Pandora consegiu guardar? Coragem\nEsperança"`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "O que está morto não pode morrer!";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {
      location.href = "../index.html";
    };
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou a última pergunta!";
    document.getElementById("game-flow-paragraph").innerText =
      document.getElementById("game-button").innerText = "Próximo";
    document.getElementById("game-button").onclick = () => {
      level3_3();
    };
  }
}

function level3_3() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
  document.getElementById("game-flow-title").innerText = "Um final Feliz!";
  document.getElementById("game-flow-paragraph").innerText =
    "Mesmo que a gente erre sempre há possibilidade de nos redimir dos nossos erros.\n\nBjörn não pensou apenas em si ao esconder a morte de Sigrid, e por sido teve a chance de ser perdoado.\n\nObrigado por jogar!! Caso não tenha jogado as outras histórias, o botão abaixo te levará para a página inicial novamente.\n\n\nJogo Desenvolvido por Simone Luiz.";
  document.getElementById("game-button").innerText = "Voltar ao início";
  document.getElementById("game-button").onclick = () => {
    location.href = "../styles/index.html"
  };
}

window.onload = level3;
