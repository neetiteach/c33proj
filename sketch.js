var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var engine,world,ground;
var divisionHeight=300;
var divisions=[];
var count=0,scal=0;
var gameState="play";
var val=[500,500,500,500,200,200,200,100,100,100];
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+scal,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  
   
     
  
   for (var k = 0; k < divisions.length; k++) {
       
       divisions[k].display();
       var posx=divisions[k].body.position.x+20;
       var posy=divisions[k].body.position.y+20;
       //console.log(posx);
       text(val[k],posx,posy);
   }
   
   if(particles){
     particles.display();
     for(var i=0;i<divisions.length;i++){
       var p=particles.body.position;
       var d1=divisions[i].body.position;
      
       if(p.y>760){
        
         if(Math.round(p.x)>d1.x && Math.round(p.x)<d1.x+80){
           
            scal=scal +val[i];
            particles=null;
   
            break;          
        }
      }
     }
    }

   if(count===5&&particles===null){
    gameState="end";
    textSize(60);
    fill("red");
    text("Game Over",width/2-80,height/2-30);

  }
}



function mousePressed(){
  
  if(gameState!=="end" && count<5){
    particles=new Particle(random(width/2-30, width/2+30), 10,10);
    count++;
  
   

    
  }
  

}