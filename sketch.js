var bird,birdImg;
var bg,bgImg
var cImg,owl1Img,owlImg;
var over;
var gameState=1;
var PLAY=1;
var END=0;


function preload(){
  
birdImg=loadImage("bird.png")
groundImg=loadImage("g.jpg")
owlImg=loadImage("3.png")
bgImg=loadImage("g.jpg")
owl1Img=loadImage("4-1.png")
cImg=loadImage("4.png")
oImg=loadImage("over.jpg")
sound=loadSound("dd.wav")
  
  
}


function setup() {
  createCanvas(600,300)
 
  bg=createSprite(300,100,20,20)
  bg.addImage("bg",bgImg)
  bg.velocityX=-2;
  
  bird=createSprite(100,150,20,20)
  bird.addImage("bird",birdImg)
  bird.scale=1
  
  over=createSprite(300,150,20,20)
  over.addImage("over",oImg)
  over.scale=1.3
  over.visible=false;
  
  owlGroup=new Group();
  owl2=new Group();
  cloudsGroup=new Group();
  
}

function draw() {
  
  
  if(gameState===1){
    
  bird.velocityX=0;
  bird.velocityY=0;
  
 if (bg.x<0) {
        bg.x = bg.width/2
  }
  

  if(keyDown('w')){
    bird.velocityY=-4;
  }
  
   if(keyDown('s')){
    bird.velocityY=4;
    
  }
  
  if(bird.isTouching(owlGroup)||bird.isTouching(owl2)||
     bird.isTouching(cloudsGroup)){
    gameState=END;
  }
  
  spawn();
  spawn2();
  spawn3();
    
  }else if (gameState===0){
    
    over.visible=true;
    owlGroup.destroyEach();
        owl2.destroyEach();
        cloudsGroup.destroyEach();
    
owlGroup.setLifetimeEach(0)
    owl2.setLifetimeEach(0)
    cloudsGroup.setLifetimeEach(0)
    
    owlGroup.setVelocityEach(0)
    owl2.setVelocityEach(0)
    cloudsGroup.setVelocityEach(0)
    


    
  }
   spawn();
  spawn2();
  spawn3();
  
  
  drawSprites();
 
}

function spawn(){
  
  
  
  if(frameCount % 100===0){
  
 var  owl=createSprite(610,35,20,20)
  owl.addImage("owl",owlImg);
  owl.velocityX=-2
  owl.lifetime=310;
  owl.scale=0.1;
    
    owlGroup.add(owl);
    
  }

}

function spawn2(){
  
  
  
  if(frameCount % 120===0){
  
 var  owl1=createSprite(600,240,20,20)
 
  owl1.y = Math.round(random(250,150));
  owl1.addImage("owl",owl1Img);
  owl1.velocityX=-2
  owl1.lifetime=310;
  owl1.scale=0.1;
    
    owl2.add(owl1)
    
  }

}


function spawn3() {
  //write code here to spawn the clouds
 if (frameCount % 150 === 0) {
    var cloud = createSprite(620,250,40,10);
    cloud.y = Math.round(random(100,250));
    cloud.addImage("v",cImg);
    cloud.scale = 0.5
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 210;
    
    //adjust the depth
    
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}




