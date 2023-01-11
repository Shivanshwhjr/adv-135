status2="";
input="input";

function preload()
{
    
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createVideo();
    video.hide();
}

function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}