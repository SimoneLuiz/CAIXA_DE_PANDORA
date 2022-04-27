function level1() {
  const startText = `"Antes disso, Prometeu recusou a jovem Pandora de Zeus temendo que ela fizesse parte de algum plano de vingança da divindade roubada. Ao aceitar Pandora, Epimeteu também ganhou uma caixa onde estavam contidos vários males físicos e espirituais que poderiam acometer o mundo. Desconhecedor do conteúdo, ele foi somente alertado de que aquela caixa não poderia ser aberta em nenhuma hipótese. Com isso, o artefato era mantido em segurança, no fundo de sua morada, cercado por duas gralhas barulhentas.".`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level1_2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level1_3();
  };
  const text =
    "Epimeteu depois de uma longa conversa com Pandora parte em direção a encontrar seu irmão,Prometeu foi o responsável pela criação da espécie humana. Na Terra, havia apenas plantas e animais e, segundo a mitologia, Prometeu teria criado o homem a partir do barro, tendo como molde a forma física dos deuses. Epimeteu falou sobre Pandora. Por sua vez Pandora uma vez sozinha chamou Hemera para conversar (Hemera - Hemera tem uma grande beleza, não tão grande quanto a de Afrodite, mas o suficiente para ser considerada também uma deusa da persuasão e da mentira, que através da astúcia pode manipular com certa facilidade tanto mortais quanto os demais deuses. ) Hemera usando mais de uma suas travessuras convenceu Pandora que aquela caixa era a caiza que poderia melhorar as plantações, fartura e se ela tivesse dúvida poderia perguntar ao Apolo. Pandora termina a conversa com Hemera e filha de Atena muito justa e inteligente vai conversar com Afrodite porém não consegue ainda se sentir satisfeita .";
  document.getElementById("game-flow-paragraph").innerText = text;
}

function level1_3() {
  var answer = prompt("Qual deus Pandora vai conversar primeiro? \nHemera  \nHades \nAfrodite");

  let atempts = 1;

  while (answer.toLowerCase() !== "hemera" && atempts < 2) {
    answer = prompt(
      ` Quer se tornar uma alma errante?... ${
        2 - atempts
      } chance(s).\n\n"Qual você escolhe? \nHemera  \nHades \nGaia`
    );
    atempts++;
  }

  if (atempts > 1) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "O que está morto não pode morrer!.";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {
      location.href = "../index.html";
    };
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou !";
    document.getElementById("game-flow-paragraph").innerText =
      "Pandora continua conversando com os deuses até encontrar Atena que foi uma das suas criadoras, Atena fala para pandora que nada do que está destinando pode ser mudado. Pandora enfrenta Atena e dúvida da sua capacidade de justiça para as pessoas. Hemera novamente aparece para encontrar pandora e convece Pandora novamente de abrir a caixa, e descobrir o que tem dentro,Pandora reluta mais volta para conversar com Epimeteu que agora era seu marido.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/pandoraLevel2.html";
    };
  }
}

window.onload = level1;
