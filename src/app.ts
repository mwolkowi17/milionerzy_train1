import "phaser";
import Boot from "./scenes/boot";
import Preload from "./scenes/preload";
import { GameStart as GameSceneStart } from "./scenes/game_start";
import { Game1 as GameScene1 } from "./scenes/scene1";

const config: Phaser.Types.Core.GameConfig = {
  title: "Demo Game",

  scene: [Boot, Preload, GameSceneStart, GameScene1],
  backgroundColor: "#333",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: 1280,
    height: 720,
    max: {
      width: 1280,
      height: 720,
    },
  },
};

window.addEventListener("load", () => {
  window["game"] = new Phaser.Game(config);
});
