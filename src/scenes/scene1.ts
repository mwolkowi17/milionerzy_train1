import { Scene } from "phaser";

export class Game1 extends Scene {
  pytanie1: any;
  odpowiedz1: any;
  odpowiedz2: any;
  odpowiedz3: any;
  odpowiedz4: any;
  play_again: any;
  punktacja: any;

  constructor() {
    super({
      key: "GameScene1",
    });
  }

  create(): void {
    //adding assets
    this.add.image(640, 360, "plansza_startowa");
    this.pytanie1 = this.add.image(640, 360, "pytanie1").setAlpha(0);

    this.play_again = this.add
      .image(640, 360, "play_again")
      .setAlpha(0)
      .setInteractive();
    this.punktacja = this.add.image(640, 360, "punktacja").setAlpha(0);

    this.odpowiedz1 = this.add
      .image(240, 535, "odpowiedz1b")
      .setInteractive()
      .setAlpha(0);
    this.odpowiedz2 = this.add
      .image(690, 535, "odpowiedz2b")
      .setAlpha(0)
      .setInteractive();
    this.odpowiedz3 = this.add
      .image(240, 630, "odpowiedz3b")
      .setAlpha(0)
      .setInteractive();
    this.odpowiedz4 = this.add
      .image(690, 630, "odpowiedz4b")
      .setAlpha(0)
      .setInteractive();

    this.play_again = this.add
      .image(90, 50, "play_againb")
      .setAlpha(0)
      .setInteractive();

    // assets tween alpha animation added
    this.tweens.add({
      targets: [
        this.pytanie1,
        this.odpowiedz1,
        this.odpowiedz2,
        this.odpowiedz3,
        this.odpowiedz4,
        this.play_again,
        this.punktacja,
      ],
      alpha: { value: 1, duration: 1000, ease: "Power1" },
    });

    // buttons events

    this.odpowiedz1.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.odpowiedz1.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.odpowiedz1.on("pointerdown", () => {
      this.add.image(640, 360, "odpowiedz_dobra");
      this.odpowiedz1.setTint(0x3cb371);
      this.odpowiedz1.disableInteractive();
      this.odpowiedz2.disableInteractive();
      this.odpowiedz3.disableInteractive();
      this.odpowiedz4.disableInteractive();

      setTimeout(() => {
        this.scene.start("GameSceneStart");
      }, 2000);
    });

    this.odpowiedz2.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.odpowiedz2.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.odpowiedz3.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.odpowiedz3.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.odpowiedz4.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.odpowiedz4.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.play_again.on("pointerover", function (event) {
      this.setTint(0x8080ff);
      document.body.style.cursor = "pointer";
    });

    this.play_again.on("pointerout", function (event) {
      this.clearTint();
      document.body.style.cursor = "initial";
    });

    this.play_again.on("pointerdown", () => {
      this.scene.start("GameSceneStart");
      document.body.style.cursor = "initial";
    });
  }
}
