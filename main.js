noseX ="" 
noseY =""

function preload() {
	mario_coin = loadSound("coin.wav")
	mario_gameover = loadSound("gameover.wav")
	mario_jump = loadSound("jump.wav")
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	console.log("hello")
	canvas.parent("canvass")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(1240,336)
	video.parent("game_console")
	poseNet = ml5.poseNet(video,modalloaded)
	poseNet.on('pose',getposes)
}

function draw() {
	game()

}

function modalloaded(){
	console.log("modal has been loaded")

}

function getposes(results){
	if(results.length > 0){
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
}





