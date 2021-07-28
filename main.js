canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width= 100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";
background_image="mars.jpg";
function add(){
    back_img=new Image();
    back_img.src=background_image;
    back_img.onload=uploadBackground;

    rover_img=new Image();
    rover_img.src=rover_image;
    rover_img.onload=uploadRover;
}
function uploadBackground(){
   ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        console.log("up arrow key");
        up();
    
    }
    if(keyPressed=='40'){
        console.log("down arrow key");
        down();
    }
    if(keyPressed=='37'){
        console.log("left arrow key");
        left();

    }
    if(keyPressed=='39'){
        console.log("right arrow key");
right();
    }
    
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y<=510){
        rover_y=rover_y+10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}