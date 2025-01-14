// Code Practice: Making a Scene
// Name: Eli Chen
// Date: 1/13/25

"use strict"

let config = {
    type: Phaser.AUTO,
    scene: [ MainMenu, Play ],
}

let game = new Phaser.Game(config)