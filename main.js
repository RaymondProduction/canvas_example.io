var start = Date.now(); 
var x0=20;
var y0=20;
var a=2;
var t=0.6;
var vy=0;
var vx =4;
var x, y, newV, newX, newY;
var timer = setInterval(function() {
      var timePassed = Date.now() - start;
      if (timePassed >= 7000) {
           clearInterval(timer); // finish 
           return;
      }

      clear();
      draw(timePassed);
    }, 20);

function clear(){
      var canvas = document.getElementById('tutorial');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(timePassed){
      var canvas = document.getElementById('tutorial');
      if (canvas.getContext){
      	var ctx = canvas.getContext('2d');
      	var circle = new Path2D();
        
	if (y>350) {
         	 vy = - newV*0.85;
	         vx=0.85*vx;
	         x0 = newX;
	         y0 = newY;
	         t=0.6;
      	}     
       // t = timePassed/ 100;
       t+=0.6;
       y = y0 + vy * t + a * t * t / 2;
       x = x0 + vx * t;
       newV=vy+a*t;
       newY=y;
       newX=x;
       //circle.moveTo(125+timePassed / 24, 35);
        circle.arc(x, y, 25, 0, 2 * Math.PI);
        ctx.fill(circle);
      }
}


