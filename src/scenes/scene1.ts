import { Scene } from "phaser";

export class Game1 extends Scene {
  pytanie1: Phaser.GameObjects.Image;
  odpowiedz1: Phaser.GameObjects.Image;
  odpowiedz2: Phaser.GameObjects.Image;
  odpowiedz3: Phaser.GameObjects.Image;
  odpowiedz4: Phaser.GameObjects.Image;
  play_again: Phaser.GameObjects.Image;
  punktacja: Phaser.GameObjects.Image;
  odpowiedz_correct: Phaser.GameObjects.Image;
  ramka_punkty: any;
  timedEvent: any;
  text: any;
  sampleSound: any;
  winSound: any;
  looseSound: any;

  constructor() {
    super({
      key: "GameScene1",
    });
  }

  //preaload audio
  preload(): void {
    this.load.audio("sample", "assets/music.mp3");
    this.load.audio("win", "assets/075747_inception-horn-victory-82997.mp3");
    this.load.audio(
      "loose",
      "assets/8-bit-video-game-fail-version-2-145478.mp3"
    );
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

    this.ramka_punkty = this.add.image(1105, 600, "ramka_punkty1").setAlpha(0);

    this.text = this.add.text(1000, 60, "text");
    this.timedEvent = this.time.delayedCall(11000, this.onEvent, [], this);

    //sound add & play
    this.sampleSound = this.sound.add("sample", { loop: true });
    this.winSound = this.sound.add("win", { loop: false });
    this.looseSound = this.sound.add("loose", { loop: false });
    this.sampleSound.play();

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
        this.ramka_punkty,
      ],
      alpha: { value: 1, duration: 1000, ease: "Power1" },
    });

    //correct answer not sure if it's nessesary
    this.odpowiedz_correct = this.odpowiedz1;
    // buttons events

    //function for event mouse handling

    function myEventPoinerOverOut(button: any) {
      button.on("pointerover", function (event) {
        this.setTint(0x8080ff);
        document.body.style.cursor = "pointer";
      });

      button.on("pointerout", function (event) {
        this.clearTint();
        document.body.style.cursor = "initial";
      });
    }

    //function after click

    const after_click = () => {
      this.odpowiedz1.disableInteractive();
      this.odpowiedz2.disableInteractive();
      this.odpowiedz3.disableInteractive();
      this.odpowiedz4.disableInteractive();
      this.timedEvent.paused = !this.timedEvent.paused;
    };

    myEventPoinerOverOut(this.odpowiedz1);
    myEventPoinerOverOut(this.odpowiedz2);
    myEventPoinerOverOut(this.odpowiedz3);
    myEventPoinerOverOut(this.odpowiedz4);
    myEventPoinerOverOut(this.play_again);

    this.odpowiedz1.on("pointerdown", () => {
      this.add.image(640, 360, "odpowiedz_dobra");
      this.odpowiedz1.setTint(0x3cb371);
      after_click();
      this.winSound.play();
      setTimeout(() => {
        this.scene.start("GameScene2");
      }, 2000);
    });

    this.odpowiedz2.on("pointerdown", () => {
      this.add.image(640, 360, "odpowiedz_zla");
      this.odpowiedz2.setTint(0xff3333);
      after_click();
      this.looseSound.play();
      setTimeout(() => {
        this.sampleSound.stop();
        this.scene.start("GameSceneStart");
      }, 2000);
    });

    this.odpowiedz3.on("pointerdown", () => {
      this.add.image(640, 360, "odpowiedz_zla");
      this.odpowiedz3.setTint(0xff3333);
      after_click();
      this.looseSound.play();
      setTimeout(() => {
        this.sampleSound.stop();
        this.scene.start("GameSceneStart");
      }, 2000);
    });

    this.odpowiedz4.on("pointerdown", () => {
      this.add.image(640, 360, "odpowiedz_zla");
      this.odpowiedz4.setTint(0xff3333);
      after_click();
      this.looseSound.play();
      setTimeout(() => {
        this.sampleSound.stop();
        this.scene.start("GameSceneStart");
      }, 2000);
    });

    this.play_again.on("pointerdown", () => {
      this.sampleSound.stop();
      this.scene.start("GameSceneStart");
      document.body.style.cursor = "initial";
    });
  }

  update() {
    // sposoby wyświetlania czasu

    // this.text.setText(
    //   `Event.progress: ${this.timedEvent.getProgress().toString().substr(0, 4)}`
    // );

    // this.text.setText(
    //   `Czas: ${this.timedEvent.getProgress().toString().substr(2, 1)}`
    // );

    // this.text.setText(
    //   `Czas: ${this.timedEvent.getElapsedSeconds().toString().substr(0, 1)}`
    // );

    if (this.timedEvent.getRemainingSeconds() >= 10) {
      this.text.setText(
        `Czas na odpowiedź: ${this.timedEvent
          .getRemainingSeconds()
          .toString()
          .substr(0, 2)}`
      );
    } else {
      this.text.setText(
        `Czas na odpowiedź: ${this.timedEvent
          .getRemainingSeconds()
          .toString()
          .substr(0, 1)}`
      );
    }
  }

  onEvent() {
    this.sound.stopByKey("sample");
    this.scene.start("TimesUp");
  }
}
