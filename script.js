// Game settings
const canva = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
// Player class
class Fighter { 
constructor(x, y, color) {  
this.x = x;    
this.y = y;    
this.width = 50;    
this.height = 100;   
this.color = color;    
this.health = 100;  
}
// Draw the fighter  
draw() {   
  ctx.fillStyle = this.color;    
  ctx.fillRect(this.x, this.y, this.width, this.height); 
}
// Player movement  
moveLeft() {    
this.x -= 5;
}
moveRight() {    
this.x += 5; 
}
// Player attack  
attack(opponent) {    
  if (this.x + this.width >= opponent.x && this.x <= opponent.x + opponent.width) {      
opponent.health -= 10;   
  }  
 }
}
// Create players
const player1 = new Fighter(100, canvas.height - 120, 'blue');
const player2 = new Fighter(650, canvas.height - 120, 'red');
// Game loop
function gameLoop() { 
ctx.clearRect(0, 0, canvas.width, canvas.height); 
player1.draw();  
player2.draw();  
requestAnimationFrame(gameLoop);
}
// Start the game loop
gameLoop();

// Event listeners for player controls
document.addEventListener('keydown', (event) => {  
switch (event.key) {   
case 'a': 
player1.moveLeft();      
break;    
case 'd':      
player1.moveRight();      
break;    
case 'ArrowLeft':     
player2.moveLeft();      
break;    
case 'ArrowRight':     
player2.moveRight();      
break;  
  }
 });
document.addEventListener('keyup', (event) => {  
if (event.key === 's') {    
  player1.attack(player2);  
} else if (event.key === 'ArrowDown') {    
player2.attack(player1);  
 }
});