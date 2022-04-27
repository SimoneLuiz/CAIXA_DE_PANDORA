function level3() {
  document.getElementById("game-flow").style.backgroundImage =
  "url('https://p4.wallpaperbetter.com/wallpaper/541/102/497/banquet-of-the-gods-carlo-bellosio-greek-mythology-ancient-greek-classic-art-hd-wallpaper-thumb.jpg')";

  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level3_2();
  };
  const startText = `Pandora foi enviada para Epimeteu, que já tinha sido alertado por seu irmão a não aceitar nada dos deuses. Ele, por “ver sempre depois”, agiu de forma precipitada e ficou encantado com a bela Pandora. Ela chegou trazendo uma caixa (não era necessariamente uma caixa, mas um jarro) fechada, um presente de casamento para Epimeteu.
  pimeteu pediu para Pandora não abrir caixa, mas, tomada pela curiosidade, não resistiu. Ao abrir a caixa na frente de seu marido, Pandora liberou todos os males que até hoje afligem a humanidade, como os desentendimentos, as guerras e as doenças. Ela ainda tentou fechar a caixa, mas só conseguiu prender a esperança.
  `;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level3_2() {
  var answer = prompt(
    "Qual dom restou? \nPreguiça  \nForça \nEsperança"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "esperança" && atempts < 3) {
    answer = prompt(
      `Poxa! Não me decepcione assim, você tem ${
        3 - atempts
      } chance(s).\n\nQual dom restou? \nPreguiça  \nForça \nEsperança`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "Atena tem terror de ter te criado";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {
      location.href = "../index.html"
    };
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou a última pergunta!";
    document.getElementById("game-flow-paragraph").innerText =
      "Atena tem orgulo de você.";
    document.getElementById("game-button").innerText = "Próximo";
    document.getElementById("game-button").onclick = () => {
      level3_3();
    };
  }
}

function level3_3() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
  document.getElementById("game-flow-title").innerText = "você chegou ao final!";
  document.getElementById("game-flow-paragraph").innerText =
  "Pandora curiosa com que teria dentro da Caixa, resolve abri-la! Quando a Caixa foi aberta, libera uma Névoa Negra com todas as maldades que Prometeu não avia dado aos Homens.Mas bem no fundo da Caixa estava a esperança, que fazia os Homens não desistir e seguir em frente.\n\nObrigado por jogar!! Caso não tenha jogado as outras histórias, o botão abaixo te levará para a página inicial novamente.\n\n\nJogo Desenvolvido por Simone Luiz.";
  document.getElementById("game-button").innerText = "Voltar ao início";
  document.getElementById("game-button").onclick = () => {
    location.href = "../index.html"
  };
}

window.onload = level3;
