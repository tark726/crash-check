var car1,car2,car3,wall;
var speed1,speed2,speed3,weight,deformation1,deformation2,deformation3;
function setup() {
  createCanvas(1200,400);
  
 car1 = createSprite(50, 100, 30,30);
 car1.shapeColor = "white";
 
 car2 = createSprite(50, 200, 30,30);
 car2.shapeColor = "white";
 
 car3 = createSprite(50,300, 30,30);
 car3.shapeColor = "white";
 
 wall = createSprite(1100,200,60,400);
 wall.shapeColor = "grey";
 speed1 = random(55,90);
  speed2 = random(55,90);
  speed3 = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");
  
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3; 
  if(isTouching(car1,wall)){
    car1.velocityX = 0;
    car1.x = 1060;
    deformation1 = (weight*speed1*speed1)/45000;
    if(deformation1<100){
      car1.shapeColor = "green";
    }
    if(deformation1>100&&deformation1<180){
      car1.shapeColor = "yellow";
    }
    if(deformation1>180){
      car1.shapeColor = "red";
    }
    console.log(deformation1);
    console.log(deformation2);
    console.log(deformation3);
  } 
  if(isTouching(car2,wall)){
    car2.velocityX = 0;
    car2.x = 1060;
    deformation2 = (weight*speed2*speed2)/45000;
    if(deformation2<100){
      car2.shapeColor = "green";
    }
    if(deformation2>100 && deformation2<180){
      car2.shapeColor = "yellow";
    }
    if(deformation2>180){
      car2.shapeColor = "red";
    }
    
  } 

  if(isTouching(car3,wall)){
    car3.velocityX = 0;
    car3.x = 1060;
    deformation3 = (weight*speed3*speed3)/45000;
    if(deformation3<100){
      car3.shapeColor = "green";
    }
    if(deformation3>100  && deformation3<180){
      car3.shapeColor = "yellow";
    }
    if(deformation3>180){
      car3.shapeColor = "red";
    }
    
  } 
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
  return true;
    }
  else {
  return false;
  }
  }