import { Scene } from "phaser";

export class GameStart extends Scene {
  przycisk_start: any;

  constructor() {
    super({
      key: "GameSceneStart",
    });
  }

  create(): void {
    // const image = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'phaser_logo');
    // image.setOrigin(0.5);

    this.add.image(640, 360, "plansza_startowa");
    this.przycisk_start = this.add
      .image(640, 800, "przycisk_start")
      .setInteractive()
      .setAlpha(0);

    this.przycisk_start.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.przycisk_start.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.tweens.add({
      targets: this.przycisk_start,
      y: 360,
      duration: 3000,
      alpha: { value: 1, duration: 1000, ease: "Power1" },
      ease: "cubic.out",
      delay: 1000,
    });

    this.przycisk_start.on("pointerdown", () => {
      this.scene.start("GameScene1");
      document.body.style.cursor = "initial";
    });
  }
}
