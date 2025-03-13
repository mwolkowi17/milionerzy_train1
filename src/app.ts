import "phaser";
import Boot from "./scenes/boot";
import Preload from "./scenes/preload";
import { GameStart as GameSceneStart } from "./scenes/game_start";
import { Game1 as GameScene1 } from "./scenes/scene1";
import { Game2 as GameScene2 } from "./scenes/scene2";
import { Once_again as OnceAgain } from "./scenes/once_again";
import { Times_up as TimesUp } from "./scenes/times_up";

const config: Phaser.Types.Core.GameConfig = {
  title: "Demo Game",

  scene: [
    Boot,
    Preload,
    GameSceneStart,
    GameScene1,
    GameScene2,
    OnceAgain,
    TimesUp,
  ],
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
