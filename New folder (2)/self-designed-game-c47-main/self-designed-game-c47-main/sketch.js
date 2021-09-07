var canvas, backgroundImage;
var gameState = 0;
var distance = 0
var playerage = 0;
var allPlayers;
var obstaclesGroup1, obstaclesGroup
var mybutton;
var reset, resetimage
var signs;
var button1, button2, button3, button4;
var question;
var traffic1, trafficimg, stopimg, stop;
var traffic2, traffic2img;
var test
var signboard, signboardimg
var car1,car2,car3,car1img,car2img,car3img
var timeset=60;
var moo, human, horse, restriction, mmg, hmg, hmg2, rmg
var database;
var image2,image3,image4, image1
var limit50, cows, humans, free, deb
var i1, i2, i3, i4, i5, i6 ,i7, i8, i9, i10, i11, i12, i13;
var i14, i15, i16, i17, i8, i19, i20, i21, i22, i23, i24, i25, i26, i27, i28, i29, i30;
var i31, i32, i33, i34, i35, i36, i37, i38;
var i1_img, i2_img, i3_img, i4_img, i5_img, i6_img, i7_img;
var i8_img, i9_img, i10_img, i11_img, i12_img, i13_img;
var i14_img, i15_img, i16_img, i17_img, i18_img, i19_img;
var i20_img, i21_img, i22_img, i23_img, i24_img, i25_img;
var i26_img, i27_img, i28_img, i29_img, i30_img, i31_img;
var i32_img, i33_img, i34_img, i35_img, i36_img, i37_img;
var i38_img;
var obstacle, obstacle2
var background2, backgroundImage2;
var form, player, game;
var driveimage
var todayyyyy
var failed, failimg
var invisibleGround, invisibleGround2;
var img2
var carimmg, truckimg, vanimg,carimmg2, truckimg2, vanimg2, carimg2
function preload(){
  mmg = loadImage("Moooooo-removebg-preview.png")
  hmg = loadImage("No_Human_Carts_Alllowed-removebg-preview.png")
  hmg2 = loadImage("No_Horse_Carts_Alllowed-removebg-preview.png")
  rmg = loadImage("No_Restrictions-removebg-preview.png")
  traffic2img = loadImage('oneway.png');
  trafficimg = loadImage('uturn no.png');
  stopimg = loadImage('stop.png')
  i1_img = loadImage("50 limit.png")
  i2_img = loadImage("60 limit.png") 
  i3_img = loadImage("70 limit.png")
  i4_img = loadImage("80 limit.png")
  i5_img = loadImage("90 limit.png")
  i6_img = loadImage("100 limit.png")
  i7_img = loadImage("110 limit.png")
  i8_img = loadImage("120 limit.png")
  i9_img = loadImage("cycles.png")
  i10_img = loadImage("giveway.png")
  i11_img = loadImage("go down.jpg")
  i12_img = loadImage("go left.png")
  i13_img = loadImage("go up.jpg")
  i14_img = loadImage("go rigjht.png")
  i15_img = loadImage("go straight.png")
  i16_img = loadImage("keep going left.png")
  i17_img = loadImage("move it.png")
  i18_img = loadImage("NO BEEPS.png")
  i19_img = loadImage("no cheating.jpg")
  i20_img = loadImage("no cow carts.png")
  i21_img = loadImage("no human carts.png")
  i22_img = loadImage("no left.png")
  i23_img = loadImage("no people.png")
  i24_img = loadImage("no right.png")
  i25_img = loadImage("no trucks.png")
  i26_img = loadImage("no vehicles that use a motor.png")
  i27_img = loadImage("stop.png")
  i28_img = loadImage("straight left.png")
  i29_img = loadImage("straight or left.png")
  i30_img = loadImage("ur weight.png")
  i31_img = loadImage("straight or right.png")
  i32_img = loadImage("straight right.png")
  i33_img = loadImage("u cant enter.png")
  i34_img = loadImage("u cant stop.png")
  i35_img = loadImage("ur free.png")
  i36_img = loadImage("ur too heavy.png")
  i37_img = loadImage("ur too tall.png")
  i38_img = loadImage("ur too long.png")
  backgroundImage = loadImage("back.jpg")
  driveimage = loadImage("Drive.png")
  todayyyyy = loadImage("Today.png")
  backgroundImage2 = loadImage("background2.jpg")
  car1img = loadImage("car1.png")
  car2img = loadImage("car2.png")
  car3img = loadImage("car3.png")
  carimmg = loadImage("carr.png")
  truckimg = loadImage("truck.png")
  vanimg = loadImage("van.png")
  carimmg2 = loadImage("carr - Copy.png")
  truckimg2 = loadImage("truck - Copy.png")
  vanimg2 = loadImage("van - Copy.png")
  carimg2 = loadImage("car1 - Copy.png")
  failimg = loadImage("fail.png")
  resetimage = loadImage("Reseted.png")
  image1 = loadImage("image1.jpg")
  image2 = loadImage("image2.jpg")
  signboardimg = loadImage("signboard-removebg-preview.png")
}


