var m 
var c
var bg
function preload() {
m = loadAnimation("images/mouse3.png")
c = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png")
c2 = loadAnimation("images/cat1.png")
bg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    mouse = createSprite(100,600,20,20)
    mouse.addAnimation("op",m)
    mouse.scale=0.2
    mouse.setCollider("circle",0,0,30)

    cat = createSprite(700,600,20,20)
   // cat.addAnimation("ops",c2)
    cat.addAnimation("obs",c)
    cat.scale=0.2
    cat.setCollider("circle",0,0,30)
}

function draw() {

    background(bg);
   
   if(cat.x - mouse.x< cat.width/2 + mouse.width/2 && mouse.x - cat.x < mouse.width/2 + cat.width/2 ){
   cat.velocityX = 0
   cat.changeAnimation("ops",c2)
  }

    drawSprites();
}


function keyPressed(){
if(keyCode === 37){
cat.velocityX=-15
cat.changeAnimation("obs",c)

}


}
