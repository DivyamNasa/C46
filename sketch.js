//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var world;
var backgroundImg;
var bg;
var knight;
var idleknight;
var runknight;
var jumpknight;

var gameState;
var tile1,tile11,tile2,tile3,tile4,tile5,tile6,tile7,tile8;
var tile1img,tile2img,tile3img,tile4img,tile5img,tile6img,tile7img,tile8img;
var platform,platformimg,platform1;

function preload() {

backgroundImg=loadImage("BG.png")
idleknight=loadAnimation("Idle/hk1.png","Idle/hk2.png","Idle/hk3.png","Idle/hk4.png","Idle/hk5.png","Idle/hk6.png","Idle/hk7.png","Idle/hk8.png");
runknight=loadAnimation("Run/hkr1.png","Run/hkr2.png","Run/hkr3.png","Run/hkr4.png","Run/hkr5.png","Run/hkr6.png","Run/hkr7.png","Run/hkr8.png","Run/hkr9.png","Run/hkr10.png");
jumpknight=loadAnimation("Jump/hkj1.png","Jump/hkj2.png","Jump/hkj3.png");
tile1img=loadImage("morningtiles/2.png");
tile2img=loadImage("morningtiles/1.png");
tile3img=loadImage("morningtiles/2.png");
platformimg=loadImage("morningtiles/3.png")

}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
  knight=createSprite(200,300,100,100)
  knight.addAnimation("idle",idleknight);
  knight.scale=2.5;
  tile1=createSprite(65,190,190,20)
  tile1.addImage(tile1img)
  tile11=createSprite(190,190,190,20)
  tile11.addImage(tile1img);
  platform=createSprite(65,650,190,20);
  platform1=createSprite(190,650,190,20)
  platform.addImage(tile1img);
  platform1.addImage(platformimg);



}

function draw(){ 
 background(backgroundImg);

if(keyDown("space")&&knight.y>=517){
knight.velocityY=-10;
}
if(keyWentDown("LEFT_ARROW")){
knight.velocityX=-3
knight.addAnimation("idle",runknight);
}
if(keyWentUp("LEFT_ARROW")){
knight.velocityX=0
  knight.addAnimation("idle",idleknight);
}

if(keyWentDown("Right_ARROW")){
  knight.velocityX=3
  knight.addAnimation("idle",runknight);
  }
  if(keyWentUp("Right_ARROW")){
  knight.velocityX=0
    knight.addAnimation("idle",idleknight);
  }

knight.velocityY=knight.velocityY+0.5;
knight.collide(platform);
knight.collide(platform1);


console.log(knight.y)
    drawSprites();
 
}







