var SpaceHipster = SpaceHipster || {};

SpaceHipster.GameState = {
	init: function() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.PLAYER_SPEED = 200;
		this.BULLET_SPEED = -1000;
	},
	preload: function() {
		this.load.image('space', 'assets/images/space.png');
		this.load.image('player', 'assets/images/player.png');
		this.load.image('bullet', 'assets/images/bullet.png');
		this.load.image('enemyParticle', 'assets/images/yellow_enemy.png');
		this.load.spritesheet('yellowEnemy', 'assets/images/yellow_enemy.png', 50, 46, 3, 1, 1);
		this.load.spritesheet('redEnemy', 'assets/images/red_enemy.png', 50, 46, 3, 1, 1);
		this.load.spritesheet('greenEnemy', 'assets/images/green_enemy.png', 50, 46, 3, 1, 1);

	},
	create: function() {
		this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');

	},
	update: function() {

	}
}