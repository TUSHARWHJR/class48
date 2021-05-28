var boy,boy_img;
var ghost,ghost_img;
var bg,bg_img;
var score=0;
var boxes,boxes_img;


function preload(){
boy_img=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png");
ghost_img=loadImage("ghost.png");
bg_img=loadImage("behind.png");
boxes_img=loadImage("boxes.png");
}

function setup(){
createCanvas(1000,800);


bg=createSprite(500,400,1000,800);
bg.addImage("screen",bg_img);
bg.scale=1.5;

boy=createSprite(40,750,10,10);
boy.addAnimation("hero",boy_img);


}
function draw(){
background(0);
boxes();
ghost();
drawSprites();
}
function boxes(){
if (frameCount%60===0) {
 var boxes=createSprite(1250,200,20,20);
 boxes.addImage("hurdle",boxes_img);
 boxes.y=Math.round(random(200,500));
 boxes.velocityX=-6;
 boxes.scale=0.2;   
}
}
function ghost(){
    if (frameCount%150===0) {
        var ghost=createSprite(1000,700,20,20);
        ghost.addImage("ghost",ghost_img);
        ghost.y=Math.round(random(200,300));
        ghost.velocityX=-6;
        ghost.addAnimation("ghost",ghost_img);
        ghost.scale=0.8;
    }

}