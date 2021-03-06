import LeapInput from './leapInput'

const game = new Phaser.Game(
    window.innerWidth,
    window.innerHeight,
    Phaser.AUTO,
    'game-root',
    {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
);

let ball;
let pad;
let bricksGroup;
let timerText, timer = 0;
let sounds = {};

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    // game.stage.backgroundColor = '#eee';

    game.load.image('ball', require('../images/ball.png'));
    game.load.image('pad', require('../images/pad.png'));
    game.load.image('brick_1', require('../images/01.png'), 100, 33);
    game.load.image('brick_2', require('../images/02.png'), 100, 33);
    game.load.image('brick_3', require('../images/03.png'), 100, 33);
    game.load.image('brick_4', require('../images/04.png'), 100, 33);
    game.load.image('brick_5', require('../images/05.png'), 100, 33);
    game.load.image('brick_6', require('../images/06.png'), 100, 33);
    game.load.image('brick_7', require('../images/07.png'), 100, 33);
    game.load.image('brick_8', require('../images/08.png'), 100, 33);
    game.load.image('brick_9', require('../images/09.png'), 100, 33);
    game.load.image('brick_10', require('../images/10.png'), 100, 33);
    game.load.audio('pad-bounce', [require('../sounds/pad-bounce.mp3')]);
    game.load.audio('brick-bounce', [require('../sounds/brick-bounce.mp3')]);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Création du groupe de briques
    bricksGroup = game.add.physicsGroup();
    // Génération des briques
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 10; x++) {
            let sprite = new Phaser.Sprite(game, x * 100 + (game.world.width - 1000) / 2, 100 + y * 33, 'brick_' + (x % 10 + 1));
            bricksGroup.add(sprite);
        }
    }
    bricksGroup.forEach(item => {
        item.body.immovable = true;
    });

    // Création de la balle
    ball = game.add.sprite(game.world.width / 2, game.world.height - 100, 'ball');
    ball.anchor.set(0.5);
    game.physics.arcade.enable(ball);
    ball.body.collideWorldBounds = true;
    ball.body.velocity.set(400, -400);
    ball.body.bounce.set(1);
    
    // Création du pad
    pad = game.add.sprite(game.world.width / 2, game.world.height - 5, 'pad');
    pad.anchor.set(0.5, 1);
    game.physics.arcade.enable(pad);
    pad.body.immovable = true;

    // La balle peut sortir en bas de l'écran
    game.physics.arcade.checkCollision.down = false;
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(function(){
        window.alert('Game over!');
        window.location.reload();
    }, this);

    // Timing
    timerText = game.add.text(game.world.centerX, game.world.centerY, '0.0s', { font: '148px Arial', fill: 'rgba(255, 255, 255, 0.3)' });
    timerText.anchor.set(0.5, 0.5);
    setInterval(() => timer += 100, 100);

    // Sounds
    sounds.padBounce = game.add.audio('pad-bounce');
    sounds.brickBounce = game.add.audio('brick-bounce');
}

function update() {
    game.physics.arcade.collide(ball, bricksGroup, ballHitBrick);
    game.physics.arcade.collide(ball, pad, ballHitPad);

    if (LeapInput.connected) {
        pad.x = LeapInput.position.x;
    } else {
        pad.x = game.input.x || game.world.width * 0.5;
    }

    timerText.setText((timer / 1000).toFixed(1) + 's');
}

function render() {

}

function ballHitBrick(ball, brick) {
    brick.kill();
    sounds.brickBounce.play();

    // Augmentation de la vitesse de la balle
    ball.body.velocity.y = (ball.body.velocity.y > 0) ? ball.body.velocity.y + 10 : ball.body.velocity.y - 10;

    const remainingBalls = bricksGroup.children.reduce((total, brick) => brick.alive ? total + 1 : total, 0);
    if (remainingBalls === 0) {
        window.alert('Bravo!\nVous avez complété le jeu en '+ (timer / 1000).toFixed(1) +' secondes !');
        window.location.reload();
    }
}

function ballHitPad(ball, pad) {
    sounds.padBounce.play();
    ball.body.velocity.x = -1 * 5 * (pad.x - ball.x) * 1.5;
}