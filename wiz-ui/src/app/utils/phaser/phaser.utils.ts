import "phaser";
import { MainScene } from 'src/app/game/scenes/main.scene';

const boardConfig: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  }
};

export class Game extends Phaser.Game {

  constructor() {
    super(boardConfig);
  }
}