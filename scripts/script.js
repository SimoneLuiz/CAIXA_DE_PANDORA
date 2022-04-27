var charUrl = "";

function playGame() {
  document.getElementById("game-menu").style.display = "none";
}
ygg;
function playZeus() {
  let charScope =
  "Zeus, senhor dos deuses e dos homens, surgiu na Grécia Antiga numa época em que proliferaram vários deuses nos mitos tribais, como tentativa de explicar os fenômenos naturais ou como garantia de vitória nas guerras, de boa colheita, de sorte no amor etc. Zeus é filho de Cromos (o mais forte dos titãs) e de Rea, sua irmã.Diz a lenda que do casamento de Gaia (mãe terra) e Urano (céu) nasceram os titãs, ciclopes e gigantes, que personificavam as coisas grandes e poderosas da terra: montanhas, terremotos, furações etc. Cromos (o mais forte dos titãs), casou-se com sua irmã Rea e tiveram seis filhos. Zeus, Poseidon, Plutão, Hera, Héstia e Deméter.";
  alert("Você escolheu jogar com Zeus!");
  document.getElementById("char-selector").style.display = "none";
  document.getElementById("game-flow-title").innerText = "Jogando com Zeus";
  document.getElementById("game-flow-paragraph").innerText = charScope;
  charUrl = "./pages/ZeusLevel1.html";
}

function playEpimeteu() {
  let charScope =
    " no ultimo Animal criado, Epimeteu não sabia qual atributo lhe-dar, então pediu ajuda a seu irmão Prometeu.Prometeu queria que este Animal fosse diferente dos outros, se destacasse diante dos outros. Então foi até Olimpo e acendeu uma tocha com o Fogo dos Deuses, o Fogo de Héstia. E deu a esse Animal que passou á se-chamar Homem, fazendo-os mais inteligentes, semelhantes aos deuses.Zeus temendo que ficassem poderosos, ordena que os Homens façam sacrifícios aos deuses para honrá-los..";

  alert("Você escolheu jogar com Epimeteu!");
  document.getElementById("char-selector").style.display = "none";
  document.getElementById("game-flow-title").innerText = "Jogando com Epimeteu";
  document.getElementById("game-flow-paragraph").innerText = charScope;
  charUrl = "./pages/EpimeteuLevel1.html";
}

function playPandora() {
  let charScope =
  "Para castigar os homens, Zeus ordenou que o Deus das Artes, Hefesto, fizesse uma mulher parecida com as deusas. Hefesto lhe apresentou uma estátua linda. A deusa Atena lhe deu o sopro de vida, a deusa Afrodite lhe deu beleza, o deus Apolo lhe deu uma voz suave e Hermes lhe deu persuasão. Assim, a mulher recebeu o nome de Pandora (aquela que tem todos os dons).Pandora foi enviada para Epimeteu, que já tinha sido alertado por seu irmão a não aceitar nada dos deuses. Ele, por “ver sempre depois”, agiu de forma precipitada e ficou encantado com a bela Pandora. Ela chegou trazendo uma caixa (não era necessariamente uma caixa, mas um jarro) fechada, um presente de casamento para Epimeteu."
  alert("Você escolheu jogar com Pandora!");
  document.getElementById("char-selector").style.display = "none";
  document.getElementById("game-flow-title").innerText = "Jogando com Pandora";
  document.getElementById("game-flow-paragraph").innerText = charScope;
  charUrl = "./pages/PandoraLevel1.html";
}
