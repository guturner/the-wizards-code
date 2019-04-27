export class MainScene extends Phaser.Scene {
    private playerSprite: Phaser.GameObjects.Sprite;

    constructor() {
        super({
            key: 'MainScene'
        });
    }

    preload(): void {
        this.load.image('player', '../assets/player.png');
    }

    create(): void {
        this.playerSprite = this.add.sprite(400, 300, 'player');
    }
}