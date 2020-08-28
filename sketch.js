//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var DOGIMG1;
var DOGIMG2;
var feedB;
var addFB;
var foodObj;
var fedTime;
var lastFed;
var minTIME

function preload()
{
  //load images here
 DOGIMG1 = loadImage("images/dogImg.png");
 DOGIMG2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1500, 1500);
  dog = createSprite(600,600,200,200);
  dog.addImage(DOGIMG1);

sample = new Food();
 /* feedB = createButton("FEED THE DOG");
  feedB.positon(700,95);
  feedB.mousePressed(feedDog);*/

 /* addFood = createButton("Add Food",800,95);
addFood.positon(800,95);
  addFood.mousePressed(addFoods);*/
  
  database = firebase.database();

  foodStock = database.ref('FOOD');
  foodStock.on("value",readStock);

  lastFedRef = database.ref('feedTime');
  lastFedRef.on("value",readTime);

  minTIMERef = database.ref('minuteTime');
  minTIMERef.on("value",readminuteTime);
  
}


function draw() {  
background("#3D8B58");

fill("#C0D2DB")
textSize(40);
text("NOTE: PRESS UP_ARROW KEY TO FEED FARM_FRESH MILK",100,200);

text("MILK : " +foodS,1000,300);
text("LAST FED: " + lastFed+ ":" + fedTime,1000,400);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(DOGIMG2);
}

if(keyWentUp(DOWN_ARROW)){
  dog.addImage(DOGIMG1)
}

sample.display();

  drawSprites();
  //add styles here

}

function readTime(data){
  lastFed= data.val();
}

function readminuteTime(data){
  fedTime= data.val();
}


function readStock(data){
  foodS = data.val();
  
}

function writeStock(x){

if(x<= 0){
  x = 0;
} else{
  x = x-1;
}

database.ref('/').update({
  FOOD: x,
  feedTime: hour(),
  minuteTime: minute()
})

}