function setup(){
  reset = createSprite(1225,550,50,50)
  reset.addImage(resetimage)
  reset.scale = 0.1
  moo = createSprite(400,250,50,50)
  moo.addImage(mmg)
  human = createSprite(600,350,50,50)
  human.addImage(hmg)
  horse  = createSprite(400,250,50,50)
  horse.addImage(hmg2)
  restriction = createSprite(600,350,50,50)
  restriction.addImage(rmg)
  moo.visible = false
  horse.visible = false
  human.visible = false
  restriction.visible = false
  canvas = createCanvas(displayWidth, displayHeight-100);
  database = firebase.database();
  failed = createSprite(650,200,50,50)
  failed.addImage(failimg)
  failed.visible = false;
  drive23 = createSprite(650,200,50,50)
  drive23.addImage(driveimage)
  drive23.scale = 0.5
  background2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-100)
  background2.addImage(backgroundImage2);
  background2.scale = 1.28
  background2.visible = false
  img2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight-100)
  img2.addImage(image1)
  img2.visible = false
  img2.scale = 2.1
  test = createSprite(650,380,50,50);
  test.addImage(todayyyyy);
  test.scale = 0.1;
  test.visible = false;
  car1 = createSprite(650,550,50,50)
  car1.addImage(car1img)
  car1.visible = false;
  game = new Game();
  game.getState();
  game.start();
  invisibleGround = createSprite(500,490,2000,10);
  invisibleGround.visible = false;
  invisibleGround2 = createSprite(500,650,2000,10);
  invisibleGround2.visible = false;
  obstaclesGroup = createGroup();
  obstaclesGroup1 = createGroup();
  signboard = createSprite(500,500,20,20)
  signboard.addImage(signboardimg)
  signboard.visible = false
}


function draw(){
  console.log(gameState)
  console.log(reset.visible)
  car1.collide(invisibleGround);
  car1.collide(invisibleGround2);
  background(backgroundImage);
  background2.velocityX = -4
  if (background2.x < 20){
    background2.x = background2.width/2;
  }

  if(gameState===1){
    clear();
    game.play();
    game.show();
    test.visible = false;
    reset.depth = background2.depth;
    reset.depth = reset.depth + 1000;
    failed.visible = false
    reset.scale = 0.1
    reset.x = 1225
    reset.y = 550
    spawnObstacles();
    spawnObstacles2();
  }
  if(frameCount === 400){
    gameState = 3
    background2.visible = false;
    img2.visible = true;
    signboard.scale = 3.2
    car1.addImage(car3img)
    moo.visible = true;
    horse.visible = true;
    human.visible = true;
    restriction.visible = true;
    signboard.visible = true;

    if(keyDown(UP_ARROW)){
      car1.y = car1.y-2
      car1.scale = car1.scale-0.01
      car1.addImage(car3img)
      }
  }
  if(keyDown(UP_ARROW)){
    car1.y = car1.y-2
    car1.scale = car1.scale-0.01
    car1.addImage(car3img)
    }
  if(car1.scale < 0.4){
    car1.scale = 0.4
  }
  if(car1.scale > 1){
    car1.scale = 1
  }
  if(keyDown(DOWN_ARROW)){
    car1.y = car1.y+2
    car1.scale = car1.scale+0.01
  }
  if(keyDown(LEFT_ARROW)){
    car1.x = car1.x-3
    car1.addImage(car1img)
  }
  if(keyDown(RIGHT_ARROW)){
    car1.x = car1.x+3
    car1.addImage(carimg2)
  }
  if(car1.y > 526.4 && car1.scale > 0.4){
    if(obstaclesGroup.isTouching(car1)){
      gameState = 2;
      
    }
  }
 /* if(obstaclesGroup.isTouching(car1)){
    gameState = 0;
  }
*/
  if (gameState === 2) {
    background2.velocityX = 0;
    car1.x = 650
    car1.y = 550
    obstaclesGroup.setLifetimeEach(-100)
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup1.setLifetimeEach(-100)
    obstaclesGroup1.setVelocityXEach(0);
    failed.visible = true;
    reset.visible = true;
    failed.depth = background2.depth;
    failed.depth = failed.depth + 1;
    reset.depth = background2.depth;
    reset.depth = reset.depth + 1000;
    reset.x = 650
    reset.y = 450
    reset.scale = 0.2
}
console.log(car1.y)
console.log(car1.scale)
 drawSprites();

 
}
function spawnObstacles(){
  if (frameCount % 250 === 0){
    var obstacle = createSprite(1100,580,10,40);
    obstacle.velocityX = -4
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(carimmg);
               obstacle.scale = 0.2
               break;
       case 2: obstacle.addImage(truckimg);
               obstacle.scale = 0.2
               break;
       case 3: obstacle.addImage(vanimg);
               obstacle.scale = 0.2
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     //obstacle.scale = 0.5;
     obstacle.lifetime = 300;
     obstaclesGroup.add(obstacle)
  }
 }
 function spawnObstacles2(){
  if (frameCount % 250 === 0){
    var obstacle2 = createSprite(50,550,10,40);
    obstacle2.velocityX = 4
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle2.addImage(carimmg2);
               obstacle2.scale = 0.2
               break;
       case 2: obstacle2.addImage(truckimg2);
               obstacle2.scale = 0.25
               break;
       case 3: obstacle2.addImage(vanimg2);
               obstacle2.scale = 0.2
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     //obstacle.scale = 0.5;
     obstacle2.lifetime = 300;
     obstaclesGroup1.add(obstacle2)
  }
 }
 