class Food{

constructor(){

this.image = loadImage("images/Milk.png");
this.button = createButton('ADD FOOD');

}


display(){
    var x = 100, y = 500;
console.log(foodS);
    if(foodS !== 0){
      for(var i=0;i<foodS;i++){
          if(i%10 == 0){
              x = 1000;
              y=y+50;
          }
          imageMode(CENTER);
          image(this.image,x,y,50,50);
          x=x+30;
      }
    }

    this.button.position(800,95);
    this.button.mousePressed(()=>{
        foodS = foodS + 1;
        this.updateFoodStock(foodS);
    })
}

/*getFoodStock(){

addFB = database.ref('FOOD');
addFB.on("value",readFoodStock());

}

/*readFoodStock(data){

    addFOOD = data.val();
   
   }*/

updateFoodStock(addFOOD){



database.ref('/').update({
    FOOD : addFOOD
})

}

}