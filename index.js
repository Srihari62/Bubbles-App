
let heading = document.getElementById("heading");
heading.style.color = '#343b35';
heading.style.textAlign = 'center'
heading.style.fontFamily = 'Roboto'

let canvas = document.getElementById('canvas');
canvas.style.backgroundColor = '#a2e3f2'

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

let context = canvas.getContext('2d');





class Circle {
    constructor(xpoint,ypoint,radius,color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpoint,this.ypoint,this.radius,0,Math.PI*2,false);
        context.strokeStyle = 'grey';
        context.lineWidth = 2;
        context.fillStyle = this.color;
        context.fill();
        context.stroke()
        context.closePath();
    }

    changeColor(newColor) {
        this.color = newColor;
        this.draw(context);
    }

    onReset(resetColor) {
        this.color = resetColor;
        this.draw(context);
    }

    clickCircle(xmouse,ymouse) {
        const distance = Math.sqrt(((xmouse - this.xpoint) * (xmouse - this.xpoint)) + 
        ((ymouse- this.ypoint) * (ymouse - this.ypoint)));

        if (distance < this.radius) {
            // this.changeColor('pink')
            return true;
        } else {
            // this.changeColor('red')
            return false;
        }
    }
}







class Arrow {
    constructor(xpoint,ypoint,speed) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.speed = speed;

        this.dx = 1 * speed
    }

    draw(context) {
        context.beginPath();
        context.beginPath();
        context.moveTo(this.xpoint, this.ypoint);
        context.lineTo(this.xpoint+30, this.ypoint-40);
        context.lineTo(this.xpoint+30, this.ypoint-15);
        context.lineTo(this.xpoint+110, this.ypoint-15);
        context.lineTo(this.xpoint+110, this.ypoint+10);
        context.lineTo(this.xpoint+30, this.ypoint+10);
        context.lineTo(this.xpoint+30, this.ypoint+35);
        context.lineTo(this.xpoint, this.ypoint);
        context.fillStyle = 'black';
        context.fill();
        context.stroke();
    }

    update() {
        this.draw(context);
        if (this.xpoint > 160 + this.speed) {
            this.xpoint -= this.dx
            // console.log(this.xpoint)
        }   
    }
    
    onReset() {
        this.xpoint = 1350;
        this.draw(context);   
    }
}





let getDistance = function(xpoint1,ypoint1,xpoint2,ypoint2) {
    let result = Math.sqrt(Math.pow(xpoint2-xpoint1 , 2) + Math.pow(ypoint2-ypoint1 , 2));
    return result;
}




let circle1 = new Circle(100,100,60,'#dfed5f');
circle1.draw(context);
let Arrow1 = new Arrow(1350,100,4);
Arrow1.draw(context);

let w ;
let updateArrow1 = function() {
    w = requestAnimationFrame(updateArrow1);
    context.clearRect(0,0,window_width,window_height);
    Arrow1.update();
    circle1.draw(context);
    Arrow2.draw(context);
    circle2.draw(context);
    Arrow3.draw(context);
    circle3.draw(context);
    Arrow4.draw(context);
    circle4.draw(context);

    // console.log((getDistance(circle1.xpoint,circle1.ypoint,Arrow1.xpoint,Arrow1.ypoint))) 

    if (getDistance(circle1.xpoint,circle1.ypoint,Arrow1.xpoint,Arrow1.ypoint) <= circle1.radius + 2) {
        circle1.color = 'grey';    
    }
    
}





let circle2 = new Circle(100,280,60,'#3d7be0');
circle2.draw(context);
let Arrow2 = new Arrow(1350,280,4);
Arrow2.draw(context);

let x ;
let updateArrow2 = function() {
    x = requestAnimationFrame(updateArrow2);
    context.clearRect(0,0,window_width,window_height);
    Arrow2.update();
    circle2.draw(context);
    Arrow1.draw(context);
    circle1.draw(context);
    Arrow3.draw(context);
    circle3.draw(context);
    Arrow4.draw(context);
    circle4.draw(context);
    

    if (getDistance(circle2.xpoint,circle2.ypoint,Arrow2.xpoint,Arrow2.ypoint) <= circle2.radius + 2) {
        circle2.color = 'grey';    
    }
    
}







let circle3 = new Circle(100,460,60,'#f24a44');
circle3.draw(context);
let Arrow3 = new Arrow(1350,460,4);
Arrow3.draw(context);

let y ;
let updateArrow3 = function() {
    y = requestAnimationFrame(updateArrow3);
    context.clearRect(0,0,window_width,window_height);
    Arrow3.update();
    circle3.draw(context);
    Arrow1.draw(context);
    circle1.draw(context);
    Arrow2.draw(context);
    circle2.draw(context);
    Arrow4.draw(context);
    circle4.draw(context);

    if (getDistance(circle3.xpoint,circle3.ypoint,Arrow3.xpoint,Arrow3.ypoint) <= circle3.radius + 2) {
        circle3.color = 'grey';    
    }
    
}






let circle4 = new Circle(100,640,60,'#3dd95f');
circle4.draw(context);
let Arrow4 = new Arrow(1350,640,4);
Arrow4.draw(context);

let z;
let updateArrow4 = function() {
    z = requestAnimationFrame(updateArrow4);
    context.clearRect(0,0,window_width,window_height);
    Arrow4.update();
    circle4.draw(context);
    Arrow1.draw(context);
    circle1.draw(context);
    Arrow2.draw(context);
    circle2.draw(context);
    Arrow3.draw(context);
    circle3.draw(context);

    if (getDistance(circle4.xpoint,circle4.ypoint,Arrow4.xpoint,Arrow4.ypoint) <= circle4.radius + 2) {
        circle4.color = 'grey';    
    }
    
}



let isCircle1clicked;
let isCircle2clicked;
let isCircle3clicked;
let isCircle4clicked;

canvas.addEventListener('click', (event)=> {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    isCircle1clicked = circle1.clickCircle(x,y);
    isCircle2clicked = circle2.clickCircle(x,y);
    isCircle3clicked = circle3.clickCircle(x,y);
    isCircle4clicked = circle4.clickCircle(x,y);
    if (isCircle1clicked) {
        updateArrow1();
    } 
    else if (isCircle2clicked) {
        updateArrow2();
    } 
    else if (isCircle3clicked) {
        updateArrow3();
    } 
    else if (isCircle4clicked) {
        updateArrow4();
    } 

    // console.log(isCircle1clicked);
    // console.log(isCircle2clicked);
    // console.log(isCircle3clicked);
    // console.log(isCircle4clicked);
});





let btnElement = document.getElementById('button');
btnElement.addEventListener('click' , () => {

    context.clearRect(0,0,window_width,window_height);

    isCircle1clicked = false;
    circle1.onReset('#dfed5f');
    Arrow1.onReset();
    cancelAnimationFrame(w);

    isCircle2clicked = false;
    circle2.onReset('#3d7be0');
    Arrow2.onReset();
    cancelAnimationFrame(x);
    
    isCircle3clicked = false;
    circle3.onReset('#f24a44');
    Arrow3.onReset();
    cancelAnimationFrame(y);
    
    
    circle4.onReset('#3dd95f');
    isCircle4clicked = false;
    cancelAnimationFrame(z);
    Arrow4.onReset();
    
});


