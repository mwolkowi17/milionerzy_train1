import { Scene } from "phaser";

export class Once_again extends Scene {
  button_start_again: Phaser.GameObjects.Image;
  plansza_not_realy: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: "OnceAgain",
    });
  }

  create(): void {
    //adding assets
    this.add.image(640, 360, "plansza_startowa");
    this.plansza_not_realy = this.add.image(640, 360, "not_realy").setAlpha(0);
    this.button_start_again = this.add
      .image(640, 560, "not_realy_play")
      .setInteractive()
      .setAlpha(0);

    // assets tween alpha animation added
    this.tweens.add({
      targets: [this.button_start_again, this.plansza_not_realy],
      alpha: { value: 1, duration: 1000, ease: "Power1" },
    });

    // buttons events

    this.button_start_again.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.button_start_again.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.button_start_again.on("pointerdown", () => {
      this.sound.stopByKey("sample");
      this.scene.start("GameSceneStart");
    });
  }
}
