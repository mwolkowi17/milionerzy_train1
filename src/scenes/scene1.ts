import { Scene } from "phaser";

export class Game1 extends Scene {
  constructor() {
    super({
      key: "GameScene1",
    });
  }

  create(): void {
    // const image = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'phaser_logo');
    // image.setOrigin(0.5);

    this.add.image(640, 400, "plansza_startowa");
  }
}
