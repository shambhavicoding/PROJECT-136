video="";

function preload(){
    video=createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas=createCanvas(480,280);
    canvas.center();
}
function draw(){
    image(video,0,0,480,280);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
    objects=document.getElementById("object_name");
}
function modelLoaded(){
    console.log('Model Loaded!');
    status=true;
}