var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  Dog = loadImage("Dog.png")
  dogHappy = loadImage("happydog.png")
  foodStock = database.ref('food')
  foodStock.on("value", readStock);
  dog = createSprite(displayHeight/2, displayWidth/2)
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addimage(dogHappy)
  }

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

