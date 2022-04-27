function level3() {
  document.getElementById("game-flow").style.backgroundImage =
  "url('https://aventurasnahistoria.uol.com.br/media/uploads/deuses_gregos.jpg')";

  document.getElementById("game-button").innerText = "Responder";
  
  document.getElementById("game-button").onclick = () => {
    level3_2();
  };
  const startText = `Logo depois Zeus a batiza de Pandora e lhe-entrega uma Caixa, e pede para ela que nunca abra a Caixa. Então manda Hérmes levá-la à Epimeteu que fica maravilhado com a linda Mulher, aceita ficar com ela, mesmo seu Irmão lhe-avisando que não aceita-se presentes dos deuses.
Pandora curiosa com que teria dentro da Caixa, resolve abri-la! Quando a Caixa foi aberta, libera uma Névoa Negra com todas as maldades que Prometeu não avia dado aos Homens.`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level3_2() {
  var answer = prompt(
    "Qual foi o erro de Pandora? \nGula \nLuxuria \nCuriosidade"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "curiosidade" && atempts < 3) {
    answer = prompt(
      `Estamos quase no fim! Você tem ${
        3 - atempts
      } chance(s).\n\n"Qual foi o erro de Pandora? \nGula \nLuxuria \nCuriosidade`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
    "A escuridão de Helheim te domina e você se torna mais uma das almas errantes.";

    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {
      location.href = "../index.html"
    };
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou a última pergunta!";
    document.getElementById("game-flow-paragraph").innerText =
    "Mas bem no fundo da Caixa estava a esperança, que fazia os Homens não desistir e seguir em frente"
    document.getElementById("game-button").innerText = "Próximo";
    document.getElementById("game-button").onclick = () => {
      level3_3();
    };
  }
}
function level3_3() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://www.friendz10.com/uploads/images/galeriimages/01_2021/66-4-5ff98de782267.png')";
  document.getElementById("game-flow-title").innerText = "você chegou ao final";
  document.getElementById("game-flow-paragraph").innerText =
    "Pandora curiosa com que teria dentro da Caixa, resolve abri-la! Quando a Caixa foi aberta, libera uma Névoa Negra com todas as maldades que Prometeu não avia dado aos Homens.Mas bem no fundo da Caixa estava a esperança, que fazia os Homens não desistir e seguir em frente.\n\nObrigado por jogar!! Caso não tenha jogado as outras histórias, o botão abaixo te levará para a página inicial novamente.\n\n\nJogo Desenvolvido por Simone Luiz.";
  document.getElementById("game-button").innerText = "Voltar ao início";
  document.getElementById("game-button").onclick = () => {
    location.href = "../index.html"
  };
}

window.onload = level3;
