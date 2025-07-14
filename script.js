function openGame(gameId) {
  let iframe = document.getElementById("game-frame");

  if (gameId === "flappy") {
    iframe.src = "https://satyam-mini-games.netlify.app/flappybird/";
  } else if (gameId === "dino") {
    iframe.src = "https://satyam-mini-games.netlify.app/dino/";
  } else if (gameId === "2048") {
    iframe.src = "https://satyam-mini-games.netlify.app/2048/";
  } else if (gameId === "tetris") {
    iframe.src = "https://satyam-mini-games.netlify.app/tetris/";
  } else if (gameId === "brick") {
    iframe.src = "https://satyam-mini-games.netlify.app/brick/";
  }

  document.getElementById("game-modal").style.display = "block";
}

function closeGame() {
  document.getElementById("game-modal").style.display = "none";
  document.getElementById("game-frame").src = "";
}
function openGame(gameId) {
  let iframe = document.getElementById("game-frame");

  if (gameId === "game1") {
    iframe.src = "https://satyam-mini-games.netlify.app/flappybird/";
  } else if (gameId === "game2") {
    iframe.src = "https://satyam-mini-games.netlify.app/dino/";
  } else if (gameId === "game3") {
    iframe.src = "https://satyam-mini-games.netlify.app/2048/";
  } else if (gameId === "game4") {
    iframe.src = "https://satyam-mini-games.netlify.app/space/";
  } else if (gameId === "game5") {
    iframe.src = "https://satyam-mini-games.netlify.app/fruitninja/";
  }

  document.getElementById("game-modal").style.display = "flex";
}

function closeGame() {
  document.getElementById("game-modal").style.display = "none";
  document.getElementById("game-frame").src = "";
}
