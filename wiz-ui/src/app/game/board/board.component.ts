import { Component } from '@angular/core';
import { Game } from 'src/app/utils/phaser/phaser.utils';

@Component({
  selector: 'app-game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

    game: Game;

    constructor() {
        this.createGame();
    }
    
    createGame() {
        this.game = new Game();
        this.game.plugins.add(PhaserInput.Plugin);
    }
}
